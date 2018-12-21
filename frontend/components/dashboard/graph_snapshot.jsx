import React from 'react';
import { Line, LineChart, YAxis } from 'recharts';

class GraphSnapshot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [];
    let min = Infinity;
    let max = -Infinity;
    let openPrice;
    let prevDataPoint;
    let color;
    if (this.props.multiIntradayData) {
      const ticker = this.props.ticker;
      let oneDayData = this.props.multiIntradayData;
      oneDayData = oneDayData[ticker].chart;
      for (let i = 0; i < oneDayData.length; i++) {
        if (i === 0) {
          openPrice = oneDayData[0].marketAverage;
        }
        let time = oneDayData[i].label;
        if (i % 5 === 0 || time === "3:59 PM") {
          let marketPrice = oneDayData[i].marketAverage;
          if (marketPrice === -1) {
            data.push(prevDataPoint);
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

          if (openPrice < prevDataPoint.price) {
            color = "#f45531";
          } else {
            color = "#82ca9d";
          }
        }
      }
    }

    return (
      <div>
        <LineChart
          width={60}
          height={30}
          data={data}>
          <YAxis
            type="number"
            domain={[min, max]}
            hide={true} />
          <Line
            type="linear"
            dataKey="price"
            stroke={color}
            strokeWidth="2"
            dot={false} />
        </LineChart>
      </div>
    );

  }
}

export default GraphSnapshot;
