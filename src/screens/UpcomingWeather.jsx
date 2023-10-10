import React from 'react'
import { 
    StyleSheet, 
    SafeAreaView, 
    Text, 
    FlatList, 
    View, 
    StatusBar, 
    ImageBackground 
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import ListItem from '../components/ListItem';


const DATA = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 9.55,
            temp_min: 8.55
        },
        weather: [
            {
                main: 'sunny'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 17:00:00",
        main: {
            temp_max: 7.55,
            temp_min: 6.55
        },
        weather: [
            {
                main: 'clear'
            }
        ]
    }
]



const Empty = () => {
    <View>
        <Text>No weather Recived</Text>
    </View>
}

function UpcomingWeather() {
    const renderItem = ({item}) => (
        <ListItem 
            condition={item.weather[0].main} 
            dt_txt={item.dt_txt}
            max={item.main.temp_max}
            min={item.main.temp_min}  
        />
    )
    const { container, image } = Styles
  return (
    <SafeAreaView style={container} >
        <ImageBackground
            source={require("../../assets/city.jpg")} style={image}
        >
            <Text>Upcoming Weather</Text>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
                ListEmptyComponent={ <Empty /> }
            />
        </ImageBackground>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    
    image: {
        flex: 1,
    }
})

export default UpcomingWeather