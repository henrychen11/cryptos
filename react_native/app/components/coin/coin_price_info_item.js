import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../stylesheets/constants';

class CoinPriceInfoItem extends React.Component {
  render() {
    const { title1, title2, value1, value2 } = this.props;
    return(
      <View style={styles.coinPriceInfoItem}>
        <View style={styles.group_left}>
          <Text style={styles.title}>{title1}</Text>
          <Text style={styles.value}>{value1}</Text>
        </View>
        <View style={styles.group_right}>
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
  group_left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 40,
    paddingLeft: 5,
  },
  group_right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 5,
  },
  title: {
    color: colors.white
  },
  value: {
    color: colors.white
  }
});

export default CoinPriceInfoItem;
