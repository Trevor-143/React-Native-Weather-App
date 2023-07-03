import React from 'react'
import {
    Text,
    View, 
    StyleSheet
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const ListItem = (props) => {
    const { dt_txt, max, min, condition } = props
    const { item, minMax, temp } = Styles

    return (
        <View style={item} >
            <FontAwesome name="sun-o" size={50} color="white" />
            <Text style={Styles.dateText} > {dt_txt} </Text>
            <View style={minMax} >
                <Text style={temp} > High: {max} </Text>
                <Text style={temp} > Low: {min} </Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    item: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        margin: 10,
        borderRadius: 10,
    },
    dateText: {
        color: 'white'
    },
    minMax: {
        backgroundColor: '#00008B',
        padding: 10,
        borderRadius: 7,
    },
    temp: {
        color: 'white',
    },
})

export default ListItem