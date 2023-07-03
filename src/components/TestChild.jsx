import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TextChild = (props) => {
    const { message } = props
    return (
        <View style={Styles.contain} >
            <Text> {message} </Text>
        </View>
    )
} 

const Styles = StyleSheet.create({
    contain: {
        backgroundColor: 'blue',
        margin: 10,
    }
})

export default TextChild