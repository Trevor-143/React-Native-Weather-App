import React, { useState, useEffect } from "react";
import * as Location from 'expo-location'

export const useGetWeather = () => {
    const [ loading, setLoading ] = useState(true)
    // const [ location, setLocation ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ weather, setWeather ] = useState([])
    // console.log('abe0f4771150d1e0d12555ea1b472b60')
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lat}&appid=abe0f4771150d1e0d12555ea1b472b60`)
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

  return [
    loading, error, weather
  ]
}