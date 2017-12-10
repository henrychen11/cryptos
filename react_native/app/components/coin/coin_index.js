import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import CoinIndexItem from './coin_index_item';

class CoinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCoins();
  }

  render() {
    const { coins } = this.props;
    if (coins.length > 0) {
      return (
        <ScrollView style={styles.coinIndex}>
          {
            coins.map((coin, idx) => (
              <CoinIndexItem
                key={idx}
                coin={coin} />
            ))
          }
        </ScrollView>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}

const styles = StyleSheet.create({
  coinIndex: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
    overflow: 'scroll',
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
});

export default CoinIndex;
