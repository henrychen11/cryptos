import React from 'react';
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts';
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

//   render() {
//       let display;
//       if (this.props.currentChart) {

//         const data = this.selectData();
//         let values = [];
//         let time = [];
//         data.forEach(dp => {
//           values.push(dp.value);
//           time.push(dp.time);
//         });

//         const contentInset = { top: 20, bottom: 20 };
//         display = (
//           <View style={styles.chartContainer}>
//               <View style={ { flex: 1, height: "100%", flexDirection: 'row' } }>
//                   <View style={ { height: "100%", marginRight: 10 } }>
//                       <YAxis
//                           style={{position: 'absolute', left: 0, bottom: 0, top: 0}}
//                           dataPoints={ [15000, 25000] }
//                           contentInset={ contentInset }
//                           labelStyle={ { color: 'white', fontWeight: 'bold' } }
//                           formatLabel={ value => `$${value}` }
//                       />
//                   </View>
//                   <View style={ { flex: 1, height: "100%", flexDirection: 'column' } }>
//                       <LineChart
//                           style={ { flex: 1, marginLeft: 25} }
//                           dataPoints={ values }
//                           svg={{
//                               stroke: 'rgb(134, 65, 244)',
//                               fill: 'blue',
//                               scale: "1.5"
//                           }}
//                           shadowSvg={ {
//                               stroke: 'rgba(134, 65, 244, 0.2)',
//                               strokeWidth: 2,
//                           } }
//                           contentInset={ contentInset }
//                       />
//                   <XAxis
//                       style={ { position: 'absolute', left: 25, bottom: 0, right: 10 } }
//                       values={ time }
//                       formatLabel={ (value, index) => value }
//                       chartType={ XAxis.Type.LINE }
//                       labelStyle={ { color: 'white', fontWeight: 'bold' } }
//                       contentInset={ contentInset }
//                   />
//                   </View>
//               </View>
//           </View>
//         );
//       }
//       return (
//           <View style={styles.main}>
//               <View style={styles.options}>
//                   <Button
//                       title="1H"
//                       onPress={() => this.updateView("hour")} />
//                   <Button
//                       title="1D"
//                       onPress={() => this.updateView("day")}  />
//                   <Button
//                       title="1W"
//                       onPress={() => this.updateView("week")}  />
//               </View>
//               {display}
//           </View>
//       );
//   }

render() {

  // const data = this.selectData();
  // console.log(data)

   let data = [
      [{
        "x": 0,
        "y": 47782
      }, {
        "x": 1,
        "y": 48497
      }, {
        "x": 2,
        "y": 77128
      }, {
        "x": 3,
        "y": 73413
      }, {
        "x": 4,
        "y": 58257
      }, {
        "x": 5,
        "y": 40579
      }, {
        "x": 6,
        "y": 72893
      }, {
        "x": 7,
        "y": 60663
      }, {
        "x": 8,
        "y": 15715
      }, {
        "x": 9,
        "y": 40305
      }, {
        "x": 10,
        "y": 68592
      }, {
        "x": 11,
        "y": 95664
      }, {
        "x": 12,
        "y": 17908
      }, {
        "x": 13,
        "y": 22838
      }, {
        "x": 14,
        "y": 32153
      }, {
        "x": 15,
        "y": 56594
      }, {
        "x": 16,
        "y": 76348
      }, {
        "x": 17,
        "y": 46222
      }, {
        "x": 18,
        "y": 59304
      }],
    ]
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
        <StockLine data={data} options={options} xKey='x' yKey='y' />
      </View>
    )
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

const sample = [
    {
    "time": 1,
    "value": 15852
    },
    {
    "time": 2,
    "value": 15880
    },
    {
    "time": 3,
    "value": 15774.4572
    },
    {
    "time": 4,
    "value": 15800
    },
    {
    "time": 5,
    "value": 15719.85851999
    },
    {
    "time": 6,
    "value": 15731.60000001
    },
    {
    "time": 7,
    "value": 15651
    },
    {
    "time": 8,
    "value": 15540
    },
    {
    "time": 9,
    "value": 15600.56480334
    },
    {
    "time": 10,
    "value": 15731.64658228
    },
    {
    "time": 1513225801131,
    "value": 15883.54531646
    },
    {
    "time": 1513226701092,
    "value": 15845
    },
    {
    "time": 1513227601117,
    "value": 15701.00000001
    },
    {
    "time": 1513228501093,
    "value": 15685.00115686
    },
    {
    "time": 1513229401104,
    "value": 15745.8
    },
    {
    "time": 1513230301106,
    "value": 15536.978
    },
    {
    "time": 1513231201477,
    "value": 15500.00000002
    },
    {
    "time": 1513232101363,
    "value": 15633.38075949
    },
    {
    "time": 1513233001864,
    "value": 15750.032
    },
    {
    "time": 1513233901503,
    "value": 15590
    },
    {
    "time": 1513234802038,
    "value": 15353.71820675
    },
    {
    "time": 1513235701597,
    "value": 15450
    },
    {
    "time": 1513236601584,
    "value": 15383
    },
    {
    "time": 1513237501607,
    "value": 15580.75
    },
    {
    "time": 1513238401655,
    "value": 15798.15268997
    },
    {
    "time": 1513240201806,
    "value": 16109.59251741
    },
    {
    "time": 1513241101287,
    "value": 16050
    },
    {
    "time": 1513242001507,
    "value": 16070.00000001
    },
    {
    "time": 1513242901277,
    "value": 16140.01000002
    },
    {
    "time": 1513243801470,
    "value": 16072.13152099
    },
    {
    "time": 1513244701506,
    "value": 15946.31709999
    },
    {
    "time": 1513245602052,
    "value": 15822.00901
    },
    {
    "time": 1513269901471,
    "value": 16270.29999999
    },
    {
    "time": 1513270801475,
    "value": 16181
    },
    {
    "time": 1513271701124,
    "value": 16300.00000001
    },
    {
    "time": 1513272601135,
    "value": 16299
    },
    {
    "time": 1513273501914,
    "value": 16270.0000001
    },
    {
    "time": 1513274403109,
    "value": 16300
    },
    {
    "time": 1513275302596,
    "value": 16400.00000001
    },
    {
    "time": 1513276203171,
    "value": 16354.63
    },
    {
    "time": 1513277102987,
    "value": 16247.04535002
    },
    {
    "time": 1513278003013,
    "value": 16200
    },
    {
    "time": 1513278903110,
    "value": 16199.95
    },
    {
    "time": 1513279803003,
    "value": 16350
    },
    {
    "time": 1513280702869,
    "value": 16360
    },
    {
    "time": 1513281602911,
    "value": 16391.85683234
    },
    {
    "time": 1513282503616,
    "value": 16428
    },
    {
    "time": 1513283402961,
    "value": 16400
    },
    {
    "time": 1513284302949,
    "value": 16375.1423253
    },
    {
    "time": 1513285202960,
    "value": 16258.73
    },
    {
    "time": 1513286102958,
    "value": 16300.38467606
    },
    {
    "time": 1513287002964,
    "value": 16183.8
    },
    {
    "time": 1513287902945,
    "value": 16280.43360024
    },
    {
    "time": 1513288802970,
    "value": 16325
    },
    {
    "time": 1513289702926,
    "value": 16320
    },
    {
    "time": 1513290602952,
    "value": 16371
    },
    {
    "time": 1513291502990,
    "value": 16340
    },
    {
    "time": 1513292403144,
    "value": 16300
    },
    {
    "time": 1513293302963,
    "value": 16319.00000001
    },    
]