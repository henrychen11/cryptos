import React from 'react';
import MainChartContainer from './main_chart_container';

class ChartShow extends React.Component {
  static navigationOptions = {
    showLabel: false
  }

  render() {
    return (
      <MainChartContainer />
    );
  }

}

export default ChartShow;
