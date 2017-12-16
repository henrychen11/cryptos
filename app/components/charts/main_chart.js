import React from 'react';
import { SmoothLine } from 'react-native-pathjs-charts';

import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';
import moment from 'moment';
import { formatChartPrice } from '../../util/formatter';

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

  updateView(option){
    this.setState({
        chartOption: option,
    });
  }

  selectData() {
    switch(this.state.chartOption) {
      case 'week':
        this.labelFunction = (d) => moment(d).format('MM-DD');
        return this.props.currentChart.valuePerFifteenMinutesUSD;
      case 'hour':
        this.labelFunction = (d) => moment(d).format("h:mm");
        return this.props.currentChart.valuePerMinuteUSD.slice(-60);
      case 'day':
        this.labelFunction = (d) => moment(d).format('hh:mm');
        return this.props.currentChart.valuePerFifteenMinutesUSD.slice(-96);
        // const data = this.props.currentChart.valuePerMinuteUSD;
        // const filteredData = [];
        // for (let i = 0; i < data.length; i ++) {
          // if (i % 15 === 0) filteredData.push(data[i]);
        // }
        // return filteredData;
    }
  }

  onLayout = event => {
    // if (this.state.dimensions) return // layout was already called
    let {width, height} = event.nativeEvent.layout
    this.setState({dimensions: {width, height}})
  }

  render() {

    if (this.props.currentChart) {
      const data = this.selectData().map( (el) => (
        ({
          'time': el.time,
          'value': el.value })
      ));
      console.log(<SmoothLine/>);
      let options = {
        width: this.state.dimensions.width * 0.77,
        height: this.state.dimensions.height * 0.65,
        color: colors.green,
        margin: {
          top: 20,
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
          tickValues: [],
          labelFunction: this.labelFunction,
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
                    color={colors.white}
                    title="1H"
                    onPress={() => this.updateView("hour")} />
                <Button
                    color={colors.white}
                    title="1D"
                    onPress={() => this.updateView("day")}  />
                <Button
                    color={colors.white}
                    title="1W"
                    onPress={() => this.updateView("week")}  />
          </View>
          <SmoothLine
            data={[data]}
            rotate={45}
            options={options}
            xKey='time'
            yKey='value' />
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
    backgroundColor: colors.dark_gray,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    color: colors.white,
  }
})
