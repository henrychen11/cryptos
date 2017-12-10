import React from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';


class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // dataSource: []
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
                dataSource: ds.cloneWithRows(responseJSON.articles)
                });
              })
            .then((error) => (console.log(error)));

  }
  
  render() {
    return(
      <View>
        <Text>This is news</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
          />
      </View>
    );
  }
}

export default News;
