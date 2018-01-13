import React from 'react';
import { StockLine } from 'react-native-pathjs-charts';

import { Text, View, StyleSheet, Button, Dimensions, ActivityIndicator } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';
import moment from 'moment';
import { formatChartPrice } from '../../util/formatter';
import { xValues } from '../../util/chart_x_values';

class MainChart extends React.Component {
  static navigationOptions = {
    tabBarLabel: '•',
  }

  constructor(props){
      super(props);
      let {width, height} = Dimensions.get('window')
      this.state = {
          chartOption: 'hour',
          dimensions: {
            width: width,
            height: height
          }
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

  componentWillReceiveProps(nextProps) {
    const { currentCoin, currentChart, requestChartData } = nextProps;
    if (currentCoin.symbol !== currentChart.symbol) {
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
    this.props.requestChartData(
      this.props.currentCoin.symbol,
      option
    );
  }

  selectLabels() {
    switch(this.state.chartOption) {
      case 'week':
        return labelFunction = (d) => moment(d).format('MM/DD');
      case 'hour':
        return labelFunction = (d) => moment(d).format("HH:mm");
      case 'day':
        return labelFunction = (d) => moment(d).format('HH:mm');
    }
  }

  onLayout = event => {
    // if (this.state.dimensions) return // layout was already called
    let {width, height} = event.nativeEvent.layout
    this.setState({dimensions: {width, height}})
  }

  render() {

    if (this.props.currentChart) {
      const data = this.props.currentChart.dataUSD;

      let hourColor = colors.timeColor;
      let dayColor = colors.timeColor;
      let weekColor  = colors.timeColor;
      switch (this.state.chartOption) {
        case "hour":
          hourColor = colors.selectedTimeColor;
          break;
        case "day":
          dayColor = colors.selectedTimeColor;
          break;
        case "week":
          weekColor = colors.selectedTimeColor;
          break;
      }

      let options = {
        width: this.state.dimensions.width * 0.75,
        height: this.state.dimensions.height * 0.24,
        color: colors.green,
        margin: {
          top: 0,
          left: 60,
          bottom: 20,
          right: 60
        },
        axisX: {
          showAxis: true,
          showLines: true,
          showLabels: true,
          showTicks: true,
          zeroAxis: false,
          orient: 'bottom',
          tickValues: xValues(this.state.chartOption),
          labelFunction: this.selectLabels(),
          label: {
            fontFamily: 'Arial',
            fontSize: 12,
            fontWeight: 'bold',
            fill: colors.white,
            rotate: 1,
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
          labelFunction: ( (d) => ( "$" + formatChartPrice(d))),
          label: {
            fontFamily: 'Arial',
            fontSize: 12,
            fontWeight: 'bold',
            fill: colors.white,
          }
        }
      }

      return (
        <View
          onLayout={this.onLayout}
          style={ styles.main }>
            <View style={ styles.buttons }>
                <Button
                    color={hourColor}
                    title="1H"
                    onPress={() => this.updateView("hour")} />
                <Button
                    color={dayColor}
                    title="1D"
                    onPress={() => this.updateView("day")}  />
                <Button
                    color={weekColor}
                    title="1W"
                    onPress={() => this.updateView("week")}  />
          </View>
          <StockLine
            data={[data]}
            rotate={45}
            options={options}
            xKey='time'
            yKey='value' />
        </View>
      )
    } else {
      return (
        <View style={ styles.coinLoading }>
          <ActivityIndicator size="large" color="#32CD32" />
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
    backgroundColor: colors.dark_gray,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  button: {
    color: colors.white,
  },
  coinLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black'
  },
})
