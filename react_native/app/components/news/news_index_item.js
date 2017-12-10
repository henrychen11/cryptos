import React from 'react';
import { View, StyleSheet, Text, ListView } from 'react-native';

class NewsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.article.title}</Text>
      </View>
    );
  }
}

export default NewsIndexItem;
