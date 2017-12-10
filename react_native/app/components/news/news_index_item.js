import React from 'react';
import { View, StyleSheet, Text, ListView, TouchableHighlight, Image } from 'react-native';
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
          <View style={styles.left}>
            <Image
              source={{ uri: `${this.props.article.urlToImage}` }}
              style={styles.image}>
            </Image>
          </View>
        <View style={styles.right}>
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
        </View>
      </TouchableHighlight>
    );
  }
}

export default NewsIndexItem;

const styles = StyleSheet.create({
  left: {
    flex: 1,
  },
  right: {
    flex: 2,
    flexDirection: 'column',
  },
  newsIndexItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: layouts.marginHorizontal,
  },
  newsName: {
    fontWeight: "800",
    color: 'white',
    fontSize: 14,
  },
  newsDescription: {
    color: 'white',
    flexDirection: 'row',
    fontSize: 11,
  },
  image: {
    height: 100,
    borderRadius: 50,
    width: 100
  },

});
