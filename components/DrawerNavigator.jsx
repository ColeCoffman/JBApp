import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {View, Image, StyleSheet, Linking} from 'react-native';
import { Drawer, Text, TouchableRipple, Switch, List,useTheme } from 'react-native-paper';
import React, { useContext} from 'react';
import { PreferencesContext } from "../context/preference";

export function DrawerComponent(props){

    // console.log(props);

    const theme = useTheme();
    const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/JBLogo.png')} style={{height: 85, width: 372}}/>
            </View>
            <DrawerContentScrollView {...props}>
                {/* <DrawerItemList {...props} /> */}
                <Drawer.Item icon="home" label="Home" onPress={() => {props.navigation.navigate('Home')}} />
                <List.Accordion title="Raffle Numbers" left={props => <List.Icon {...props} icon="ticket" />}>
                    <List.Item 
                        title="General Raffle Tickets"
                        onPress={() => {props.navigation.navigate('General Raffle')}} />
                    <List.Item 
                        title="Large Item Raffle Tickets"
                        onPress={() => {props.navigation.navigate('Large Item')}} />
                    <List.Item 
                        title="Scavenger Hunt Tickets"
                        onPress={() => {props.navigation.navigate('Scavenger Hunt')}} />
                </List.Accordion>
                <List.Accordion title="Events" left={props => <List.Icon {...props} icon="calendar" />}>
                    <List.Item 
                        title="Main Events"
                        onPress={() => {props.navigation.navigate('Main Events')}} />
                    <List.Item 
                        title="Booseter/VIP Schedule"
                        onPress={() => {props.navigation.navigate('Main Events')}} />
                    <List.Item 
                        title="Kids Club Schedule"
                        onPress={() => {props.navigation.navigate('Main Events')}} />
                </List.Accordion>
                <List.Accordion title="About" left={props => <List.Icon {...props} icon="information-outline" />}>
                    <List.Item title="About Us" onPress={() => { props.navigation.navigate('About Us')}}/>
                    <List.Item title="Contact Us" onPress={() => {
                        props.navigation.navigate('Browser', {url: 'https://www.jeepbeach.com/about/contact-us/', title: 'Contact Us'});
                    }} />
                    <List.Item title="Media" onPress={() => {
                        props.navigation.navigate('Browser', {url: 'https://www.jeepbeach.com/about/media/', title: 'Media'});
                    }} />
                    <List.Item title="Updates" onPress={() => {
                        props.navigation.navigate('Browser', {url: 'https://www.jeepbeach.com/about/updates/', title: 'Updates'});
                    }}/>
                    <List.Item title="Volunteers" onPress={() => {
                        props.navigation.navigate('Browser', {url: 'https://www.jeepbeach.com/volunteers/', title: 'Volunteers'});
                    }}/>
                </List.Accordion>
                <Drawer.Item icon="calendar-check" label="Registration" onPress={() => {
                        props.navigation.navigate('Browser', {url: 'https://www.jeepbeach.com/participants/registration/', title: 'Registration'});
                    }} />
                <Drawer.Item icon="jeepney" label="Win A Jeep!" onPress={() => {
                        props.navigation.navigate('Browser', {url: 'https://www.jeepbeach.com/shop/2022-official-jeep-beach-drawing/', title: 'Win A Jeep!'});
                    }} />
                    <Drawer.Item icon="cash" label="Donate" onPress={() => {
                        props.navigation.navigate('Browser', {url: 'https://www.jeepbeach.com/shop/donation/', title: 'Donate'});
                        }} />
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} title="Preferences">
                <TouchableRipple onPress={() => {toggleTheme()}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch color="#f45429" value={isThemeDark} />
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
