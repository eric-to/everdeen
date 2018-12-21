class Api::TransactionsController < ApplicationController
  # TODO: protect routes like this one
  def create
    @transaction = Transaction.new(transaction_params)
    @transaction.user_id = current_user.id

    # check validity of transaction
    if @transaction.save
      render json: ["You acquired new shares of #{@transaction.ticker}"]
    else
      render json: @transaction.errors.full_messages, status: 422
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:ticker, :num_shares, :transaction_type, :amount)
  end
end
