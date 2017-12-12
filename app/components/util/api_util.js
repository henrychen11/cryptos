import React from 'react';
import { ListView } from 'react-native';


export const getNews = (url) => {
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
};
