import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import CoinIndex from '../coin/coin_index';

class Home extends React.Component{
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <CoinIndex />
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
