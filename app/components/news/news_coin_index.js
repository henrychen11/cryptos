import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput } from 'react-native';
import NewsIndexItem from './news_index_item';

class NewsCoinIndex extends React.Component {

  componentDidMount(){
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2017-12-09&to=2017-12-09&sortBy=popularity&apiKey=bfa105efac2f4515889f3e14dddfc0f1';
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

  updateNews(term){
    console.log("inside update news");
    const url = 'https://newsapi.org/v2/everything?'
     + `q=${term}&sortBy=publishedAt&`
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
  
  render(){
    return (
      <Text>Hellow News COin intex</Text>
    );
  }
}

export default NewsCoinIndex;
