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
        console.log(Math.max(...data)+10)
        const contentInset = { top: 20, bottom: 20 }
        let display;
        if (this.state.chartOption === 'hour'){
            display = 
            <View style={styles.chartContainer}>
                <View style={ { flex: 1, height: "100%", flexDirection: 'row' } }>
                    <View style={{height: "100%", marginRight: 10, }}>
                        <YAxis
                            style={{position: 'absolute', left: 0, bottom: 0, top: 0}}
                            dataPoints={ data }
                            contentInset={ contentInset }
                            labelStyle={ { color: 'white', fontWeight: 'bold' } }
                            formatLabel={ value => `$${value}` }
                        />
                    </View>
                    <View style={{flex: 1, height: "100%", flexDirection: 'column'}}>
                        <LineChart
                            gridMax={100}
                            gridMin={-100}
                            style={ { flex: 1, marginLeft: 25} }
                            dataPoints={ data }
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
                        values={ data }
                        formatLabel={ (value, index) => value }
                        chartType={ XAxis.Type.LINE }
                        labelStyle={ { color: 'white', fontWeight: 'bold' } }
                        contentInset={ contentInset }
                    />
                    </View>
                </View>
            </View>
        } else if (this.state.chartOption === 'day'){
            display = 
            <View style={styles.chartContainer}>
                <View style={ { flex: 1, height: "100%", flexDirection: 'row' } }>
                    <View style={{height: "100%", marginRight: 10, }}>
                        <YAxis
                            style={{position: 'absolute', left: 0, bottom: 0, top: 0}}
                            dataPoints={ data }
                            contentInset={ contentInset }
                            labelStyle={ { color: 'white', fontWeight: 'bold' } }
                            formatLabel={ value => `$${value}` }
                        />
                    </View>
                    <View style={{flex: 1, height: "100%", flexDirection: 'column'}}>
                        <LineChart
                            gridMax={100}
                            gridMin={-100}
                            style={ { flex: 1, marginLeft: 25} }
                            dataPoints={ data }
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
                        values={ data }
                        formatLabel={ (value, index) => value }
                        chartType={ XAxis.Type.LINE }
                        labelStyle={ { color: 'white', fontWeight: 'bold' } }
                        contentInset={ contentInset }
                    />
                    </View>
                </View>
            </View>
        } else if (this.state.chartOption === 'week'){
            display = 
            <View style={styles.chartContainer}>
                <View style={ { flex: 1, height: "100%", flexDirection: 'row' } }>
                    <View style={{height: "100%", marginRight: 10, }}>
                        <YAxis
                            style={{position: 'absolute', left: 0, bottom: 0, top: 0}}
                            dataPoints={ data }
                            contentInset={ contentInset }
                            labelStyle={ { color: 'white', fontWeight: 'bold' } }
                            formatLabel={ value => `$${value}` }
                        />
                    </View>
                    <View style={{flex: 1, height: "100%", flexDirection: 'column'}}>
                        <LineChart
                            gridMax={100}
                            gridMin={-100}
                            style={ { flex: 1, marginLeft: 25} }
                            dataPoints={ data }
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
                        values={ data }
                        formatLabel={ (value, index) => value }
                        chartType={ XAxis.Type.LINE }
                        labelStyle={ { color: 'white', fontWeight: 'bold' } }
                        contentInset={ contentInset }
                    />
                    </View>
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
    backgroundColor: 'gray'
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
      justifyContent: 'center'
  },
});