import React from 'react'
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Text, View, StyleSheet, Button } from 'react-native';

class LineChartExample extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chartOption: 'Hour'
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

                <View style={ { height: "85%", flexDirection: 'row' } }>
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
        )
    }
}
export default LineChartExample;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  options: {
      fontSize: 14,
      flexDirection: 'row',
      justifyContent: 'center'
  }
});