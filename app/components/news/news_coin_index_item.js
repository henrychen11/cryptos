import React from 'react';
import {
  View, StyleSheet, Text, ListView, TouchableHighlight, Image, WebView, Linking
} from 'react-native';
import NewsPreview from './news_preview';

import { colors, layouts } from '../../stylesheets/constants';
import moment from 'moment';

class NewsCoinIndexItem extends React.Component {
  static navigationOptions = {
    title: 'News',
  }

  constructor(props) {
    super(props);
  }

  _onClick() {
    return this.props.navigate('NewsPreview', {
      uri: this.props.article.url,
      title: this.props.article.title,
    });
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          activeOpacity={5}
          underlayColor="gray"
          onPress={ this._onClick.bind(this) }>
          <View style={styles.newsIndexItem}>
            <View style={styles.main}>
              <Text
                numberOfLines={2}
                style={styles.newsName}>
                {this.props.article.title}
              </Text>
              <View style={styles.footer}>
                <Text style={styles.footerText}>{this.props.article.source.name}</Text>
                <Text style={styles.footerText}>{moment(this.props.article.publishedAt).format("MMM Do YY")}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default NewsCoinIndexItem;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
  },
  newsIndexItem: {
    paddingVertical: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.gray,
    borderBottomWidth: 1,
    marginHorizontal: 3,
  },
  newsName: {
    paddingTop: 2,
    fontWeight: "bold",
    color: colors.white,
    fontSize: layouts.newsTitleFontSize,
  },
  footer: {
    paddingTop: 1,
    flexDirection: 'row',
  },
  footerText: {
    fontSize: layouts.newsFooterFontSize,
    color: colors.white,
    marginRight: 5,
  }

});
