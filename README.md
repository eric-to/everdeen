# Everdeen
[Everdeen](https://everdeen-app.herokuapp.com/#/) is a faithful clone of Robinhood, a stock investing web application. However, Everdeen allows you to invest for free, so that users may learn how to invest and follow stocks without the pressure of losing real money. This project was conceptualized and built within 10 days. Noteworthy technologies used: Ruby on Rails and React/Redux. Read on more to find out about the APIs I used and approaches I took to solving the problems I faced.

## Technologies
* Backend: PostgreSQL, Ruby on Rails
* Frontend: React/Redux
* [IEX API](https://iextrading.com) (used to fetch intraday, weekly, monthly, and yearly stock price data)
* [News API](https://newsapi.org/) (used to fetch current news about stocks)
* [Recharts](http://recharts.org/en-US/) (used to help draw candlestick charts)

## Features
* Secure frontend/backend user authentication using BCrypt
* Portfolio chart showing the user's overall portfolio value based on stocks they own
* Sidebar showing the user's number of shares owned alongside their respective name, price, and intraday chart
* Real-time and historical price data for most stocks exchanged on the NYSE and Nasdaq exchanges
* Ability to buy and sell shares at the latest price
* Searchable stocks (either by company name or stock symbol)
* Real-time newsfeed showing general and stock-specific business news articles

### Dashboard/Portfolio Page
<br />
<img src="./app/assets/images/dashboard.gif" align="center" />

### Stock Show Page
<img src="./app/assets/images/stock_show.png" align="center" />

### Search
<img src="./app/assets/images/search.png" align="center" />
