import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import IconText from "../components/IconText";

const City = () => {

    const { 
        container, 
        imageLayout, 
        city, 
        cityText, 
        populationWrapper, 
        populationText, 
        riseset,
        countryName
    } = Styles

    return (
        <SafeAreaView style={container} >
            <ImageBackground
                source={require('../../assets/city.jpg')}
                style={imageLayout}
            >
                <Text style={[city, cityText]} >London</Text>
                <Text style={[countryName, cityText]} >United Kingdom</Text>
                <View style={populationWrapper} >
                    <Ionicons name="people" size={24} color="white" />
                    <Text style={populationText} >8,000</Text>
                </View>
                <View style={riseset} >
                    <IconText iconName={'sunrise'} iconSize={60} iconColor={'white'} timeText={'10:33:50'} />
                    <IconText iconName={'sunset'} iconSize={60} iconColor={'white'} timeText={'16:33:50'} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
        // marginTop: StatusBar.currentHeight || 0,
    },
    imageLayout: {
        flex: 1,
    },
    city: {
        fontSize: 40,
        marginTop: 20,
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#00008B',
        margin: 40,
        padding: 30,
        borderRadius: 30,
    },
    populationText: {
        fontSize: 40,
        color: 'white',
    },
    riseset: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: "row",
        paddingHorizontal: 80,
        paddingVertical: 10
    },
    
})

export default City