import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RowText = (props) => {

    const { 
        messageOne, 
        messageTwo, 
        containerStyles, 
        messageOneStyles, 
        messageTwoStyles 
    
    } = props

    return (
        <View style={containerStyles} >
          <Text Styles={messageOneStyles} > {messageOne}</Text>
          <Text Styles={messageTwoStyles} >{messageTwo}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    
})

export default RowText