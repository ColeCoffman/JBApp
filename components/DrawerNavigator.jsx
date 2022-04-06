import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {View, Image, StyleSheet, Linking} from 'react-native';
import { Drawer, Text, TouchableRipple, Switch, List } from 'react-native-paper';
import React, { useState } from 'react';

export function DrawerComponent(props){

    // console.log(props);

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/JBLogo.png')} style={{height: 85, width: 372}}/>
            </View>
            <DrawerContentScrollView {...props}>
                {/* <DrawerItemList {...props} /> */}
                <Drawer.Item icon="home" label="Home" onPress={() => {props.navigation.navigate('Home')}} />
                <Drawer.Item icon="calendar" label="Events" onPress={() => {props.navigation.navigate('Events')}} />
                <Drawer.Item icon="cash" label="Donate" onPress={() => {
                    props.navigation.navigate('Browser', {url: 'https://www.jeepbeach.com/shop/donation/', title: 'Donate'});
                    }} />
                <List.Accordion theme={{colors: {background: 'white'}}} title="About" left={props => <List.Icon {...props} icon="information-outline" />}>
                    <List.Item title="About Us" />
                    <List.Item title="Contact Us" />
                    <List.Item title="Media" />
                    <List.Item title="Updates" />
                    <List.Item title="Volunteers" />
                </List.Accordion>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} title="Preferences">
                <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch color="#f45429" value={isDarkTheme} />
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
});
