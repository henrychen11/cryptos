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
              const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
              });

              this.setState({
                isLoading: false,
                articles: responseJSON.articles,
                dataSource: ds.cloneWithRows(responseJSON.articles)
                });
              })
            .catch((error) => (console.log(error)));
  }

  render(){
    console.log("articles", this.state.dataSource);
    if (this.state.isLoading){
      return (
        <Text>I'm LOADING!!!!</Text>
      );
    } else {
      return (
          <ListView style={styles.newsIndex}
            dataSource={this.state.dataSource}
            renderRow={(article) => (
              <NewsIndexItem article={article} />
            )}>
          </ListView>

      );
    }
  }

}

const styles = StyleSheet.create({
  newsIndex: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
    overflow: 'scroll',
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
});

export default NewsIndex;
