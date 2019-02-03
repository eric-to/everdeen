# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :first_name, :last_name, presence: true
  validates :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :deposits
  has_many :transactions

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  ####################
  ## Portfolio-related Methods

  def buying_power_available
    total_amount = 0
    self.deposits.each { |deposit| total_amount += deposit.amount }
    self.transactions.each do |transaction|
      if transaction.transaction_type == "buy"
        total_amount -= transaction.amount
      else
        total_amount += transaction.amount
      end
    end
    total_amount = total_amount.round(2)
    if total_amount <= 0
      100000
    else
      total_amount
    end
  end

  def shares_owned
    stocks = Hash.new(0)
    self.transactions.each do |transaction|
      if transaction.transaction_type == "buy"
        stocks[transaction.ticker] += transaction.num_shares
      else
        stocks[transaction.ticker] -= transaction.num_shares
      end
    end
    stocks
  end

  def current_stock_prices
    stocks = shares_owned
    stock_prices = Hash.new

    url = 'https://api.iextrading.com/1.0/stock/market/batch?types=quote&range=1m&last=5&symbols=';
    stocks.each do |ticker, _|
      url += "#{ticker},"
    end
    uri = Net::HTTP.get(URI(url))
    response = JSON.parse(uri)

    stocks.each do |ticker, _|
      price = (response[ticker]['quote']['latestPrice']).to_s
      if price[-2] == '.'
        price += '0'
      end
      stock_prices[ticker] = price
    end

    stock_prices
  end

  def total_market_value
    stocks = shares_owned
    total_amount = buying_power_available

    url = 'https://api.iextrading.com/1.0/stock/market/batch?types=quote&range=1d&last=5&symbols='
    stocks.each do |ticker, _|
      url += "#{ticker},"
    end
    uri = Net::HTTP.get(URI(url))
    response = JSON.parse(uri)

    stocks.each do |ticker, num_shares|
      total_amount += response[ticker]['quote']['latestPrice'].to_f.round(2) * num_shares
    end

    total_amount.round(2)
  end

  def opening_balance(currentDate)
    cash_balance = 0
    self.deposits.each { |deposit| cash_balance += deposit.amount }

    stocks = Hash.new(0)
    self.transactions.each do |transaction|
      if transaction.transaction_date <= 1.day.ago
        if transaction.transaction_type == "buy"
          stocks[transaction.ticker] += transaction.num_shares
          cash_balance -= transaction.amount
        else
          stocks[transaction.ticker] -= transaction.num_shares
          cash_balance += transaction.amount
        end
      end
    end

    total_balance = cash_balance.round(2)

    last_trading_day = 1.day.ago.wday
    if [6, 0].include?(last_trading_day)
      if last_trading_day == 6
        last_trading_day = 2.days.ago
      else
        last_trading_day = 3.days.ago
      end
    end

    url = 'https://api.iextrading.com/1.0/stock/market/batch?types=quote,chart&range=1m&symbols='
    stocks.each do |ticker, _|
      url += "#{ticker},"
    end
    uri = Net::HTTP.get(URI(url))
    response = JSON.parse(uri)

    stocks.each do |ticker, num_shares|
      last_closing_price = response[ticker]['chart'].last
      last_closing_price = last_closing_price["close"]
      total_balance += last_closing_price * num_shares
    end

    total_balance
  end

  def intraday_data
    open_balance = opening_balance(Time.now)
    stocks = shares_owned

    url = 'https://api.iextrading.com/1.0/stock/market/batch?types=chart&chartInterval=5&range=1d&symbols='
    stocks.each do |ticker, _|
      url += "#{ticker},"
    end
    uri = Net::HTTP.get(URI(url))
    response = JSON.parse(uri)

    balance_at_times = Hash.new(open_balance)
    stocks.each do |ticker, num_shares|
      charts = response[ticker]['chart']
      charts.each do |chart|
        if chart['marketOpen'] && chart['label'] != '09:30 AM'
          balance_at_times[chart['label'] + ' ET'] += chart['marketOpen'] * num_shares
        end
      end
    end

    balance_at_times
  end

  def 

end
