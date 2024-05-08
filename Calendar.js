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
                Array.from({length: lastDayOfMonth}, (_, index) => {
                    const currentDate =  Date(firstDayOfMonth);
                    currentDate.setDate(currentDate.getDate() + index);
                    const dayName = currentDate.toLocaleString('default', {
                        weekday:'short',
                    })
                    return(
                        <TouchableOpacity
                         key={index}
                         onPress={() => setSelectedDate(index)}
                        >
                        <Text>
                           {dayName}
                        </Text>
                        <Text>{index +1}</Text>
                        </TouchableOpacity>
                    )
                })
            }

          </ScrollView>
        </View>
    )
}