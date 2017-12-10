import React from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';
import NewsIndexItem from './news_index_item';

class NewsIndex extends React.Component {
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
              console.log(responseJSON.articles);
              this.setState({
                isLoading: false,
                articles: responseJSON.articles,
                dataSource: ds.cloneWithRows(responseJSON.articles)
                });
              })
            .catch((error) => (console.log(error)));
  }

  render(){
    console.log("articles", this.state.articles);
    if (this.state.isLoading){
      return (
        <Text>I'm LOADING!!!!</Text>
      );
    } else {
      return (
        <View>
          {this.state.articles.map( (article) => (
            <NewsIndexItem key={article.url} article={article}/>
          )
        )}
        </View>
      );
    }
  }

}

export default NewsIndex;
