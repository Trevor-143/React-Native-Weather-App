import React from "react"
import CurrentWeather from "../screens/CurrentWeather"
import UpcomingWeather from "../screens/UpcomingWeather"
import City from "../screens/City"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from "@expo/vector-icons"
import { useGetWeather } from "../hooks/useGetWeather";

const Tab = createBottomTabNavigator()


export default function Tabs() {
  
  const [ loading, error, weather ] = useGetWeather()
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#00008B",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 15,
          height: 70,
          margin: 10,
          borderRadius: 20
        },
        headerStyle: {
          backgroundColor: "#fff"
        },
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: "#00008B",
          alignSelf: 'center',
          // backgroundColor: '#000',
          marginHorizontal: 'auto',
          textAlign: 'center',
        }
      }}
    >
      <Tab.Screen
        name={"Current weather"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={focused ? 30 : 17}
              color={focused ? "#00008B" : "grey"}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming weather"}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={focused ? 30 : 17}
              color={focused ? "#00008B" : "grey"}
            />
          )
        }}
      />
      <Tab.Screen
        name={"City weather"}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={focused ? 30 : 17}
              color={focused ? "#00008B" : "grey"}
            />
          )
        }}
      />

      {/* <CurrentWeather /> */}
      {/* <UpcomingWeather /> */}
      {/* <City /> */}
    </Tab.Navigator>
  )
}
