import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
// import Counter from "./src/demo/Counter";
import { ActivityIndicator } from "react-native";
import { View, StyleSheet } from "react-native";
import * as Location from 'expo-location'

export default function App() {

  const [ loading, setLoading ] = useState(true)
  const [ location, setLocation ] = useState(null)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if(status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if(location) {
    console.log(location)
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