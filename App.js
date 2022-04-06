import 'react-native-gesture-handler';
import { Image, LogBox} from 'react-native';
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import  {DrawerComponent} from './components/DrawerNavigator';
import { HomeScreen } from './Screens/HomeScreen';
import { EventScreen } from './Screens/EventScreen';
import { BrowserScreen } from './Screens/BrowserScreen';



LogBox.ignoreLogs([
  'Warning: componentWillMount has been renamed, and is not recommended for use.',
  'Warning: componentWillReceiveProps has been renamed, and is not recommended for use.',
  'Warning: componentWillUpdate has been renamed, and is not recommended for use.',
]);



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
      <Drawer.Screen name="Events" component={EventScreen}/>
      <Drawer.Screen name="Browser" component={BrowserScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}