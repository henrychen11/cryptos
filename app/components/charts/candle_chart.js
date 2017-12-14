import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import {
  VictoryChart, VictoryBar,
  VictoryScatter, VictoryStack, VictoryGroup, VictoryAxis,
  VictoryCandlestick, VictoryErrorBar, VictoryLabel, VictoryTooltip,VictoryTheme
} from 'victory-native';


const data = [
  {x: 1513201501142, open: 5, close: 10, high: 15, low: 0, label: "hello matt"},
  {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
  {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
  {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
  {x: new Date(2016, 6, 5), open: 11, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 6), open: 12, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 7), open: 13, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 8), open: 14, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 9), open: 15, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 10), open: 16, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 11), open: 17, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 12), open: 18, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 13), open: 19, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 14), open: 21, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 15), open: 22, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 16), open: 23, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 17), open: 24, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 18), open: 25, close: 8, high: 15, low: 5},
  {x: new Date(2016, 6, 19), open: 26, close: 8, high: 15, low: 5},
]


class CandleChart extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Chart', 
  }

  print(data){
    data.forEach( (el) => console.log( el.x.getMonth() + 1))
  }

  render() {
    console.log(data)
    console.log(this.print(data));
    return(
      <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={{ x: 25 }}
      scale={{ x: "time" }}
      >
      <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
      <VictoryAxis dependentAxis/>

      <VictoryCandlestick
        labelComponent={<VictoryTooltip/>}
        labels={(d) => `hello #${d.x}`}
        candleColors={{ positive: "#A2CD5A", negative: "#CD2626" }}
        data={data}
      />
      </VictoryChart>
    );
  }
}

export default CandleChart;