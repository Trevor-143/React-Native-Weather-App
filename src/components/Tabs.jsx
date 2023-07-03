import React from "react";
import CurrentWeather from "../src/screens/CurrentWeather"
import UpcomingWeather from "../src/screens/UpcomingWeather";
import City from "../src/screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

export default function Tabs () {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#00008B',
            tabBarInactiveTintColor: 'grey',
            tabBarStyle: {
                backgroundColor: 'lightblue'
            },
            headerStyle: {
                backgroundColor: 'lightblue'
            },
            headerTitleStyle: {
                fontSize: 30,
                color: '#00008B'
            }
            
          }} >
    
              <Tab.Screen 
                name={'Current'} 
                component={CurrentWeather} 
                options={{
                  tabBarIcon: ({ focused }) => ( 
                    <Feather 
                      name="droplet" 
                      size={ focused ? 30 : 17} 
                      color={ focused ? '#00008B' : 'grey' } 
                    /> 
                  )
                }} 
              />
              <Tab.Screen 
                name={'Upcoming'} 
                component={UpcomingWeather} 
                options={{
                  tabBarIcon: ({ focused }) => ( <Feather name="clock" size={ focused ? 30 : 17} color={ focused ? '#00008B' : 'grey' } /> )
                }}
              />
              <Tab.Screen 
                name={'City'} 
                component={City} 
                options={{ 
                  tabBarIcon: ({ focused }) => ( <Feather name="home" size={ focused ? 30 : 17} color={ focused ? '#00008B' : 'grey' } /> )
                }}
              />
    
              {/* <CurrentWeather /> */}
              {/* <UpcomingWeather /> */}
              {/* <City /> */}
    
          </Tab.Navigator>
    )
}