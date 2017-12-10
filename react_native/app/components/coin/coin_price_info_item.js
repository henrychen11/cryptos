import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../stylesheets/constants';

class CoinPriceInfoItem extends React.Component {
  render() {
    const { title1, title2, value1, value2 } = this.props;
    console.log(title1);
    return(
      <View style={styles.coinPriceInfoItem}>
        <View style={styles.group}>
          <Text style={styles.title}>{title1}</Text>
          <Text style={styles.value}>{value1}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>{title2}</Text>
          <Text style={styles.value}>{value1}</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  coinPriceInfoItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 10,
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  group: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  title: {
    color: colors.white
  },
  value: {
    color: colors.white
  }
});

export default CoinPriceInfoItem;
