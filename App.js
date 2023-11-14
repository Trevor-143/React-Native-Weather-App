import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
// import Counter from "./src/demo/Counter";
import { ActivityIndicator } from "react-native";
import { View, StyleSheet } from "react-native";
import * as Location from 'expo-location'
// import { TEST_KEY } from '@env'

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export default function App() {

  const [ loading, setLoading ] = useState(true)
  // const [ location, setLocation ] = useState(null)
  const [ error, setError ] = useState(null)
  const [ weather, setWeather ] = useState([])
  // console.log('abe0f4771150d1e0d12555ea1b472b60')
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lat}&appid=${abe0f4771150d1e0d12555ea1b472b60}`)
      const data = await res.json()
      setWeather(data)
    } catch (error) {
      setError('could not fetch weather')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      // setLocation(location)
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)

      await fetchWeatherData()
    })()
  }, [lat, lon])

  if(weather) {
    console.log(weather)
  }

  if(loading) {
    return (
      <View style={styles.container} >
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }

  return(
    <NavigationContainer>
      {/* <Counter /> */}
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})