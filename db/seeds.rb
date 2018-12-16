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
  amount: 100.22,
  deposit_date: 2.months.ago
)

Transaction.create!(
  user_id: User.first.id,
  ticker: "GPRO",
  num_shares: 5,
  transaction_date: 4.weeks.ago,
  transaction_type: "buy",
  amount: 23.50
)

Transaction.create!(
  user_id: User.first.id,
  ticker: "FIT",
  num_shares: 5,
  transaction_date: 2.weeks.ago,
  transaction_type: "buy",
  amount: 24.50
)
