import React, { PureComponent } from 'react';
import { BarChart, Bar, Tooltip, ResponsiveContainer, XAxis } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 1,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 3,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 4,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 5,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 6,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 7,
  },
];

export default class SimpleBarChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 10,
            bottom: 14,
          }}
          barGap={1}
          barSize={6}
        >
          <XAxis
            dataKey="amt"
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            tickSize={10}
            tick={{ fontSize: 10 }}
          />
          <Tooltip />
          <Bar dataKey="pv" fill="#03a9f4" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
