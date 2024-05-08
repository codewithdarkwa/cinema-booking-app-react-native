import React, {useState} from 'react'
import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import Calendar from './Calendar'

export default BookingPage = () =>{

    const [now, setNow] = useState(new Date());
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(Date(now.getFullYear(),now.getMonth(), 1));
    const [lastDayOfMonth, setLastDayOfMonth] = useState(Date(now.getFullYear(),now.getMonth() + 1, 0));

    const [selectedDate, setSelectedDate] = useState(now.getDate()-1);
    return (
        <SafeAreaView style={{flex:1, backgroundColor:"#181f21"}}>
            <ScrollView>
                {/* Calendar View */}
                <Calendar 
                lastDayOfMonth = {lastDayOfMonth}
                firstDayOfMonth ={firstDayOfMonth}
                selectedDate = {selectedDate}
                setSelectedDate = {setSelectedDate}
                />
                {/* Tine Slots */}

                {/* Curve Line */}

                {/* Seats */}

                {/* Legend */}

                {/* Cinema Details */}
            </ScrollView>
        </SafeAreaView>
    )
}