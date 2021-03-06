import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions} from 'react-native';

import CoinIndexContainer from '../coin/coin_index_container';
import CoinShow from './coin_show';
import { colors, layouts } from '../../stylesheets/constants';

class Home extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Home',
  }

  constructor(props){
    super(props);
    Dimensions.addEventListener('change', () => {
      const dim = Dimensions.get('screen')
      const orientation = (dim.height > dim.width) ? 'vertical' : 'horizontal'
      this.props.receiveOrientation(orientation);
    })
  }

  componentDidMount(){
    this.props.setNavigation(this.props.navigation.navigate);
    const dim = Dimensions.get('screen')
    const orientation = (dim.height > dim.width) ? 'vertical' : 'horizontal'
    this.props.receiveOrientation(orientation);
  }

  render() {
    const { orientation } = this.props;
    let containerStyle = styles.verticalContainer;
    let coinShowStyle = styles.coinShowVertical;
    let bittrexStyle = styles.bittrexVertical;
    if (orientation === "horizontal") {
      containerStyle = styles.horizontalContainer;
      coinShowStyle = styles.coinShowHorizontal;
      bittrexStyle = styles.bittrexHorizontal;
    }
    return(
      <View style={containerStyle}>

          <CoinIndexContainer />
          <View style={coinShowStyle}>
            <CoinShow />

          </View>
        <Text style={bittrexStyle}>Data from Bittrex</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  coinShowVertical: {
    flex: .9,
    width: '100%',
    flexDirection: 'column',
    borderTopWidth: 1,
    borderColor: colors.gray,
  },
  coinShowHorizontal: {
    flex: 1.20,
    width: '100%',
    flexDirection: 'column',
    borderLeftWidth: 1,
    borderColor: colors.gray,
  },
  bittrexVertical: {
    color: colors.gray,
    position: 'absolute',
    textAlign: 'center',
    bottom: 0,
    left: 0,
    right: 0
  },
  bittrexHorizontal: {
    color: colors.gray,
    position: 'absolute',
    textAlign: 'left',
    bottom: 0,
    left: 5,
    right: 0
  }
});



export default Home;
