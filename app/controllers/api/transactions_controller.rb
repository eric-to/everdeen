class Api::TransactionsController < ApplicationController
  # TODO: protect routes like this one
  def create
    @transaction = Transaction.new(transaction_params)
    @transaction.user_id = current_user.id

    # check validity of transaction
  end

  private

  def transactions_params
    params.require(:transactions).permit(:ticker, :num_shares, :transaction_type, :amount)
  end
end
