import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import axios from 'axios';
import OthersDays from './component/OtherDays';
import AppLoading from 'expo-app-loading';
// import TodayWeather from './component/TodayWeather';

export default function App() {

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=366acd9aec84f0e592363ae4d36bfed1')
    .then(res => {
      setWeather(res.data)
      })
  }, [])

  if (weather.current){
    const todayWeather = weather.current;
    const icon = weather.current.weather[0].icon;

    return (
      <SafeAreaView>
        {/* <TodayWeather data={weather} /> */}
        <View style={styles.today} >
            <Text style={styles.today__title}>date</Text>
            <Text style={styles.today__temp}>3°C</Text>
          <Image
            style={styles.today__icon}
            source={{uri:"http://openweathermap.org/img/wn/"+ icon +"@2x.png"}} 
            />
        </View>
        <View style={styles.nextDays}>
            <Image
                style={styles.odays__icon}
                source={{uri:"http://openweathermap.org/img/wn/10d@2x.png"}} 
            />
            <Text style={styles.odays__date}>Demain</Text>
            <Text style={styles.odays__temp}>{weather.daily[1].temp.day}°</Text>
        </View>
      </SafeAreaView>
    );
  } else {
    return <AppLoading />
  }
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
