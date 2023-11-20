import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
// import Counter from "./src/demo/Counter";
import { ActivityIndicator } from "react-native";
import { View, StyleSheet } from "react-native";
// import { TEST_KEY } from '@env'
import { useGetWeather } from "./src/hooks/useGetWeather";

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export default function App() {

  const [ loading, error, weather ] = useGetWeather()

  console.log(loading, error, weather)

  if(weather && weather.list) {
    return(
      <NavigationContainer>
        {/* <Counter /> */}
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.container} >
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )

  // return(
  //   <NavigationContainer>
  //     {/* <Counter /> */}
  //     <Tabs weather={weather} />
  //   </NavigationContainer>
  // )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})