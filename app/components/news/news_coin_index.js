import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';
import NewsIndexItem from './news_index_item';

class NewsCoinIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    };
  }

  static navigationOptions = {
    tabBarLabel: '•',
  }

  componentDidMount(){
    console.log("inside update news");
    const url = 'https://newsapi.org/v2/everything?'
     + `q=${this.props.currentCoin.name}&sortBy=publishedAt&`
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

  componentWillReceiveProps(){
    console.log("inside update news");
    const url = 'https://newsapi.org/v2/everything?'
     + `q=${this.props.currentCoin.name}&sortBy=publishedAt&`
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

  render(){
    const { currentCoin } = this.props;
    console.log("name", currentCoin.name);
    console.log("datasource", this.state.dataSource);
    if (currentCoin.name){
      return (
        <View style={styles.coinNewsInfo}>
            <View style={styles.newsIndex}>
              <ListView
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={(article) => (
                  <NewsIndexItem article={article} />
                )}
                />
            </View>
        </View>
      );
    } else {
      return (
        <View style={styles.coinNewsInfo}>
            <Text style={styles.title}>Select a coin</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  coinNewsInfo: {
    backgroundColor: colors.dark_gray,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: layouts.marginHorizontal,
  },
  newsIndex: {
    width: "100%"
  },
  newsIndexList: {
    backgroundColor: 'black',
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
    overflow: 'scroll',
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
});

export default NewsCoinIndex;