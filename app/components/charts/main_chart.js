import React from 'react';
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts';
// import * as shape from 'd3-shape';
import { Text, View, StyleSheet, Button } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';

class MainChart extends React.Component {
  static navigationOptions = {
    tabBarLabel: '•',
  }

  constructor(props){
      super(props);
      this.state = {
          chartOption: 'hour'
      };
      this.updateView = this.updateView.bind(this);
  }

  // HOLD ON THIS FOR NOW - WILL DELETE IF APP WORKS AS IS
  componentDidMount() {
    const { currentCoin, currentChart, requestChartData } = this.props;
    if (currentCoin && !currentChart) {
        requestChartData(
        currentCoin.symbol,
        this.state.chartOption
      );
    }
  }

  updateView(option){
    this.setState({
        chartOption: option,
    });
  }

  selectData() {
    switch(this.state.chartOption) {
      case 'week':
        return this.props.currentChart.valuePerFifteenMinutesUSD;
      case 'hour':
        return this.props.currentChart.valuePerMinuteUSD.slice(0,60);
      case 'day':
      default:
        return this.props.currentChart.valuePerMinuteUSD;
    }
  }

  render() {
      let display;
      if (this.props.currentChart) {

        const data = this.selectData();
        let values = [];
        let time = [];
        data.forEach(dp => {
          values.push(dp.value);
          time.push(dp.time);
        });
        const contentInset = { top: 20, bottom: 20 };
        display = (
          <View style={styles.chartContainer}>
              <View style={ { flex: 1, height: "100%", flexDirection: 'row' } }>
                  <View style={ { height: "100%", marginRight: 10 } }>
                      <YAxis
                          style={{position: 'absolute', left: 0, bottom: 0, top: 0}}
                          dataPoints={ values }
                          contentInset={ contentInset }
                          labelStyle={ { color: 'white', fontWeight: 'bold' } }
                          formatLabel={ value => `$${value}` }
                      />
                  </View>
                  <View style={ { flex: 1, height: "100%", flexDirection: 'column' } }>
                      <LineChart
                          gridMax={100}
                          gridMin={-100}
                          style={ { flex: 1, marginLeft: 25} }
                          dataPoints={ values }
                          svg={{
                              stroke: 'rgb(134, 65, 244)',
                          }}
                          shadowSvg={ {
                              stroke: 'rgba(134, 65, 244, 0.2)',
                              strokeWidth: 2,
                          } }
                          contentInset={ contentInset }
                      />
                  <XAxis
                      style={ { position: 'absolute', left: 25, bottom: 0, right: 10 } }
                      values={ time }
                      formatLabel={ (value, index) => value }
                      chartType={ XAxis.Type.LINE }
                      labelStyle={ { color: 'white', fontWeight: 'bold' } }
                      contentInset={ contentInset }
                  />
                  </View>
              </View>
          </View>
        );
      }
      return (
          <View style={styles.main}>
              <View style={styles.options}>
                  <Button
                      title="1H"
                      onPress={() => this.updateView("hour")} />
                  <Button
                      title="1D"
                      onPress={() => this.updateView("day")}  />
                  <Button
                      title="1W"
                      onPress={() => this.updateView("week")}  />
              </View>
              {display}
          </View>
      );
  }
}
export default MainChart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.dark_gray,
  },
  chartContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
