import React from 'react';
import { View, StyleSheet, Text, ListView, TouchableHighlight } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';

class NewsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        activeOpacity={5}
        underlayColor="gray"
        onPress={this._onPress}>
        <View style={styles.newsIndexItem}>
        <Text
          style={styles.newsName}>
          {this.props.article.title}
        </Text>
        <Text
          style={styles.newsDescription}>
          {this.props.article.description}
        </Text>
        <Text>
          {this.props.article.publishedAt}
        </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default NewsIndexItem;


const styles = StyleSheet.create({
  newsIndexItem: {
    paddingVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: layouts.marginHorizontal,
  },
  newsName: {
    fontWeight: "800",
    color: 'white',

  },
  newsDescription: {
    color: 'white',
    flexDirection: 'row',
    // alignItems: 'center'
  },
  newsThumb: {
    color: 'white'
  },
});
