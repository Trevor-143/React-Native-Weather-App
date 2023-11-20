import react from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

export default function CurrentWeather ({ weatherData }) {
  const { 
    wrapper,
    container,
    tempStyles,
    feels,
    highLow,
    descWrapper 
  } = Styles
  
  // console.log(weatherData)
  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
  const weatherCondition = weather[0].main
  
  return (
    <SafeAreaView style={[wrapper, {backgroundColor: weatherType[weatherCondition].backgroundColor} ]} >
      <View style={ container } >
        <FontAwesome name="sun-o" size={100} color="black" />
        <Text style={tempStyles} >6</Text>
        <Text style={feels} >Feels like 6</Text>
        <RowText 
        messageOne={'High: 8'} 
        messageTwo={'Low: 6'} 
        containerStyles={highLow} 
        messageOneStyles={highLow}
        messageTwoStyles={highLow}
        />
      </View>
      <RowText 
        messageOne={'Its sunny'} 
        messageTwo={weatherType['Thunderstom'].message} 
        containerStyles={descWrapper} 
        messageOneStyles={highLow}
        messageTwoStyles={highLow}
      />
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
  tempStyles: {
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