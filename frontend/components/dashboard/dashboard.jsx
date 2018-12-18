import React from 'react';
import { LineChart, Line, YAxis, Tooltip } from 'recharts';

import NewsfeedContainer from './newsfeed_container';
import SidebarContainer from './sidebar_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchUserInfo(this.props.currentUser);
    }
  }

  graphHeader() {
    const formatMoney = (amount, showPlus = false) => {
      let sign = showPlus ? '+' : '';
      if (amount < 0) {
        amount *= -1;
        sign = '-';
      }
      return sign + '$' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    if (this.props.currentUser.total_market_value) {
      return (
        <div>
          <h1 className="portfolio-value">
            {formatMoney(this.props.currentUser.total_market_value)}
          </h1>
        </div>
      );
    }
  }

  render() {
    let data = [];
    let graphData;
    let min = 99999;
    let max = -99999;
    if (this.props.currentUser.intraday_data) {
      graphData = this.props.currentUser.intraday_data;
      const times = Object.keys(graphData);
      for (let i = 0; i < times.length; i++) {
        let dataPoint = {};
        dataPoint["time"] = times[i];
        dataPoint["balance"] = graphData[times[i]];
        if (graphData[times[i]] < min) {
          min = graphData[times[i]];
        } else if (graphData[times[i]] > max) {
          max = graphData[times[i]];
        }
        data.push(dataPoint);
      }
    }

    return (
      <div className="dashboard-container">
        <div>
          { this.graphHeader() }

          <LineChart className="rechartExample" width={676} height={196} data={data}>
            
            <YAxis
              hide={true}
              domain={[min, max]}
            />
            <Tooltip isAnimationActive={false} offset={-40} position={{y: -20}} />

            <Line type="linear" dataKey="balance" stroke="#21ce99" dot={false} strokeWidth={2} />
          </LineChart>
          {/* <ul className="chart-ranges">
            <li><a>1D</a></li>
            <li><a>1W</a></li>
            <li><a>1M</a></li>
            <li><a>3M</a></li>
            <li><a>ALL</a></li>
          </ul> */}

          <NewsfeedContainer />
        </div>
        <SidebarContainer />
      </div>
    );
  }
}

export default Dashboard;
