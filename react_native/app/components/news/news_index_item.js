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
            numberOfLines={2}
            style={styles.newsName}>
            {this.props.article.title}
          </Text>
          <Text
            numberOfLines={3}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 2,
    flexDirection: 'column',
  },
  newsIndexItem: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingTop: 10,
    color: 'white',
    flexDirection: 'row',
    fontSize: 11,
  },
  image: {
    justifyContent: 'center',
    height: 80,
    borderRadius: 3,
    width: 80
  },

});
