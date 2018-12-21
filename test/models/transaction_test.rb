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

require 'test_helper'

class TransactionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
