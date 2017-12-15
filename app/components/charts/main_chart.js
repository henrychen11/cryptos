import React from 'react';
import { StockLine } from 'react-native-pathjs-charts';

import { Text, View, StyleSheet, Button } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';
import moment from 'moment';

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
        this.labelFunction = (d) => moment(d).format('MMM Do');
        return this.props.currentChart.valuePerFifteenMinutesUSD;
      case 'hour':
        this.labelFunction = (d) => moment(d).format('h:mm');
        return this.props.currentChart.valuePerMinuteUSD.slice(0,60);
      case 'day':
      default:
        this.labelFunction = (d) => moment(d).format('MMM Do');
        return this.props.currentChart.valuePerMinuteUSD;
    }
  }

  render() {

    if (this.props.currentChart) {
      const data = this.selectData().map( (el) => (
        ({
          'time': el.time,
          'value': el.value })
      ));
      let options = {
        width: 250 ,
        height: 250,
        color: '#2980B9',
        margin: {
          top: 50,
          left: 50,
          bottom: 50,
          right: 50
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
          labelFunction: this.labelFunction,
          label: {
            fontFamily: 'Arial',
            fontSize: 12,
            fontWeight: 'bold',
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
            fontSize: 12,
            fontWeight: 'bold',
            fill: '#34495E'
          }
        }
      }

      return (
        <View
          style={ styles.main }>
            <View style={ styles.buttons }>
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
    backgroundColor: 'black'
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row'
  }
})

// onLayout={event => {this.setState({width: (event.nativeEvent.layout.width), height:
//   (event.nativeEvent.layout.height)}) }}
