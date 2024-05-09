import { Ionicons } from "@expo/vector-icons"
import { View, Text, TouchableOpacity } from "react-native"

export default CinemaDetails = () =>{
    return(
        <View style={{
            marginTop:30,
            backgroundColor: '#292f30',
            borderRadius:30,
            padding:15, 
            alignItems: 'center'
        }}>
           
           <View style={{flexDirection:"row"}}>
            <Ionicons name="location" size={20} color="white"/>
            <Text style={{color:"white", fontSize:18,marginBottom:5,paddingLeft:5}}>SmartCinema Sky Park</Text>
           </View>
           <View  style={{height:10}}/>
           <Text style={{color:"grey", fontSize:14}}>Mykola Ovodova 51, Vinnitsa, Vinnitsa region,2100</Text>
           <View  style={{height:20}}/>
            <TouchableOpacity
            style={{
                width:230,
                height:50,
                backgroundColor:"#e03b1a",
                borderRadius:15,
                justifyContent:"center",
                alignItems:"center"
            }}
            >
                <Text style={{color:"white"}}>Buy Ticket $48.00</Text>
            </TouchableOpacity>
        </View>
    )
}