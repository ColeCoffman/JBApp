import 'react-native-gesture-handler';
import { Image, LogBox, Text, View, Button, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import { PreferencesContext } from './context/preference';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';


import  {DrawerComponent} from './components/DrawerNavigator';
import { HomeScreen } from './Screens/HomeScreen';
import { MainEventScreen } from './Screens/MainEventScreen';
import { BrowserScreen } from './Screens/BrowserScreen';
import { AboutUsScreen } from './Screens/AboutUsScreen';
import { GeneralRaffleScreen } from './Screens/GeneralRaffleScreen';
import { LargeItemScreen } from './Screens/LargeItemScreen';
import { ScavengerHuntScreen } from './Screens/ScavengerHuntScreen';
import { RaffleRulesScreen } from './Screens/RaffleRulesScreen';

import {CombinedDefaultTheme, CombinedDarkTheme } from './style';



LogBox.ignoreLogs([
  'Warning: componentWillMount has been renamed, and is not recommended for use.',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use.',
  'Warning: componentWillUpdate has been renamed, and is not recommended for use.',
]);


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function LogoTitle() {
  return (
    <Image
      style={{ width: 197, height: 45 }}
      source={require('./assets/JBLogo.png')}
    />
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent{...props} />}>
      <Drawer.Screen 
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerTitle: (props) => <LogoTitle {...props} />,
      }}
       />
      <Drawer.Screen name="Main Events" component={MainEventScreen}/>
      <Drawer.Screen name="Browser" component={BrowserScreen} />
      <Drawer.Screen name="About Us" component={AboutUsScreen} />
      <Drawer.Screen name="General Raffle" component={GeneralRaffleScreen} />
      <Drawer.Screen name="Large Item" component={LargeItemScreen} />
      <Drawer.Screen name="Scavenger Hunt" component={ScavengerHuntScreen} />
      <Drawer.Screen name="Raffle Rules" component={RaffleRulesScreen} />
    </Drawer.Navigator>
  );
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      setExpoPushToken(token);
      console.log("TOKEN: " + expoPushToken);
    });

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const [isThemeDark, setIsThemeDark] = React.useState(false);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );


  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <MyDrawer />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}