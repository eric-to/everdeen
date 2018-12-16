# == Schema Information
#
# Table name: deposits
#
#  id           :bigint(8)        not null, primary key
#  user_id      :integer          not null
#  amount       :float            not null
#  deposit_date :datetime         not null
#

class Deposit < ApplicationRecord
  validates :user_id, :amount, :deposit_date, presence: true
  validates_uniqueness_of :user_id, :scope => [:deposit_date]

  before_validation :ensure_deposit_date
  
  belongs_to :user

  private

  def ensure_deposit_date
    self.deposit_date ||= Time.now
  end

end
