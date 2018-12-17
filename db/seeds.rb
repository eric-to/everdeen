# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!(
  first_name: "Katniss",
  last_name: "Everdeen",
  email: "katniss.everdeen@gmail.com",
  password: "mtobeiyf"
)

Deposit.create!(
  user_id: User.first.id,
  amount: 4906.22,
  deposit_date: 18.months.ago
)

Transaction.create!(
  user_id: User.first.id,
  ticker: "AAPL",
  num_shares: 16,
  transaction_date: 13.months.ago,
  transaction_type: "buy",
  amount: 2650.72
)

Transaction.create!(
  user_id: User.first.id,
  ticker: "AAPL",
  num_shares: 5,
  transaction_date: 2.weeks.ago,
  transaction_type: "sell",
  amount: 828.35
)

Transaction.create!(
  user_id: User.first.id,
  ticker: "AMZN",
  num_shares: 1,
  transaction_date: 1.week.ago,
  transaction_type: "buy",
  amount: 366.20
)

Transaction.create!(
  user_id: User.first.id,
  ticker: "FB",
  num_shares: 1,
  transaction_date: Time.now,
  transaction_type: "buy",
  amount: 144.62
)
