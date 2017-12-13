import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { VictoryBar, VictoryChart } from 'victory-native';

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

class CoinChart extends React.Component {
  static navigationOptions = {
    tabBarLabel: '•',
  }

  render() {
    console.log();
    return(
      <VictoryChart>
        <VictoryBar
          data={data}
          x={"quarter"}
          y={"earnings"}
        />
      </VictoryChart>
    );
  }

}

export default CoinChart;
