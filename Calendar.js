import { View, Text, ScrollView, TouchableOpacity } from "react-native"

export default CalendarView = ({lastDayOfMonth, firstDayOfMonth, selectedDate, setSelectedDate}) => {
    return (
        <View>
          <ScrollView
          horizontal
          showsHorizontalScrollIndicator = {false}
          contentContainerStyle = {{paddingRight: 10}}
          >
            {
                Array.from({length: lastDayOfMonth.getDate()}, (_, index) => {
                    const currentDate = new Date(firstDayOfMonth);
                    currentDate.setDate(currentDate.getDate() + index);
                    const dayName = currentDate.toLocaleString('default', {
                        weekday:'short',
                    })
                    return(
                        <TouchableOpacity
                         key={index}
                         onPress={() => setSelectedDate(index)}
                         style={{
                          width:57,
                          height:70,
                          backgroundColor: selectedDate === index ? "#e03b1a" :"#2a2f30",
                          borderRadius: 18,
                          alignItems: 'center',
                          justifyContent: 'space-evenly',
                          marginHorizontal:4
                         }}
                        >
                        <Text style={{fontSize:14, color:"white", fontWeight:600}}>{dayName}</Text>
                        <Text style={{fontSize:16, color:"white", fontWeight:500}}>{index +1}</Text>
                        </TouchableOpacity>
                    )
                })
            }

          </ScrollView>
        </View>
    )
}