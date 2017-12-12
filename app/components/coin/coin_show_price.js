import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CoinPriceInfoContainer from '../coin/coin_price_info_container';
import { colors } from '../../stylesheets/constants';

class CoinShowPrice extends React.Component {
  static navigationOptions = {
    tabBarLabel: '•'
    // tabBarIcon: () => (
    //   <Text>•</Text>
    // )
  }

  render() {
    return(
      <View style={styles.coinShowPrice}>
        <CoinPriceInfoContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coinShowPrice: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.dark_gray,
  }
});

export default CoinShowPrice;
