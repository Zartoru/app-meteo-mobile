import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import axios from 'axios';
import OthersDays from './component/OtherDays';

export default function App() {

  const [data, setData] = useState({})
  let icon = '01d';
  const [currentTemperature, setCurrentTemperature] = useState('0');
  const [temperature, setTemperature] = useState('0');

  let day = new Date().getDay(); //Current Date
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1; //Current Month
  const year = new Date().getFullYear(); //Current Year
  
  const weekDays = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

  // useEffect(() => {
  //   axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.42893&lon=2.83183&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=a1e148cda7957678e869b460c31c1d0d')
  //   .then(res => {
  //     setData(res.data)
  //     })
  // })

  // let todayIcon

  // if(Object.keys(data).length === 0){
  //   todayIcon=""
  // } else {
  // todayIcon = data.current.weather[0].icon
  // }

  
  let nameDay;
  for (let i=0;i<=weekDays.length;i++) {
    if (i===(day-1)) {
      nameDay = weekDays[i];
    }
  }

  const setCurrentDate = () => {
    return nameDay + ' ' + date + '/' + month + '/' + year
  };
  const currentDate = setCurrentDate();


  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.today} >
          <Text style={styles.today__title}>{currentDate}</Text>
          <Text style={styles.today__temp}>{currentTemperature}°C</Text>
          <Image
            style={styles.today__icon}
            source={{uri:"http://openweathermap.org/img/wn/"+ icon +"@2x.png"}} 
            />
        </View>
        <OthersDays day={1} />
        <OthersDays day={2} />
        <OthersDays day={3} />
        <OthersDays day={4} />
        <OthersDays day={5} />
        <OthersDays day={6} />
      </ScrollView>
    </SafeAreaView>
  );
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
});
