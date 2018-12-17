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

  ########## Auth-related Methods ##########

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

  ########## Portfolio-related Methods ##########

  def buying_power
    total = 0
    self.deposits.each { |deposit| total += deposit.amount }
    self.transactions.each do |transaction|
      if transaction.transaction_type == "buy"
        total -= transaction.amount
      else
        total += transaction.amount
      end
    end
    total.round(2)
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

  def one_day_data
    open_balance = buying_power
    url = "https://api.iextrading.com/1.0/stock/market/batch?types=chart&range=1d&symbols="
    self.transactions.select(:ticker).distinct.each do |transaction|
      url += "#{transaction.ticker},"
    end
    response = JSON.parse(open(url).read)
    p response["GPRO"]
    
  end

end
