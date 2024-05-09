import React, {useState} from 'react'
import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import Calendar from './Calendar'
import TimeSlot from './TimeSlot'
import { Path, Svg } from 'react-native-svg'
import { MaterialIcons } from '@expo/vector-icons'
import CinemaDetails from './CinemaDetails'
export default BookingPage = () =>{

    const [now, setNow] = useState(new Date());
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date(now.getFullYear(),now.getMonth(), 1));
    const [lastDayOfMonth, setLastDayOfMonth] = useState(new Date(now.getFullYear(),now.getMonth() +1, 0));

    const [selectedDate, setSelectedDate] = useState(now.getDate()-1);

    const getRandomColor = (colors) =>{
        const randomColor = Math.floor(Math.random() * colors.length)
        return  colors[randomColor];
    }
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#181f21"}}>
            <ScrollView
              contentContainerStyle={{
                flexGrow:1,
                backgroundColor:"#181f21",
                padding:20
              }}
            >
                {/* Calendar View */}
                <Calendar 
                lastDayOfMonth = {lastDayOfMonth}
                firstDayOfMonth ={firstDayOfMonth}
                selectedDate = {selectedDate}
                setSelectedDate = {setSelectedDate}
                />
                {/* Time Slots */}
                <TimeSlot />

                {/* Curve Line */}
                <CurvedLine />

                {/* Seats */}
                <View style={{flexDirection:"row", flexWrap: "wrap", justifyContent:"center"}}>
                    {
                        Array.from({length:70}, (_, index)=> (
                            <MaterialIcons 
                            key ={index}
                            name ="chair"
                            size={20}
                            style={{
                                width:20,
                                height:20,
                                margin:5,
                                color: getRandomColor(['#2a2f30', '#ffffff', '#e03b1a'])
                            }}
                            />
                        ))
                    }
                </View>
               
                {/* Legend */}

                <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:80}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={{width:10, height:10, borderRadius:5, marginRight:5,backgroundColor:"white"}}/>
                        <Text style={{color:"white"}}>Available</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={{width:10, height:10, borderRadius:5, marginRight:5,backgroundColor:"grey"}}/>
                        <Text style={{color:"grey"}}>Taken</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <View style={{width:10, height:10, borderRadius:5, marginRight:5,backgroundColor:"#e03b1a"}}/>
                        <Text style={{color:"#e03b1a"}}>Selected</Text>
                    </View>
                </View>
                    
                {/* Cinema Details */}
                <CinemaDetails/>
                
            </ScrollView>
        </SafeAreaView>
    )
}

const CurvedLine = () =>{
    return(
        <View style={{flex:3.5}}>
          <Svg height="100%" width="100%">
            <Path 
              d="M10 95 Q 200 10 400 100"
              stroke="#e03b1a"
              strokeWidth="2"
              fill="none"
            />
          </Svg>
        </View>
    )
}