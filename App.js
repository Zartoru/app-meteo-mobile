import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import axios from 'axios';

export default function App() {

  const [icon, setIcon] = useState('01d');
  const [currentDate, setCurrentDate] = useState('');
  const [temperature, setTemperature] = useState('0')

  useEffect(() => {
    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    
    setCurrentDate(
      date + '/' + month + '/' + year
    )
  });

  return (
    <SafeAreaView>
      <View style={styles.today} >
        <Text style={styles.today__title}>{currentDate}</Text>
        <Image
          style={styles.today__icon}
          source={require(
            `./images/${icon}.png`
          )} 
          />
      </View>
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
    backgroundColor: "blue",
    margin: 0,
    height: 250,
  },
  today__title: {
    marginTop: 50,
    color: "white",
  },
  today__icon: {
    height: 100,
    width: 200,
    marginRight: 50,
    marginLeft: "auto",
  }
});
