import React, {useEffect} from "react";
import {View} from "react-native";
import {WebView} from "react-native-webview";


function BrowserScreen(route, navigation) {
  // console.log(route);
  useEffect(() => {
    route.navigation.setOptions({title: route.route.params.title});
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