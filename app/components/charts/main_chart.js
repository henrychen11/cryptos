import React from 'react';
import { StockLine } from 'react-native-pathjs-charts';
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

    if (this.props.currentChart) {
      const data = this.selectData();

      let options = {
        width: 250,
        height: 250,
        color: '#2980B9',
        margin: {
          top: 10,
          left: 35,
          bottom: 30,
          right: 10
        },
        animate: {
          type: 'delayed',
          duration: 200
        },
        axisX: {
          showAxis: true,
          showLines: true,
          showLabels: true,
          showTicks: true,
          zeroAxis: false,
          orient: 'bottom',
          tickValues: [],
          label: {
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            fill: '#34495E'
          }
        },
        axisY: {
          showAxis: true,
          showLines: true,
          showLabels: true,
          showTicks: true,
          zeroAxis: false,
          orient: 'left',
          tickValues: [],
          label: {
            fontFamily: 'Arial',
            fontSize: 8,
            fontWeight: true,
            fill: '#34495E'
          }
        }
      }

      return (
        <View style={{ backgroundColor: 'black'}}>
          <StockLine data={[data]} options={options} xKey='time' yKey='value' />
        </View>
      )
    } else {
      return (
        <View style={{ backgroundColor: 'black'}}>
          <Text>Loading...</Text>
        </View>
      )
    }
    }
  }

export default MainChart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lower_background,
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
