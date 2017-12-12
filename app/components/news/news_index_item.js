import React from 'react';
import { View, StyleSheet, Text, ListView, TouchableHighlight, Image, WebView, Linking } from 'react-native';
import { colors, layouts } from '../../stylesheets/constants';

class NewsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };
  }

    handleClick(weblink) {
     Linking.canOpenURL(weblink).then(supported => {
       if (supported) {
         Linking.openURL(weblink);
       } else {
         console.log("Invalid URL");
       }
     });
   }

   renderWebView(){
     console.log(this.props.article);
     if(this.state.check){
       return (
         <WebView
           source={{ uri: `${this.props.article.url}`}}
           style={{ marginTop: 20}} />
       );
     } else {
       return (
         <View>
           <TouchableHighlight
             activeOpacity={5}
             underlayColor="gray"
             onPress={() => this.setState({check: true })}>
             <View style={styles.newsIndexItem}>
               <View style={styles.left}>
                    <Image
                       source={{ uri: `${this.props.article.urlToImage}` }}
                       style={styles.image}>
                     </Image>
               </View>
               <View style={styles.right}>
                 <Text
                   numberOfLines={2}
                   style={styles.newsName}>
                   {this.props.article.title}
                 </Text>
                 <Text
                   numberOfLines={3}
                   style={styles.newsDescription}>
                   {this.props.article.description}
                 </Text>
               </View>
             </View>
           </TouchableHighlight>
         </View>
       );
     }
   }

  render() {
    return (
      <View style={{flex:1}}>
        {this.renderWebView()}
      </View>
    );
  }
}

export default NewsIndexItem;

const styles = StyleSheet.create({
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 2,
    flexDirection: 'column',
  },
  newsIndexItem: {
    paddingVertical: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginHorizontal: layouts.marginHorizontal,
  },
  newsName: {
    paddingTop: 10,
    fontWeight: "800",
    color: 'white',
    fontSize: 14,
  },
  newsDescription: {
    paddingTop: 10,
    color: 'white',
    flexDirection: 'row',
    fontSize: 11,
  },
  image: {
    justifyContent: 'center',
    height: 80,
    borderRadius: 3,
    width: 80
  },

});
