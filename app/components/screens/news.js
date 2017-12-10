import React from 'react';
import { View, StyleSheet, Text, ListView, TextInput } from 'react-native';
import NewsIndex from '../news/news_index';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      searchTerm: ''
    };
  }
  render() {
    return (
        <NewsIndex />
    );
  }
}

export default News;
