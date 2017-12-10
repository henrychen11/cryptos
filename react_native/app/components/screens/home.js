import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import CoinIndex from '../coin/coin_index';
import CoinShow from '../coin/coin_show';

class Home extends React.Component{
  static navigationOptions = {
    title: 'Cryptos',
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <CoinIndex />
        <View style={styles.coinShow}>
          <CoinShow />
        </View>
        <Button
          title="go to news"
          onPress={() =>
            navigate('News')}
        />
      </View>
    );
  }
}

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  coinShow: {
    flex: .8,
  },
});
