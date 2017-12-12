import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput } from 'react-native';
import NewsIndexItem from './news_index_item';

class NewsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
  }

  render(){
    console.log(this.props.navigate);
    if (this.props.isLoading){
      return (
        <Text>I'm LOADING!!!!</Text>
      );
    } else {
      return (
        <View style={styles.newsIndex}>
          <ListView style={styles.newsIndexList}
            dataSource={this.props.dataSource}
            enableEmptySections={true}
            renderRow={(article) => (
              <NewsIndexItem
                navigate={this.props.navigate}
                article={article} />
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
  }
});

export default NewsIndex;
