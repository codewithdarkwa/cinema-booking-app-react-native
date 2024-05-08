import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Ionicons } from '@expo/vector-icons';

export default CinemaDetails = () => {
    return(
      <View style={styles.cinemaDetailsContainer}>
          <View style={{flexDirection:"row"}}>
          <Ionicons name="location" size={20} color="white" />
          <Text style={{ color: 'white', marginBottom: 5,fontSize: 18, paddingLeft:5}}>SmartCinema Sky Park</Text>
          </View>
          <View style={{height: 10}}/>
          <Text style={{color: "grey", fontSize:14}}>
            Mykola Ovodova 51, Vinnitsa, Vinnitsa region,2100
          </Text>
          <View style={{height: 20}}/>
          <TouchableOpacity style={{
            width:230, 
            height:50,
            backgroundColor:"#e03b1a", 
            alignItems:"center", 
            borderRadius: 15,
            justifyContent:"center"}}>
            <Text style={{color:"white"}}>Buy Ticket $48.00</Text>
          </TouchableOpacity>
        </View>
    );
  }

  const styles = StyleSheet.create({
    cinemaDetailsContainer: {
      marginTop: 30,
      backgroundColor: '#292f30',
      borderRadius: 30,
      padding: 15,
      alignItems: 'center',
    },
  });