import React from 'react'
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
// import * as shape from 'd3-shape'
import { Text, View, StyleSheet, Button } from 'react-native';

class LineChartExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartOption: 'hour'
        }
        this.updateView = this.updateView.bind(this);
    }

    updateView(option){
        this.setState({
            chartOption: option
        })
    }
    render() {
        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const contentInset = { top: 20, bottom: 20 }
        
        console.log(this.state.chartOption);
        let display;

        if (this.state.chartOption === 'hour'){
            display = 
            <View style={styles.chartContainer}>
                <Text style={styles.chartTitle}>Hour</Text>
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
        } else if (this.state.chartOption === 'day'){
            display = <View style={ { height: "85%", flexDirection: 'row' } }>
            <Text style={styles.chartTitle}>Day</Text>
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
        } else if (this.state.chartOption === 'week'){
            display = 
            <View style={ { height: "85%", flexDirection: 'row' } }>
                <Text style={styles.chartTitle}>Week</Text>
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
        }

        return (
            
            <View style={styles.main}>
        
                    {display}
    
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
                
            </View>
        )
    }
}
export default LineChartExample;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  chartContainer: {
    height: "85%",
    padding: 20,
  },
  options: {
      flexDirection: 'row',
      justifyContent: 'center'
  },
  chartTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
  }
});