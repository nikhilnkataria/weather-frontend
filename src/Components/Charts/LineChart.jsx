import Chart from 'chart.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class LineChart extends Component {
  chartObj = {};

  chartRef = React.createRef();

  componentDidMount() {
    this.createGraph();
  }

  componentDidUpdate() {
    this.updateGraph();
  }

  createGraph = () => {
    const chartRef = this.chartRef.current.getContext('2d');

    this.chartObj = new Chart(chartRef, {
      type: 'line',
      data: this.props.data,
      options: this.props.options
    });
  };

  updateGraph = () => {
    this.chartObj.data = this.props.data;
    this.chartObj.update();
  };

  render() {
    return <canvas id="chartRef" ref={this.chartRef} />;
  }
}

LineChart.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([ PropTypes.any ])).isRequired,
  options: PropTypes.objectOf(PropTypes.oneOfType([ PropTypes.any ])).isRequired
};
