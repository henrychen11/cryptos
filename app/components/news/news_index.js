import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput } from 'react-native';
import NewsIndexItem from './news_index_item';
import { colors, layouts } from '../../stylesheets/constants';

class NewsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log("news index ", this.props);
    if (this.props.isLoading){
      return (
        <Text>I'm LOADING!!!!</Text>
      );
    } else {
      return (
          <ListView
            contentContainerStyle={styles.list}
            dataSource={this.props.dataSource}
            enableEmptySections={true}
            renderRow={(article) => (
              <NewsIndexItem
                style={styles.item}
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
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: colors.black,
    },
});

export default NewsIndex;
