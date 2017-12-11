import React from 'react';
import { StyleSheet, WebView, Platform} from 'react-native';

export default class MainActivity extends React.Component {

      render() {

        return (

          <WebView
          style={styles.WebViewStyle}
          source={{uri: 'https://Google.com'}}
          javaScriptEnabled={true}
          domStorageEnabled={true}  />

        );
      }
    }

const styles = StyleSheet.create(
{

 WebViewStyle:
 {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    marginTop: (Platform.OS) === 'ios' ? 20 : 0
 }
});
