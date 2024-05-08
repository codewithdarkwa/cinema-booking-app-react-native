import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
  } from 'react-native';
export default  CalendarView = ({lastDayOfMonth, firstDayOfMonth, selectedIndex, setSelectedIndex}) => {
    return (
      <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 10}}
      >
        { Array.from({ length: lastDayOfMonth.getDate() }, (_, index) => {
          const currentDate = new Date(firstDayOfMonth);
          currentDate.setDate(currentDate.getDate() + index);
          const dayName = currentDate.toLocaleString('default', {
            weekday: 'short',
          });
          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayContainer,
                {
                  backgroundColor:
                    selectedIndex === index
                      ? '#e03b1a'
                      : '#2a2f30',
                },
              ]}
              onPress={() => setSelectedIndex(index)}
            >
              <View style={styles.dayIcon} />
              <Text style={{fontSize: 14,color: 'white',fontWeight: '600',}}>{dayName}</Text>
              <Text style={{fontSize: 16,fontWeight: '500',color: 'white',}}>{index + 1}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
    );
  }

  const styles = StyleSheet.create({
    dayContainer: {
        width: 57,
        height: 70,
        backgroundColor: '#2a2f30',
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 4,
      },
      dayIcon: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: 'black',
      },
  });