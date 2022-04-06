import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import {View, Image} from 'react-native';

export function DrawerComponent(props){
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../assets/JBLogo.png')} style={{height: 85, width: 372}}/>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </SafeAreaView>
    )
}
