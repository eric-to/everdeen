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

    this.customTooltip = this.customTooltip.bind(this);
  }

  customTooltip(data) {
    const price = this.priceRef.current;
    const hoverPrice = this.hoverPriceRef.current;
    const priceChange = this.priceChangeRef.current;
    const hoverPriceChangeRef = this.hoverPriceChangeRef.current;

    if (price && hoverPrice) {
      if (data.payload[0]) {
        price.classList.add("hide");
        hoverPrice.innerText = `$${(Math.round(data.payload[0].value * 100) / 100).toFixed(2)}`;
      } else {
        price.classList.remove("hide");
        hoverPrice.innerText = "";
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

  render() {
    let data = [];
    let graphData;
    let min = Infinity;
    let max = -Infinity;

    let startValue;
    let endValue;
    let balanceChange;

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
    } else if (this.props.currentUser.five_year_data && this.state.active == 'all') {
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

    const content = this.props.currentUser ? (
      <div className="dashboard-container">
        <div>
          <div>
            <h1 ref={this.priceRef} className="portfolio-value">
              {this.formatMoney(this.props.currentUser.total_market_value)}
            </h1>
            <h1 ref={this.hoverRef} className="potfolio-value"></h1>
            <div className="portfolio-changes">
              <span>{balanceChange.priceChange}</span>
              <span>{` (${balanceChange.priceChange[0] === '-' ? '-' : '' }${balanceChange.percentChange})`}</span>
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
              <li><a onClick={() => this.setState({ active: "1d" }) }>1D</a></li>
              <li><a onClick={() => this.setState({ active: "1w" }) }>1W</a></li>
              <li><a onClick={() => this.setState({ active: "1m" }) } >1M</a></li>
              <li><a onClick={() => this.setState({ active: "3m" }) }>3M</a></li>
              <li><a onClick={() => this.setState({ active: "1y" }) }>1Y</a></li>
              <li><a onClick={() => this.setState({ active: "all" }) }>ALL</a></li>
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
