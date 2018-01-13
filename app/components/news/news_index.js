import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput, ActivityIndicator } from 'react-native';
import NewsIndexItem from './news_index_item';
import { colors, layouts } from '../../stylesheets/constants';

class NewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (this.props.isLoading){
      return (
        <View style={styles.coinLoading}>
          <ActivityIndicator size="large" color="#32CD32" />
        </View>
      );
    } else {
      return (
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.props.dataSource}
            enableEmptySections={true}
            renderRow={(article) => (
              <NewsIndexItem
                orientation={this.props.orientation}
                navigate={this.props.navigate}
                article={article} />
            )}>
          </ListView>
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
  list: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: colors.black,
  },
});

export default NewsIndex;
