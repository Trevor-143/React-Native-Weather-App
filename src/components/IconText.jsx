import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const { iconName, iconSize, iconColor, timeText } = props
    return (
        <View style={Styles.riseset} >
            <Feather name={iconName} size={iconSize} color={iconColor} />
            <Text style={Styles.risesetText} >{timeText}</Text>
            {/* <Feather name="sunrise" size={60} color="white" /> */}
            {/* <Text style={Styles.risesetText} >10:33:50</Text> */}
            {/* <Feather name="sunset" size={60} color="white" /> */}
            {/* <Text style={Styles.risesetText} >16:33:50</Text> */}
        </View>
    )
}

const Styles = StyleSheet.create({
    riseset: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    risesetText: {
        marginBottom: 30,
        color: 'white',
        fontSize: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 10,
    }
})

export default IconText