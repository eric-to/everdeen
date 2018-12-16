class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.integer :user_id, null: false
      t.string :ticker, null: false
      t.integer :num_shares, null: false
      t.datetime :transaction_date, null: false
    end
    add_index :transactions, [:user_id, :transaction_date], unique: true
    add_index :transactions, [:ticker, :transaction_date]
  end
end
