import {View, Text, Image} from 'react-native';
import {useState, useEffect} from 'react';
import * as Font from 'expo-font';

function AboutUsScreen() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    async function loadFonts() {
        await Font.loadAsync({
          // Load a font `Montserrat` from a static resource
          BernierRegular: require('../assets/fonts/BERNIERRegular-Regular.otf'),
        });
        setFontsLoaded(true);
      }

    useEffect(() => {
        loadFonts();
    })

    if(fontsLoaded){
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start'}}>
            <Image source={require('../assets/JB22_Header.webp')} style={{width: "100%", height: null, aspectRatio: 2}} resizeMode='stretch' />
            <View style={{padding: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', fontFamily: 'BernierRegular'}}>
                Jeep Beach is one of the largest Jeep only events in the country, attracting 200,000 visitors and 20,000 Jeeps to Daytona Beach, FL in 2019. All 50 states and 26 countries were represented during Jeep Beach Week 2019!
            </Text>
            <Text style={{paddingTop: 5, fontSize: 15}}>
            Jeep enthusiasts gather annually in April to check out the industries newest products from over 200 vendors at The Daytona International Speedway. Jeep Beach also hosts official events throughout the week in Daytona Beach, The World’s Most Famous Beach.
            </Text>
            <Text style={{paddingTop: 5, fontSize: 15}}>
            Since 2012, Jeep Beach has donated over $2 million to local charities through the event’s week long fund-raising efforts. All proceeds raised are distributed to charities throughout central Florida counties. Title Charities for 2019 included, The Boys & Girls Clubs of Volusia & Flagler Counties, The NASCAR Foundation, The Childhood Cancer Foundation, and The Petty Family Foundation/Victory Junction. Jeep Beach also was able to support over 30 other 501(c)(3) organizations!
            </Text>
            <Text style={{paddingTop: 10,fontSize: 15, fontWeight: 'bold', fontFamily: 'BernierRegular'}}>
            501c3 Charity
            </Text>
            <Text style={{paddingTop: 5, fontSize: 15}}>
            On October 13, 2017, Jeep Beach Inc., a 501(c)(3) charity, was founded to increase fund-raising efforts. Jeep Beach Inc. operates under the governance of a five member executive board and three member advisory board. All board positions, as well as the hundreds of event workers, are ALL <Text style={{color: '#f9b36a'}}>volunteers</Text> from within the community. Jeep Beach Inc.’s structure allows the event to provide better experiences for the vendors and participants.
            </Text>

            </View>
        </View>
    );
    } else {
        return null;
    }
  }

export {AboutUsScreen};