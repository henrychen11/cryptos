import React from 'react'
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
// import * as shape from 'd3-shape'
import { Text, View, StyleSheet, Button } from 'react-native';

class MainChart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartOption: 'hour'
        }
        this.updateView = this.updateView.bind(this);
    }

    updateView(option){
        this.setState({
            chartOption: option,
            currentCoin: ''
        })
    }
    render() {
        const data = [ 50, 10, 40, 95, -4, -24, 85]
        const data2 = [ 1,2,331,4,5,6,7 ]
        
        const contentInset = { top: 20, bottom: 20 }
        
        console.log(this.props);
        let display;

        if (this.state.chartOption === 'hour'){
            display = 
            <View style={styles.chartContainer}>
                <View style={ { flex: 1, height: "100%", flexDirection: 'row' } }>
                    <YAxis
                        dataPoints={ data }
                        contentInset={ contentInset }
                        labelStyle={ { color: 'grey' } }
                        formatLabel={ value => `$${value}` }
                    />
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                        <LineChart
                            style={ { flex: 1, marginLeft: 20 } }
                            dataPoints={ data }
                            svg={{
                                stroke: 'rgb(134, 65, 244)',
                            }}
                            shadowSvg={ {
                                stroke: 'rgba(134, 65, 244, 0.2)',
                                strokeWidth: 5,
                            } }
                            contentInset={ contentInset }
                        />
                    <XAxis
                        style={ { paddingVertical: 16 } }
                        values={ data }
                        formatLabel={ (value, index) => value }
                        chartType={ XAxis.Type.LINE }
                        labelStyle={ { color: 'grey' } }
                        contentInset={ contentInset }
                    />
                    </View>
            </View>
        </View>
        } else if (this.state.chartOption === 'day'){
            display = 
            <View style={styles.chartContainer}>
                <View style={ { height: "100%", flexDirection: 'row' } }>
                    <YAxis
                        dataPoints={ data }
                        contentInset={ contentInset }
                        labelStyle={ { color: 'grey' } }
                        formatLabel={ value => `$${value}` }
                    />
                    <LineChart
                        style={ { flex: 1, marginLeft: 16 } }
                        dataPoints={ data }
                        svg={{
                            stroke: 'rgb(134, 65, 244)',
                        }}
                        contentInset={ contentInset }
                    />
            </View>
        </View>
        } else if (this.state.chartOption === 'week'){
            display = 
            <View style={styles.chartContainer}>
                <View style={ { height: "100%", flexDirection: 'row' } }>
                    <YAxis
                        dataPoints={ data }
                        contentInset={ contentInset }
                        labelStyle={ { color: 'grey' } }
                        formatLabel={ value => `$${value}` }
                    />
                    <LineChart
                        style={ { flex: 1, marginLeft: 16 } }
                        dataPoints={ data }
                        svg={{
                            stroke: 'rgb(134, 65, 244)',
                        }}
                        contentInset={ contentInset }
                    />
            </View>
        </View>
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
        )
    }
}
export default MainChart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  chartContainer: {
    flex: 1,
    height: "85%",
    padding: 20,
  },
  options: {
      flexDirection: 'row',
      justifyContent: 'center'
  },
//   chartTitle: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: 'white',
//     textAlign: 'center',
//   }
});


// <XAxis
// style={ { paddingVertical: 16 } }
// values={ index }
// formatLabel={ (value, index) => index }
// chartType={ XAxis.Type.LINE }
// labelStyle={ { color: 'grey' } }
// contentInset={ contentInset }
// />