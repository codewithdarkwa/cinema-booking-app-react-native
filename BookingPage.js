import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import CalendarView from './Calendar';
import TimeSlot from './TimeSlot';
import CinemaDetails from './CinemaDetails';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';


export default BookingPage = () => {
    const [now, setNow] = useState(new Date());
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(
      new Date(now.getFullYear(), now.getMonth(), 1)
    );
    const [lastDayOfMonth, setLastDayOfMonth] = useState(
      new Date(now.getFullYear(), now.getMonth() + 1, 0)
    );
    const [selectedIndex, setSelectedIndex] = useState(now.getDate() - 1);
  
    const getRandomColor = (colors) => {
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    };
  
    return (
      <SafeAreaView style={{flex:1}} backgroundColor="#181f21">
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
  
        {/* Calendar View */}
        <CalendarView 
        lastDayOfMonth ={lastDayOfMonth} 
        firstDayOfMonth={firstDayOfMonth} 
        selectedIndex={selectedIndex}
        setSelectedIndex = {setSelectedIndex}
        />
         {/* Time slots */}
        <TimeSlot />
  
         {/* Curve line */}
        <CurvedLine />
  
        {/* Seats */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'center',}}>
          {Array.from({ length: 70 }, (_, index) => (
            <MaterialIcons
              key={index}
              name='chair'
              size={20}
              style={[
                styles.chairIcon,
                { 
                color: getRandomColor(['#2a2f30', '#ffffff', '#e03b1a']),  
                width: 20,
                height: 20,
                borderRadius: 10,
                margin: 5, 
              },
              ]}
            />
          ))}
        </View>
  
        {/* Legend */}
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 80,}}>
          <View style={{ flexDirection: 'row', alignItems: 'center',}}>
            <View style={[styles.legendColor, { backgroundColor: '#ffffff' }]} />
            <Text style={{color:"white"}}>Available</Text>
          </View>
          <View style={{ flexDirection: 'row',alignItems: 'center',}}>
            <View style={[styles.legendColor, { backgroundColor: '#808080' }]} />
            <Text style={{color:"grey"}}>Taken</Text>
          </View>
          <View style={{ flexDirection: 'row',alignItems: 'center',}}>
            <View style={[styles.legendColor, { backgroundColor: '#e03b1a' }]} />
            <Text style={{ color: '#e03b1a' }}>Selected</Text>
          </View>
        </View>
  
        {/* Cinema Details */}
        <CinemaDetails />
      </ScrollView>
      </SafeAreaView>
      
    );
  };

  const CurvedLine = () => {
    return (
      <View style={{ flex: 3.5,}}>
        <Svg height="100%" width="100%">
          <Path
             d="M10 95 Q 200 10 400 100"
            stroke="#e03b1a"
            strokeWidth="2"
            fill="none"
          />
        </Svg>
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#181f21',
      padding: 20,
    },
    legendColor: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 5,
    },
  });