import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput } from 'react-native';
import NewsIndex from '../news/news_index_container';


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isLoading: true,
      searchTerm: ''
    };
  }

  componentDidMount(){
    const url = 'https://newsapi.org/v2/everything?'
                + 'q=cryptocurrency&'
                + 'sources=crypto-coins-news, cbs-news, engadget, buzzfeed&'
                + 'language=en&'
                + 'apiKey=bfa105efac2f4515889f3e14dddfc0f1';

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

  render() {
    return (
      <View style={styles.newsContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={ (searchTerm) => this.setState({searchTerm})}
          value={this.state.searchTerm}
          placeholder="Enter Search Term"
          onSubmitEditing={ (event) => this.updateNews(event.nativeEvent.text)}
          />
        <NewsIndex
          navigate={this.props.navigation.navigate}
          dataSource={this.state.dataSource}
          isLoading={this.state.isLoading}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  newsContainer: {
    flexDirection: 'column',
    height: "100%"
  },
  searchInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    height: 35,
    textAlign: 'center',
  }
});
export default News;
