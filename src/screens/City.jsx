import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import IconText from "../components/IconText";

const City = () => {
    return (
        <SafeAreaView style={Styles.container} >
            <ImageBackground
                source={require('../../assets/city.jpg')}
                style={Styles.imageLayout}
            >
                <Text style={[Styles.city, Styles.cityText]} >London</Text>
                <Text style={[Styles.countryName, Styles.cityText]} >United Kingdom</Text>
                <View style={Styles.populationWrapper} >
                    <Ionicons name="people" size={24} color="white" />
                    <Text style={Styles.populationText} >8,000</Text>
                </View>
                <View style={Styles.riseset} >
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