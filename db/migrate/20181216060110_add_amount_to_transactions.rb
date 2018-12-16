class AddAmountToTransactions < ActiveRecord::Migration[5.2]
  def change
    add_column :transactions, :amount, :float, null: false
  end
end
