import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Utils from '../../Helpers/Utils';
import Card from '../../Components/Card/Card';
import LineChart from '../../Components/Charts/LineChart';

export default class WeatherChart extends PureComponent {
  chartRef = React.createRef();

  dailyTransactionsOptions = {
    responsive: true,
    aspectRatio: 1,
    maintainAspectRatio: false,
    scales: { yAxes: [ { ticks: { beginAtZero: true } } ] }
  };

  generateDailyTxnData = () => {
    const labels = [];
    const dataArray = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const [ index, list ] of this.props.list.entries()) {
      if (index > 9) {
        break;
      }
      labels.push(Utils.getFormatedTime(list.dt_txt));
      dataArray.push(list.temp);
    }

    let data = {};
    if (dataArray.length > 0) {
      data = {
        labels,
        datasets: [
          {
            borderColor: '#43ace3',
            fill: false,
            label: 'Temparature (in Celsius)',
            backgroundColor: Array(dataArray.length).fill('#43ace3'),
            borderWidth: 1,
            data: dataArray
          }
        ]
      };
    }

    return data;
  };

  render() {
    return (
      <Card title="Weather Forecasts">
        <div style={{ height: '400px' }}>
          <LineChart
            options={this.dailyTransactionsOptions}
            data={this.generateDailyTxnData()}
          />
        </div>
      </Card>
    );
  }
}

// eslint-disable-next-line object-curly-newline
WeatherChart.propTypes = {
  list: PropTypes.arrayOf(PropTypes.oneOfType([ PropTypes.any ])).isRequired
}; // eslint-disable-line object-curly-newline
