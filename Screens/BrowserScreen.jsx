import React, {useEffect} from "react";
import {View, Linking} from "react-native";
import {WebView} from "react-native-webview";
import { IconButton} from 'react-native-paper';


function BrowserScreen(route, navigation) {
  // console.log(route);
  useEffect(() => {
    route.navigation.setOptions({title: route.route.params.title, headerRight: () => (
      <View style={{flexDirection: 'row'}}>
        <IconButton icon="apple-safari" size={25} color={'dodgerblue'} onPress={() => {
          Linking.openURL(route.route.params.url);
        } }/>
      </View>
    )});
  });
    return (
      <View style={{ flex: 1}}>
        <WebView
          source={{ uri: route.route.params.url }}
          style={{ flex: 1 }} />
      </View>
    );
  }

export {BrowserScreen};