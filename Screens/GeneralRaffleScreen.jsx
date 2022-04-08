import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IconButton, Button} from 'react-native-paper';
import {useTheme} from '@react-navigation/native';

function GeneralRaffleScreen(route, navigation) {

    const {colors} = useTheme();

    const [isSingleLoading,
        setIsSingleLoading] = useState(false);
    const [isMultipleLoading,
        setIsMultipleLoading] = useState(false);
    const [tickets,
        setTickets] = useState([]);
    const [singleNumber,
        setSingleNumber] = useState(null);
    const [rangeNumberStart,
        setRangeNumberStart] = useState(null);
    const [rangeNumberEnd,
        setRangeNumberEnd] = useState(null);

    React.useLayoutEffect(() => {
        route
            .navigation
            .setOptions({
                headerRight: () => (<IconButton icon="refresh" size={25} color={'dodgerblue'} onPress={() => {}}/>)
            });

        let temp = [
            {
                "ID": 262,
                "rtype": "G",
                "rnum": "1111222",
                "processed": true
            }, {
                "ID": 263,
                "rtype": "G",
                "rnum": "1111223",
                "processed": true
            }, {
                "ID": 264,
                "rtype": "G",
                "rnum": "1111224",
                "processed": true
            }, {
                "ID": 265,
                "rtype": "G",
                "rnum": "1111225",
                "processed": true
            }, {
                "ID": 266,
                "rtype": "G",
                "rnum": "1111226",
                "processed": true
            }, {
                "ID": 267,
                "rtype": "G",
                "rnum": "1111227",
                "processed": true
            }, {
                "ID": 268,
                "rtype": "G",
                "rnum": "1111228",
                "processed": true
            }, {
                "ID": 269,
                "rtype": "G",
                "rnum": "1111229",
                "processed": true
            }
        ];

        setTickets(temp);

    }, [navigation]);

    const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title + " "}
            </Text>
        </View>
    );

    const renderItem = ({item}) => (<Item title={item.rnum}/>);

    const styles = StyleSheet.create({
      container: {
          flex: 1,
          alignItems: 'center',
          padding: 10,
          paddingTop: 30
      },
      rules: {
          fontSize: 30,
          textDecorationLine: 'underline',
          color: 'red'
      },
      info: {
          paddingTop: 10
      },
      ticketList: {
          backgroundColor: 'dimgray',
          width: '95%',
          padding: 10,
          height: 100
      },
      item: {},
      title: {
          fontSize: 20
      },
      textInput: {
          padding: 10,
          backgroundColor: 'grey',
          borderRadius: 10,
          margin: 10,
          width: 85
      },
      button: {
          color: 'red',
          backgroundColor: 'blue',
          borderRadius: 10,
          margin: 10,
          width: 100
      },
      label: {
          flex: .5,
          textAlign: 'center',
          alignItems: 'center',
          fontSize: 10,
          fontWeight: 'bold',
          color: colors.text
      }
  
  });

    const handleSearchSingleNumber = () => {
        let won = false;
        setIsSingleLoading(true);
        tickets.forEach(ticket => {
            if (ticket.rnum === singleNumber) {
                won = true;
                Alert.alert("CONGRATULATIONS!", "Your General ticket number " + ticket.rnum + " is a winner, please proceed to the ticket tent before 4:30PM", [
                    {
                        text: "OK",
                        onPress: () => {}
                    }
                ])
            }
        })
        if (!won) {
            Alert.alert("Sorry, no match", "Your General ticket number " + singleNumber + " is not a winner, please try again later after next scheduled drawing", [
                {
                    text: "OK",
                    onPress: () => {}
                }
            ])
        }
        setIsSingleLoading(false);

    }

    const handleSearchRange = () => {
        let won = false;
        setIsMultipleLoading(true);
        if (rangeNumberStart <= rangeNumberEnd) {
            for (let i = rangeNumberStart; i <= rangeNumberEnd; i++) {
                console.log(i);
                tickets.forEach(ticket => {
                    if (ticket.rnum == i) {
                        won = true;
                        Alert.alert("CONGRATULATIONS!", "Your General ticket number " + ticket.rnum + " is a winner, please proceed to the ticket tent before 4:30PM", [
                            {
                                text: "OK",
                                onPress: () => {}
                            }
                        ])
                    }
                })
            }
            if (!won) {
                Alert.alert("Sorry, no match for that range", "please try again later after next scheduled drawing", [
                    {
                        text: "OK",
                        onPress: () => {}
                    }
                ])
            }
        } else {
            Alert.alert("Invalid ticket range", 'starting ticket number must be smaller than ending ticket number', [
                {
                    text: "OK"
                }
            ])
        }
        setIsMultipleLoading(false);

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios"
            ? "padding"
            : "height"}
            style={styles.container}
            keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                    <Text
                    style={styles.rules}
                    onPress={() => {
                    route
                        .navigation
                        .navigate("Raffle Rules");
                }}>Official Rules</Text>
                <Text style={styles.info}>
                    Tickets sorted left to right, top to bottom.
                </Text>
                <FlatList
                    style={styles.ticketList}
                    renderItem={renderItem}
                    data={tickets}
                    keyExtractor={item => item.ID}
                    numColumns={5}></FlatList>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text
                        style={styles.label}>
                        Search for one ticket:
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.textInput}
                        value={singleNumber}
                        onChangeText={setSingleNumber}
                        returnKeyType='done'
                        placeholder="Enter ticket number"
                        maxLength={9}/>

                    <Button
                        Style={styles.button}
                        mode="contained"
                        onPress={() => handleSearchSingleNumber()}
                        loading={isSingleLoading}>
                        Search
                    </Button>
                </View>
                <View
                    style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Text style={styles.label}>
                        Search range of tickets:
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.textInput}
                        placeholder="Enter ticket number"
                        value={rangeNumberStart}
                        onChangeText={setRangeNumberStart}
                        returnKeyType='done'
                        maxLength={9}/>
                    <Text
                        style={{
                        fontSize: 10,
                        fontWeight: 'bold'
                    }}>
                        to
                    </Text>
                    <TextInput
                        keyboardType='numeric'
                        style={styles.textInput}
                        placeholder="Enter ticket number"
                        value={rangeNumberEnd}
                        onChangeText={setRangeNumberEnd}
                        returnKeyType='done'
                        maxLength={9}/>

                    <Button
                        Style={styles.button}
                        mode="contained"
                        onPress={() => handleSearchRange()}
                        loading={isMultipleLoading}>
                        Search
                    </Button>
                </View>
            </>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );


    
}



export {GeneralRaffleScreen};