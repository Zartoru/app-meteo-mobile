import React from 'react';
import { StyleSheet,Text, View, Image} from 'react-native';
import AppLoading from 'expo-app-loading';

export default function TodayWeather(data) {
        
        
        const icon = data.current.weather[0].icon;

        const day = new Date().getDay(); //Current Date
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
    
        const weekDays = ["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"];
        
        let nameDay;
        const setCurrentDate = () => {
            for (let i=0;i<=weekDays.length;i++) {
                if (i===(day-1)) {
                    nameDay = weekDays[i];
                }
            }
            return nameDay + ' ' + date + '/' + month + '/' + year
        };
        const currentDate = setCurrentDate();
        

        return(
            <View style={styles.today} >
                <Text style={styles.today__title}>{currentDate}</Text>
                <Text style={styles.today__temp}>3°C</Text>
            <Image
                style={styles.today__icon}
                // source={{uri:"http://openweathermap.org/img/wn/"+ icon +"@2x.png"}} 
                />
            </View>
        )
    
    }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    today: {
      backgroundColor: "#0892a5",
      margin: 0,
      height: 250,
      borderBottomColor: "#087c8c",
      borderBottomWidth: 3,
    },
    today__title: {
      marginTop: 50,
      color: "white",
      fontSize: 35,
    },
    today__temp: {
      color: "white",
      fontSize: 70,
    },
    today__icon: {
      position: "absolute",
      height: 100,
      width: 200,
      right: 0,
      top: 90,
    },
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
  });
  