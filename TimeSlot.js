import { ScrollView, TouchableOpacity, Text,StyleSheet } from "react-native";

export default TimeSlot = () => {
    return (
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 25}}
        >
          {Array.from({ length: 4 }, (_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.timeSlot,
                {
                  backgroundColor: index === 2 ? '#e03b1a' : '#2a2f30',
                },
              ]}
            >
              <Text style={{color: "white"}}>10:30 AM</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
    );
  }
  const styles = StyleSheet.create({
    timeSlot: {
      width: 100,
      height: 25,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2a2f30',
      borderRadius: 15,
      marginHorizontal: 4,
    },
  });