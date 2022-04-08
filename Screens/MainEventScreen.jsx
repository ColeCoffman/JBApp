
import {View, ScrollView, Text, Pressable, ActivityIndicator, Button, StyleSheet, Modal, TouchableOpacity, Dimensions} from 'react-native';
import EventCalendar from 'react-native-events-calendar'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';

let { width } = Dimensions.get('window')

function MainEventScreen({navigation}) {
    const [isLoading, setIsLoading] = React.useState(true);
    const [events, setEvents] = React.useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
  
    refreshEvents.bind(this);
  
    function refreshEvents(){
      fetch('https://sk8server.me/api/events/read.php',{
        method: 'GET',
        headers: ({
          'Accept': 'application/json',
        })
      }).then((response) => response.json())
      .then((responseJson) => {
        setEvents(responseJson['data']);
        setIsLoading(false);
        // console.log(responseJson['data']);
      }).catch((error) => {
        console.error(error);
      });
    }
  
    MainEventScreen.refreshEvents = refreshEvents;
  
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button onPress={refreshEvents} title="Refresh" />
        ),
      });
    }, [navigation]);
  
    useEffect(() => {
      refreshEvents();
      if(events != null){
        setSelectedEvent(events[0]);
      }
    }, [JSON.stringify(events)])
  
    function handleEventPress(event){
      console.log(event);
      setSelectedEvent(event);
      setModalVisible(true);
    }
  
  
    if(!isLoading){
    return (
      <>
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <Pressable style={styles.outsideModal}
            onPress={(event) => { if (event.target == event.currentTarget) { 
              setModalVisible(false); } }} >
            <View style={styles.modal}>
              <View style={styles.modalHeader}>
                <View style={styles.modalHeaderContent}>
                   <Text style={{fontSize: 20}}>{selectedEvent['title']}</Text></View>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Icon name='close' size={30} color='black' />
                </TouchableOpacity>
              </View>
              <ScrollView style={styles.modalContent}>
                  {selectedEvent['Time'] != null &&
                  <Text style={styles.label}> Time: 
                    <Text style={{fontWeight: 'normal'}}> {selectedEvent['Time']}</Text>
                  </Text>
                  }
                  {selectedEvent['Location'] != null &&
                  <Text style={styles.label}> Location: 
                    <Text style={{fontWeight: 'normal'}}> {selectedEvent['Location']}</Text>
                  </Text>
                  }
                  {selectedEvent['Sponsored By'] != null && 
                    <Text style={styles.label}> Sponsored By: 
                    <Text style={{fontWeight: 'normal'}}> {selectedEvent['Sponsored By']}</Text>
                  </Text>
                  }
                  {selectedEvent['Powered By'] != null && 
                    <Text style={styles.label}> Powered By: 
                    <Text style={{fontWeight: 'normal'}}> {selectedEvent['Powered By']}</Text>
                  </Text>
                  }
                  {selectedEvent['description'] != null && 
                    <Text style={styles.label}> Description: 
                    <Text style={{fontWeight: 'normal'}}> {selectedEvent['description']}</Text>
                  </Text>
                  }
                  {selectedEvent['Register'] != null && 
                    <Text style={styles.label}> Register: 
                    <Text style={{fontWeight: 'normal'}}> {selectedEvent['Register']}</Text>
                  </Text>
                  }

              </ScrollView>
            </View>
          </Pressable>
        </Modal>
      <EventCalendar
        eventTapped={(event) => handleEventPress(event)}
        events={events}
        width={width}
        initDate={'2022-04-24'}
      />
      </>
      
    );
    } else {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#01a8cf" />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      flex: 1,
      margin: 50,
      padding: 5,
      backgroundColor: "white",
      shadowColor: "black",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    /* The content of the modal takes all the vertical space not used by the header. */
    modalContent: {
      flex: 1,
      padding: 10,
    },
    modalHeader: {
      flexDirection: "row",
    },
    /* The header takes up all the vertical space not used by the close button. */
    modalHeaderContent: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalHeaderCloseText: {
      textAlign: "center",
      paddingLeft: 5,
      paddingRight: 5
    },
    outsideModal: {
      backgroundColor: "rgba(1, 1, 1, 0.2)",
      flex: 1,
    },
    label: {
      fontWeight: "bold",
    }
  });

export {MainEventScreen};