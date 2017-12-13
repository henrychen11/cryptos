import React from 'react';
import { StyleSheet, WebView } from 'react-native';

class newsPreview extends React.Component {
  static navigationOptions = {

  }

  render() {
    return (
      <WebView
        source={{ uri: `${this.props.navigation.state.params.uri}`}}
        style={{ marginTop: 20}} />
    );
  }
}

export default newsPreview;
