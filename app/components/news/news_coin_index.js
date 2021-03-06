import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput, ActivityIndicator } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';
import NewsCoinIndexItem from './news_coin_index_item';

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
    const url = 'https://newsapi.org/v2/everything?'
                + `q=bitcoin&`
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

  componentWillReceiveProps(newProps){
    const url = 'https://newsapi.org/v2/everything?'
                + `q=${newProps.currentCoin.name}&`
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

  render(){
    const { currentCoin, navigate } = this.props;

    if (currentCoin.name && this.state.dataSource){
      return (
        <View style={styles.coinNewsInfo}>
            <View style={styles.newsIndex}>
              <ListView
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={(article) => (
                  <NewsCoinIndexItem
                    navigate={navigate}
                    article={article} />
                )}
                />
            </View>
        </View>
      );
    } else {
      return (
        <View style={styles.coinLoading}>
          <ActivityIndicator size="large" color="#32CD32" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  coinLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
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
    backgroundColor: colors.black,
    flexDirection: 'column',
    width: '100%',
    paddingTop: 10,
    overflow: 'scroll',
    borderBottomWidth: 1,
    borderColor: colors.gray,
  },
  loading: {
    color: colors.white,
  }
});

export default NewsCoinIndex;
