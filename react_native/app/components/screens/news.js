import React from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';
import NewsIndex from '../news/news_index';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount(){
    const url = 'https://newsapi.org/v2/top-headlines?'
     + 'sources=google-news&'
     + 'apiKey=bfa105efac2f4515889f3e14dddfc0f1';

    return fetch(url)
            .then((response) => (response.json()))
            .then((responseJSON) => {
              const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
              this.setState({
                isLoading: false,
                dataSource: ds.cloneWithRows(responseJSON.articles)
                });
              })
            .catch((error) => (console.log(error)));
  }

  render() {
    return (
        <NewsIndex />
    );
  }
}

export default News;