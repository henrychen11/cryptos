import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput } from 'react-native';
import NewsIndex from '../news/news_index_container';
import { colors } from '../../stylesheets/constants';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
    };
  }

  getNews(url){
    return fetch(url)
          .then((response) => (response.json()))
          .then((responseJSON) => {
            const ds = new ListView.DataSource({
              rowHasChanged: (r1, r2) => r1 !== r2
            });
            this.setState({
              isLoading: false,
              dataSource: ds.cloneWithRows(responseJSON.articles)
            });
          })
          .catch((error) => (console.log(error)));
  }

  componentDidMount(){
    const url = 'https://newsapi.org/v2/everything?'
                + 'q=crypto&'
                + 'sources=crypto-coins-news, cbs-news, engadget, buzzfeed&'
                + 'language=en&'
                + 'apiKey=bfa105efac2f4515889f3e14dddfc0f1';
    this.getNews(url);
  }

  updateNews(searchTerm){
    const url = 'https://newsapi.org/v2/everything?'
                + `q=${searchTerm}&`
                + 'sources=crypto-coins-news, cbs-news, engadget, buzzfeed&'
                + 'language=en&'
                + 'apiKey=bfa105efac2f4515889f3e14dddfc0f1';
    this.getNews(url);
  }

  render() {
    return (
      <View style={styles.newsContainer}>
        <View style={styles.searchInputContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={ (searchTerm) => this.setState({searchTerm})}
            value={this.state.searchTerm}
            placeholder="Search"
            placeholderTextColor={ colors.lightest_gray }
            keyboardType="web-search"
            autoCorrect={false}
            clearButtonMode='always'
            onSubmitEditing={ (event) => this.updateNews(event.nativeEvent.text)}
            />
          <NewsIndex
            navigate={this.props.navigation.navigate}
            dataSource={this.state.dataSource}
            isLoading={this.state.isLoading}/>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  newsContainer: {
    backgroundColor: colors.black,
    flexDirection: 'column',
    height: "100%"
  },
  searchInputContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: colors.gray,
    height: 40,
    width: 250,
    textAlign: 'center',
    // opacity: 1,
    color: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
  }
});
export default News;
