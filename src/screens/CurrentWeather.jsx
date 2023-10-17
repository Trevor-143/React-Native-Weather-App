import react from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import RowText from "../components/RowText";

export default function CurrentWeather () {
  const { 
    wrapper,
    container,
    temp,
    feels,
    highLow,
    descWrapper 
  } = Styles
  
  
  return (
    <SafeAreaView style={wrapper} >
      <View style={ container } >
        <FontAwesome name="sun-o" size={100} color="black" />
        <Text style={temp} >6</Text>
        <Text style={feels} >Feels like 6</Text>
        <RowText 
        messageOne={'High: 8'} 
        messageTwo={'Low: 6'} 
        containerStyles={highLow} 
        messageOneStyles={highLow}
        messageTwoStyles={highLow}
        />
        {/* <View style={highLow} >
          <Text>High: 8</Text>
          <Text>Low: 5</Text>
        </View> */}
      </View>
      <RowText 
        messageOne={'Its sunny'} 
        messageTwo={'Perfect T-Shirt weather.'} 
        containerStyles={descWrapper} 
        messageOneStyles={highLow}
        messageTwoStyles={highLow}
      />
      {/* <View style={descWrapper} >
        <Text>Its Sunny</Text>
        <Text>Its perfect T-shirt weather</Text>
      </View> */}
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 70,
  },
  feels: {
    fontSize: 20,
    backgroundColor: '#00008B',
    color: 'white',
    fontWeight: 800,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  highLow: {
    flexDirection: 'column',
    marginTop: 30,
  },
  descWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  }
})