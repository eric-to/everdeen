import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

import NewsfeedContainer from './newsfeed_container';
import SidebarContainer from './sidebar_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userData = {
      "data": [
        {
          "time": "09:30 AM ET",
          "balance": 45855.74
        },
        {
          "time": "09:35 AM ET",
          "balance": 45850.59
        },
        {
          "time": "09:40 AM ET",
          "balance": 45742.9
        },
        {
          "time": "09:45 AM ET",
          "balance": 45747.84
        },
        {
          "time": "09:50 AM ET",
          "balance": 45810.91
        },
        {
          "time": "09:55 AM ET",
          "balance": 45866.33
        },
        {
          "time": "10:00 AM ET",
          "balance": 45845.31
        },
        {
          "time": "10:05 AM ET",
          "balance": 45971.16
        },
        {
          "time": "10:10 AM ET",
          "balance": 45965.24
        },
        {
          "time": "10:15 AM ET",
          "balance": 45975.88
        },
        {
          "time": "10:20 AM ET",
          "balance": 46071.73
        },
        {
          "time": "10:25 AM ET",
          "balance": 45978.8
        },
        {
          "time": "10:30 AM ET",
          "balance": 45905.05
        },
        {
          "time": "10:35 AM ET",
          "balance": 45861.66
        },
        {
          "time": "10:40 AM ET",
          "balance": 45945.06
        },
        {
          "time": "10:45 AM ET",
          "balance": 45966.62
        },
        {
          "time": "10:50 AM ET",
          "balance": 46103.09
        },
        {
          "time": "10:55 AM ET",
          "balance": 46142.42
        },
        {
          "time": "11:00 AM ET",
          "balance": 46092.19
        },
        {
          "time": "11:05 AM ET",
          "balance": 46115.32
        },
        {
          "time": "11:10 AM ET",
          "balance": 46090.57
        },
        {
          "time": "11:15 AM ET",
          "balance": 46080.55
        },
        {
          "time": "11:20 AM ET",
          "balance": 46073.9
        },
        {
          "time": "11:25 AM ET",
          "balance": 46027.34
        },
        {
          "time": "11:30 AM ET",
          "balance": 46047.27
        },
        {
          "time": "11:35 AM ET",
          "balance": 46123.53
        },
        {
          "time": "11:40 AM ET",
          "balance": 46119.1
        },
        {
          "time": "11:45 AM ET",
          "balance": 46112.86
        },
        {
          "time": "11:50 AM ET",
          "balance": 46068.58
        },
        {
          "time": "11:55 AM ET",
          "balance": 46134.4
        },
        {
          "time": "12:00 PM ET",
          "balance": 46038.91
        },
        {
          "time": "12:05 PM ET",
          "balance": 46043.64
        },
        {
          "time": "12:10 PM ET",
          "balance": 46075.72
        },
        {
          "time": "12:15 PM ET",
          "balance": 45999.62
        },
        {
          "time": "12:20 PM ET",
          "balance": 46059.03
        },
        {
          "time": "12:25 PM ET",
          "balance": 46113.77
        },
        {
          "time": "12:30 PM ET",
          "balance": 46103.07
        },
        {
          "time": "12:35 PM ET",
          "balance": 46143.93
        },
        {
          "time": "12:40 PM ET",
          "balance": 46143.33
        },
        {
          "time": "12:45 PM ET",
          "balance": 46116.86
        },
        {
          "time": "12:50 PM ET",
          "balance": 46103.34
        },
        {
          "time": "12:55 PM ET",
          "balance": 46129.13
        },
        {
          "time": "1:00 PM ET",
          "balance": 46026.09
        },
        {
          "time": "1:05 PM ET",
          "balance": 45991
        },
        {
          "time": "1:10 PM ET",
          "balance": 46063.14
        },
        {
          "time": "1:15 PM ET",
          "balance": 46060.78
        },
        {
          "time": "1:20 PM ET",
          "balance": 45996.64
        },
        {
          "time": "1:25 PM ET",
          "balance": 45932.92
        },
        {
          "time": "1:30 PM ET",
          "balance": 45920.11
        },
        {
          "time": "1:35 PM ET",
          "balance": 45833.53
        },
        {
          "time": "1:40 PM ET",
          "balance": 45808.47
        },
        {
          "time": "1:45 PM ET",
          "balance": 45875.7
        },
        {
          "time": "1:50 PM ET",
          "balance": 45878.81
        },
        {
          "time": "1:55 PM ET",
          "balance": 45876.16
        },
        {
          "time": "2:00 PM ET",
          "balance": 45808.4
        },
        {
          "time": "2:05 PM ET",
          "balance": 45815.05
        },
        {
          "time": "2:10 PM ET",
          "balance": 45813.8
        },
        {
          "time": "2:15 PM ET",
          "balance": 45811.91
        },
        {
          "time": "2:20 PM ET",
          "balance": 45811.77
        },
        {
          "time": "2:25 PM ET",
          "balance": 45847.52
        },
        {
          "time": "2:30 PM ET",
          "balance": 45841.85
        },
        {
          "time": "2:35 PM ET",
          "balance": 45795.79
        },
        {
          "time": "2:40 PM ET",
          "balance": 45675.99
        },
        {
          "time": "2:45 PM ET",
          "balance": 45652.68
        },
        {
          "time": "2:50 PM ET",
          "balance": 45635.61
        },
        {
          "time": "2:55 PM ET",
          "balance": 45556.02
        },
        {
          "time": "3:00 PM ET",
          "balance": 45616.18
        },
        {
          "time": "3:05 PM ET",
          "balance": 45609.09
        },
        {
          "time": "3:10 PM ET",
          "balance": 45535.96
        },
        {
          "time": "3:15 PM ET",
          "balance": 45599.63
        },
        {
          "time": "3:20 PM ET",
          "balance": 45637.85
        },
        {
          "time": "3:25 PM ET",
          "balance": 45593.48
        },
        {
          "time": "3:30 PM ET",
          "balance": 45599.11
        },
        {
          "time": "3:35 PM ET",
          "balance": 45516.15
        },
        {
          "time": "3:40 PM ET",
          "balance": 45449.73
        },
        {
          "time": "3:45 PM ET",
          "balance": 45348.93
        },
        {
          "time": "3:50 PM ET",
          "balance": 45393.07
        },
        {
          "time": "3:55 PM ET",
          "balance": 45427.94
        },
        {
          "time": "4:00 PM ET",
          "balance": 45470.51
        }]}
    return (
      <div className="dashboard-container">
        <div>
          <LineChart className="rechartExample" width={676} height={196} data={userData.data}>
            <YAxis
              hide={true}
              domain={[45348.93, 46142.42]}
            />
            <Line type="monotone" dataKey="balance" stroke="#82ca9d" dot={false} strokeWidth={2} />
          </LineChart>

          <NewsfeedContainer />
        </div>
        <SidebarContainer />
      </div>
    );
  }
}

export default Dashboard;
