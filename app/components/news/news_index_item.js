import React from 'react';
import { StackNavigator } from 'react-navigation';
import {
  View, 
  StyleSheet, 
  Text, 
  ListView, 
  TouchableHighlight, 
  Image
} from 'react-native';
import NewsPreview from './news_preview';
import moment from 'moment';

class NewsIndexItem extends React.Component {
  static navigationOptions = {
    title: 'News',
  }

  constructor(props) {
    super(props);
  }

  _onClick() {
    return this.props.navigate('NewsPreview', {
      title: this.props.article.title,
      uri: this.props.article.url,
    });
  }

  render() {
      return (
          <TouchableHighlight
            style={styles.item}
            activeOpacity={5}
            underlayColor="gray"
            onPress={ this._onClick.bind(this) }>
            <View style={styles.container}>
                <Image
                  source={{ uri: `${this.props.article.urlToImage}` }}
                  style={styles.image}>
                </Image>
              <View style={styles.text}>
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
              
              <View style={styles.footer}>
                <Text style={styles.footerText}>{this.props.article.source.name}</Text>
                <Text style={styles.footerText}>{moment(this.props.article.publishedAt).format("dddd, MMMM Do YYYY")}</Text>
              </View>
              </View>
            </View>
          </TouchableHighlight>
      );
    }
}

export default NewsIndexItem;

const styles = StyleSheet.create({
  item: {
    margin: 3,
    width: 325,
    height: 100,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  newsName: {
    fontWeight: "800",
    color: 'white',
    fontSize: 14,
  },
  newsDescription: {
    marginTop: 5,
    color: 'white',
    fontSize: 10,
  },
  image: {
    margin: 10,
    height: 80,
    width: 80,
    borderRadius: 10
  },
    footer: {
    paddingTop: 1,
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 10,
    color: 'white',
    marginRight: 5,
  }
});
