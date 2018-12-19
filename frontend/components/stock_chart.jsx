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
            price: oneDayData[i].marketAverage
          });
          prevDataPoint = {
            time: time,
            price: oneDayData[i].marketAverage
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
      minPrice: min,
      maxPrice: max
    };
  }

  calcOneMonthData(oneMonthData = []) {
    const data = [];
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < oneMonthData.length; i++) {
      let date = oneMonthData[i].date;
      let closingPrice = oneMonthData[i].close;
      data.push({
        time: date,
        price: closingPrice
      });

      if (closingPrice < min) {
        min = closingPrice;
      } else if (closingPrice > max) {
        max = closingPrice;
      }
    }

    return {
      chartData: data,
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

  render() {
    let data = [];
    if (this.props.stock) {
      if (this.state.active === "1d") {
        data = this.calcOneDayData(this.props.stock);
      }
    }

    if (data.length !== 0) {
      return (
        <div className="stock-chart">
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
          <div className="chart-tabs-container">
            <ul className="chart-tabs">
              <li><a onClick={ () => this.setState({ active: "1d" }) }>1D</a></li>
              <li><a onClick={ () => this.setState({ active: "1w" }) }>1W</a></li>
              <li><a onClick={ () => this.setState({ active: "1m" }) }>1M</a></li>
              <li><a onClick={ () => this.setState({ active: "3m" }) }>3M</a></li>
              <li><a onClick={ () => this.setState({ active: "1y" }) }>1Y</a></li>
              <li><a onClick={ () => this.setState({ active: "5y" }) }>5Y</a></li>
            </ul>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}

export default StockChart;
