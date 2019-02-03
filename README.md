# Everdeen
[Everdeen](https://everdeen-app.herokuapp.com/#/) is a faithful clone of Robinhood, a stock investing web application. However, Everdeen allows you to invest for free, so that users may learn how to invest and follow stocks without the pressure of losing real money. This project was conceptualized and built in 10 days. Noteworthy technologies used: Ruby on Rails and React/Redux. Read on more to find out about the APIs I used and approaches I took to solving the problems I faced.

## Technologies
* Backend: PostgreSQL, Ruby on Rails
* Frontend: React/Redux
* [IEX API](https://iextrading.com)
* [News API](https://newsapi.org/)
* [Recharts](http://recharts.org/en-US/)

## Features
* Protected user authentication using BCrypt
* Real-time and historical price data for all major stocks traded on the NASDAQ and NYSE exchanges
* Real-time updates for the user's portfolio balance, based on the user's owned stocks
* Interactive charts displaying price data and portfolio balance changes over 1 day, 1 week, 1 month, 3 month, 1 year, and 5 year time periods

## Features
* Secure frontend/backend user authentication using BCrypt
* Portfolio graph showing the user's overall portfolio value based on stocks they own
* Sidebar showing the user's number of shares owned alongside their respective name, price, and intraday chart
* Real-time and historical price data for most stocks exchanged on the NYSE and Nasdaq exchanges
* Ability to buy and sell shares at the latest price
* Searchable stocks by their company name and symbol
* Real-time newsfeed showing general and stock-specific business news articles
