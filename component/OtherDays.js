import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const OthersDays = ({day}) => {

    return(
        <View style={styles.nextDays}>
            <Image
                style={styles.odays__icon}
                source={{uri:"http://openweathermap.org/img/wn/10d@2x.png"}} 
            />
            <Text style={styles.odays__date}>La date dans {day} jour(s) lol</Text>
            <Text style={styles.odays__temp}>Et la temperature aussi</Text>
        </View>
    )
}

export default OthersDays

const styles = StyleSheet.create({
    nextDays: {
        borderBottomColor: "grey",
        borderBottomWidth: 3,
        height: 100,
        backgroundColor: "#bccbcd",
    },
    odays__icon: {
        height: 100,
        width: 100,
    },
    odays__date: {
        fontSize: 20,
        position: 'absolute',
        top: 20,
        right: 60,
    },
    odays__temp: {
        fontSize: 15,
        position: 'absolute',
        top: 50,
        right: 60,
    }
})