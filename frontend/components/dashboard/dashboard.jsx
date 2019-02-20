import React from 'react';
import { Line, LineChart, Tooltip, YAxis, XAxis } from 'recharts';
import { BeatLoader } from 'react-spinners';

import NewsfeedContainer from './newsfeed_container';
import SidebarContainer from './sidebar_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: "1d" };
    
    this.priceRef = React.createRef();
    this.hoverPriceRef = React.createRef();
    this.priceChangeRef = React.createRef();
    this.hoverPriceChangeRef = React.createRef();
    this.percentChangeRef = React.createRef();
    this.hoverPercentChangeRef = React.createRef();

    this.customTooltip = this.customTooltip.bind(this);
  }

  customTooltip(data) {
    const intradayData = this.props.currentUser.intraday_data;
    const price = this.priceRef.current;
    const hoverPrice = this.hoverPriceRef.current;
    const priceChange = this.priceChangeRef.current;
    const hoverPriceChange = this.hoverPriceChangeRef.current;
    const percentChange = this.percentChangeRef.current;
    const hoverPercentChange = this.hoverPercentChangeRef.current;

    if (price && hoverPrice) {
      if (data.payload[0]) {
        price.classList.add("hide");
        hoverPrice.classList.remove("hide");
        hoverPrice.innerText = `$${(Math.round(data.payload[0].value * 100) / 100).toFixed(2)}`;
      } else {
        price.classList.remove("hide");
        hoverPrice.classList.add("hide");
        hoverPrice.innerText = "";
      }
    }

    if (priceChange && hoverPriceChange) {
      if (data.payload[0]) {
        priceChange.classList.add("hide");
        percentChange.classList.add("hide");
        let openPrice = intradayData[Object.keys(intradayData)[0]];

        let latestPrice = data.payload[0].value;
        const balanceChange = this.calcChangeInPrice(openPrice, latestPrice);
        hoverPriceChange.innerText = balanceChange.priceChange;
        const negation = `${balanceChange.priceChange[0] === '-' ? '-' : ''}`
        hoverPercentChange.innerText = ` (${negation}${balanceChange.percentChange})`;
      } else {
        priceChange.classList.remove("hide");
        percentChange.classList.remove("hide");
        hoverPriceChange.innerText = "";
        hoverPercentChange.innerText = "";
      }
    }

    return data.label
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchUserInfo(this.props.currentUser);
    }
  }

  formatMoney(amount, showPlus = false) {
    if (!amount) return;
    let sign = showPlus ? '+' : '';
    if (amount < 0) {
      amount *= -1;
      sign = '-';
    }
    return sign + '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  calcChangeInPrice(openPrice, latestPrice) {
    // let delta = latestPrice - openPrice;
    let changeInPrice = latestPrice - openPrice;
    changeInPrice = (Math.round(changeInPrice * 100) / 100).toFixed(2);
    let changeInPricePercent;
    if (changeInPrice < 0) {
      changeInPrice = changeInPrice * -1;
      changeInPricePercent = ((changeInPrice / openPrice) * 100).toFixed(2);
      changeInPricePercent = `${changeInPricePercent}%`;
      changeInPrice = `-$${changeInPrice}`;
    } else {
      changeInPricePercent = ((changeInPrice / openPrice) * 100).toFixed(2);
      changeInPricePercent = `${changeInPricePercent}%`;
      changeInPrice = `+$${changeInPrice}`;
    }

    return {
      priceChange: changeInPrice,
      percentChange: changeInPricePercent
    };
  }

  determineColor(color, tab) {
    if (this.state.active !== tab) {
      return "black"
    } else {
      return color;
    }
  }

  timeIndicator() {
    switch (this.state.active) {
      case "1d":
        return " Today";
      case "1w":
        return " Past Week";
      case "1m":
        return " Past Month";
      case "3m":
        return " Past 3 Months";
      case "1y":
        return " Past Year";
      case "5y":
        return " Past 5 Years";
    }
  }

  render() {
    let data = [];
    let graphData;
    let min = Infinity;
    let max = -Infinity;

    let startValue;
    let endValue;
    let balanceChange;
    let color;

    if (this.props.currentUser.intraday_data && this.state.active == '1d') {
      graphData = this.props.currentUser.intraday_data;
    } else if (this.props.currentUser.weekly_data && this.state.active == '1w') {
      graphData = this.props.currentUser.weekly_data;
    } else if (this.props.currentUser.monthly_data && this.state.active == '1m') {
      graphData = this.props.currentUser.monthly_data;
    } else if (this.props.currentUser.three_month_data && this.state.active == '3m') {
      graphData = this.props.currentUser.three_month_data;
    } else if (this.props.currentUser.yearly_data && this.state.active == '1y') {
      graphData = this.props.currentUser.yearly_data;
    } else if (this.props.currentUser.five_year_data && this.state.active == '5y') {
      graphData = this.props.currentUser.five_year_data;
    } else {
      return (
        <div className='loading'>
          <BeatLoader
            sizeUnit={"px"}
            size={20}
            color={'#21ce99'}
            loading={true}
          />
        </div>
      );
    }

    const times = Object.keys(graphData);
    for (let i = 0; i < times.length; i++) {
      if (i === 0) {
        startValue = graphData[times[0]];
      }
      if (i === times.length - 1) {
        endValue = graphData[times[i]];
      }
      let dataPoint = {};
      dataPoint["time"] = times[i];
      dataPoint["balance"] = graphData[times[i]];
      if (dataPoint["balance"] < min) {
        min = dataPoint["balance"];
      } else if (dataPoint["balance"] > max) {
        max = dataPoint["balance"];
      }
      data.push(dataPoint);
    }
    balanceChange = this.calcChangeInPrice(startValue, endValue);
    color = (endValue < startValue) ? "red" : "green";

    const content = this.props.currentUser ? (
      <div className="dashboard-container">
        <div>
          <div>
            <h1 ref={this.priceRef} className="portfolio-value">
              {this.formatMoney(this.props.currentUser.total_market_value)}
            </h1>
            <h1 ref={this.hoverPriceRef} className="portfolio-value hide"></h1>
            <div className="portfolio-changes">
              <span ref={this.priceChangeRef}>{balanceChange.priceChange}</span>
              <span ref={this.hoverPriceChangeRef}></span>
              <span ref={this.percentChangeRef}>{` (${balanceChange.priceChange[0] === '-' ? '-' : '' }${balanceChange.percentChange})`}</span>
              <span ref={this.hoverPercentChangeRef}></span>
              <span id="timeIndicator">{this.timeIndicator()}</span>
            </div>
          </div>

          <LineChart className="portfolio-chart" width={676} height={196} data={data}>
            <XAxis
              dataKey="time"
              hide={true} />
            <YAxis
              hide={true}
              domain={[min, max]}
            />
            <Tooltip
              offset={-25}
              isAnimationActive={false}
              position={{ y: -19 }}
              content={this.customTooltip} />

            <Line type="linear" dataKey="balance" stroke={endValue < startValue ? "#f45531" : "#21ce99"  } dot={false} strokeWidth={2} />
          </LineChart>
          <ul className="portfolio-chart-tabs-container">
            <div className="chart-tabs">
              <li><a className={this.determineColor(color, "1d")} onClick={() => this.setState({ active: "1d" }) }>1D</a></li>
              <li><a className={this.determineColor(color, "1w")} onClick={() => this.setState({ active: "1w" }) }>1W</a></li>
              <li><a className={this.determineColor(color, "1m")} onClick={() => this.setState({ active: "1m" }) } >1M</a></li>
              <li><a className={this.determineColor(color, "3m")} onClick={() => this.setState({ active: "3m" }) }>3M</a></li>
              <li><a className={this.determineColor(color, "1y")} onClick={() => this.setState({ active: "1y" }) }>1Y</a></li>
              <li><a className={this.determineColor(color, "5y")} onClick={() => this.setState({ active: "5y" }) }>5Y</a></li>
            </div>
          </ul>

          <NewsfeedContainer />
        </div>
        <SidebarContainer />
      </div>
    ) : (
      <div className='loading'>
        <BeatLoader
          sizeUnit={"px"}
          size={800}
          color={'#21ce99'}
          loading={true}
        />
      </div>
    );
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default Dashboard;
