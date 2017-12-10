import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput } from 'react-native';
import NewsIndexItem from './news_index_item';

class NewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      searchTerm: ''
    };
  }

  componentDidMount(){
    const url = 'https://newsapi.org/v2/everything?'
     + 'q=bitcoin&sortBy=publishedAt&'
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


  updateNews(term){
    console.log("inside update news");
    const url = 'https://newsapi.org/v2/top-headlines?'
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
    if (this.state.isLoading){
      return (
        <Text>I'm LOADING!!!!</Text>
      );
    } else {
      return (
        <View style={styles.newsIndex}>
          <TextInput
            style={styles.searchInput}
            onChangeText={ (searchTerm) => this.setState({searchTerm})}
            value={this.state.searchTerm}
            placeholder="Enter Search Term"
            onSubmitEditing={ (event) => this.updateNews(event.nativeEvent.text)}
            enableEmptySections={true}
            />
          <ListView style={styles.newsIndexList}
            dataSource={this.state.dataSource}
            renderRow={(article) => (
              <NewsIndexItem article={article} />
            )}>
          </ListView>
        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  newsIndex: {
    flex: 1,
    flexDirection: 'column'
  },
  newsIndexList: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
    overflow: 'scroll',
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  searchInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    height: 35,
    textAlign: 'center',
  }
});

export default NewsIndex;
