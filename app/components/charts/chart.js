import React from 'react';
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Text, View, StyleSheet, Button } from 'react-native';


class Chart extends React.Component {
  static navigationOptions = {
    tabBarLabel: '•',
  }

  componentDidMount() {
    this.props.requestChartData('btc','day')
  }

  render() {
    console.log();
    return(
      <Text>CHART</Text>
    );
  }

}

export default Chart;
