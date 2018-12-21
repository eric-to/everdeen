# == Schema Information
#
# Table name: transactions
#
#  id               :bigint(8)        not null, primary key
#  user_id          :integer          not null
#  ticker           :string           not null
#  num_shares       :integer          not null
#  transaction_date :datetime         not null
#  transaction_type :string           not null
#  amount           :float            not null
#

class Transaction < ApplicationRecord
  validates :user_id, :ticker, :num_shares, :transaction_date, :transaction_type, :amount, presence: true
  validates_uniqueness_of :user_id, :scope => [:transaction_date]

  before_validation :ensure_transaction_date

  belongs_to :user

  private

  def ensure_transaction_date
    self.transaction_date ||= Time.now
  end

end
