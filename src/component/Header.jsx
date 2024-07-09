import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Header = () => {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
  return (
    <View style={styles.container}>
      
      <TouchableOpacity  style={styles.iconList}>
        <Foundation 
          name="list"
          size={35}
          color="#272727"
          
        />
      </TouchableOpacity>

      <Image source={require('../asset/CoffeeShotlogo.png') } style={styles.imgHear}/>
      <View style={{position:"relative"}} >
        <TouchableOpacity  style={styles.iconBag}>
          <SimpleLineIcons 
            name="handbag"
            size={33}
            color="#272727"
            
          />
          <View style={{
                height: 18,
                width: 17,
                borderRadius: 18,
                backgroundColor:"#4E8D7C",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 4,
                right: -1,
                }}>
            <Text style={{
              color:"#272727",
              fontWeight:"600",
              fontSize:12.5

            }}>
                0
            </Text>
          </View>
          
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#F6F2ED",
      padding:10,
      shadowColor:"#000",
      shadowRadius: 3.84,
      elevation: 10,
      alignItems:"center"
  },
  iconList:{
    marginLeft:10

  },
  imgHear:{
    alignItems:"center",
    height:47,
    width:30
  },
  iconBag:{
    marginRight:10
  }
});

export default Header;
