import React from 'react';
import { Line, LineChart, Tooltip, YAxis } from 'recharts';

class StockChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: "1d" };
  }

  // TODO: Format time, date, and price
  // TODO: Check graph endpoints (and open balance)
  calcOneDayData(oneDayData = []) {
    const data = [];
    let min = Infinity;
    let max = -Infinity;
    let prevDataPoint;
    for (let i = 0; i < oneDayData.length; i++) {
      let time = oneDayData[i].label;
      if (i % 5 === 0 || time === "3:59 PM") {
        let marketPrice = oneDayData[i].marketAverage;
        if (marketPrice === -1) {
          data.push({
            prevDataPoint
          })
          continue;
        }
        if (time === "3:59 PM") {
          data.push({
            time: "4:00 PM",
            price: marketPrice
          });
        } else {
          data.push({
            time: time,
            price: marketPrice
          });
          prevDataPoint = {
            time: time,
            price: marketPrice
          };
        }

        if (marketPrice < min) {
          min = marketPrice;
        } else if (marketPrice > max) {
          max = marketPrice;
        }
      }
    }

    return {
      chartData: data,
      currentPrice: prevDataPoint.price,
      minPrice: min,
      maxPrice: max
    };
  }

  // calcOneWeekData(oneWeekData = []) {
  //   const data = [];
  //   let min = Infinity;
  //   let max = -Infinity;
  //   let prevDataPoint;
  // }

  calcOneMonthData(oneMonthData = []) {
    const data = [];
    let min = Infinity;
    let max = -Infinity;
    let prevDataPoint;
    for (let i = 0; i < oneMonthData.length; i++) {
      let date = oneMonthData[i].date;
      let closingPrice = oneMonthData[i].close;
      if (closingPrice === -1) {
        data.push({
          prevDataPoint
        })
        continue;
      }
      data.push({
        time: date,
        price: closingPrice
      });
      prevDataPoint = {
        time: date,
        price: closingPrice
      };

      if (closingPrice < min) {
        min = closingPrice;
      } else if (closingPrice > max) {
        max = closingPrice;
      }
    }

    return {
      chartData: data,
      currentPrice: prevDataPoint.price,
      minPrice: min,
      maxPrice: max
    }
  }

  calcThreeMonthData(threeMonthData = []) {
    return this.calcOneMonthData(threeMonthData);
  }

  calcOneYearData(oneYearData = []) {
    return this.calcOneMonthData(oneYearData);
  }

  calcFiveYearData(fiveYearData = []) {
    return this.calcOneMonthData(fiveYearData);
  }

  aboutCompany() {
    return (
      <div className="about-company-container">
        <div className="about-header">
          <h2>About</h2>
        </div>
        <div className="company-description">
          <h3>{ this.props.description }</h3>
        </div>

        <div className="company-details">
          <div className="detail">
            <div className="detail-title">CEO</div>
            <span id="ceo">{ this.props.ceo }</span>
          </div>
          <div className="detail">
            <div className="detail-title">Sector</div>
            { this.props.sector }
          </div>
          <div className="detail">
            <div className="detail-title">Industry</div>
            { this.props.industry }
          </div>
          <div className="detail">
            <div className="detail-title">Exchange</div>
            { this.props.exchange }
          </div>
          <div className="detail">
            <div className="detail-title">Price-Earnings Ratio</div>
            { this.props.peRatio }

          </div>
        </div>
      </div>
    );
  }

  render() {
    let data = [];

    if (this.props.intradayData && this.state.active === "1d") {
      data = this.calcOneDayData(this.props.intradayData);
    }

    if (this.props.oneMonthData && this.state.active === "1m") {
      console.log(this.state.active);
      data = this.calcOneMonthData(this.props.oneMonthData);
    }

    if (this.props.threeMonthData && this.state.active === "3m") {
      data = this.calcThreeMonthData(this.props.threeMonthData);
    }

    if (this.props.yearData && this.state.active === "1y") {
      data = this.calcOneYearData(this.props.yearData);
    }

    // TODO: plot by week, not by day
    if (this.props.fiveYearData && this.state.active === "5y") {
      data = this.calcFiveYearData(this.props.fiveYearData);
    }

    if (data.length !== 0) {
      return (
        <div className="stock-chart">
          <div className="stock-chart-header">
            <h1 id="company-name">{this.props.companyName}</h1>
            <h2 id="stock-price">{`$${data.currentPrice}`}</h2>
          </div>
          <LineChart
            width={676}
            height={196}
            data={data.chartData}>
            <YAxis
              hide={true}
              domain={[data.min, data.max]}/>
            <Tooltip
              isAnimationActive={false}/>
            <Line 
              type="linear"
              dataKey="price"
              stroke="#21ce99"
              dot={false}
              strokeWidth={2}/>
          </LineChart>
          <div className="stock-chart-tabs-container">
            <ul className="chart-tabs">
              <li><a onClick={ () => this.setState({ active: "1d" }) }>1D</a></li>
              <li><a>1W</a></li>
              <li><a onClick={ () => this.setState({ active: "1m" }) }>1M</a></li>
              <li><a onClick={ () => this.setState({ active: "3m" }) }>3M</a></li>
              <li><a onClick={ () => this.setState({ active: "1y" }) }>1Y</a></li>
              <li><a onClick={ () => this.setState({ active: "5y" }) }>5Y</a></li>
            </ul>
          </div>
          { this.aboutCompany() }
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}

export default StockChart;
