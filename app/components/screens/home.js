import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions} from 'react-native';

import CoinIndexContainer from '../coin/coin_index_container';
import CoinShow from './coin_show';

class Home extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Cryptos',
  }

  constructor(props){
    super(props);
    Dimensions.addEventListener('change', () => {
      const dim = Dimensions.get('screen')
      const orientation = (dim.height > dim.width) ? 'vertical' : 'horizontal'
      this.props.receiveOrientation(orientation);
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <CoinIndexContainer />
        <View style={styles.coinShow}>
          <CoinShow />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  coinShow: {
    flex: .8,
    width: '100%',
    flexDirection: 'column',

  },
});



export default Home;
