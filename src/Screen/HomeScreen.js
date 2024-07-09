import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../component/Header'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Header/>
      <View style={styles.heaContainer}>
        <View>
          <Text style={styles.textGood}>Good Morning!</Text>
          <Text style={styles.textsologan}>Lets get this Coffee ☕️ </Text>
        </View>
        <Image source={require('../asset/avatar.png')} />
      </View>
      <View>
        <View style={styles.bonusContainer}>
          <Text style={styles.textBonus}>BONUS REWARDS</Text>
          <Text style={styles.textContentBonus}>Coffee Delivered to your house</Text>
        </View>
      </View> 
        
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#F6F2ED",
  },
  textGood:{
    fontWeight:"900",
    fontSize:24,
    color:"#272727",
    fontFamily:"Poppins",
    width:300,
    height:40,
  },
  heaContainer:{
    flexDirection:"row",
    padding:15,
  },
  textsologan:{
    fontWeight:"100",
    fontSize:20,
    color:"#272727",
    fontFamily:"Poppins",
  },
  bonusContainer:{
    backgroundColor:"#4E8D7C",
    padding:10,
  },
  textBonus:{
    color:"white",
    fontFamily:"Poppins",
    fontWeight:"500",
    fontSize:10,
    lineHeight:24,
  },
  textContentBonus:{
    color:"white",
    fontFamily:"Poppins",
    fontWeight:"700",
    fontSize:16,
    lineHeight:24,

  }



})
export default HomeScreen
