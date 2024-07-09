import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox'; 

const SignInScreen = ({navigation}) => {
  const [isSelected, setSelection] = useState(false);
  const handleLogin =()=>{
    navigation.navigate('HOME')
  }
  

  return (
    <View style={styles.container}>
      <Image source={require("../asset/CoffeeShotlogo.png")} style={styles.imageLY} />
      <View style={styles.ContainerForm}>
        <Text style={styles.TextSignUp}>Sign In</Text>
        <Text style={styles.TextSologan}>It’s coffee time! Login and lets get all the coffee in the world! Or at least iced coffee. </Text>
        <View style={styles.UserInput}>
          <Text style={styles.TextUser}>Email</Text>
          <TextInput
            style={styles.inputUser}
            placeholder='Enter Email'
            required
          />
          <Text style={styles.TextUser}>Password</Text>
          <TextInput
            style={styles.inputUser}
            placeholder='Enter password'
            required
            secureTextEntry
          />
        </View>
        <View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.Remember}>Remember me</Text>
          </View>
          <TouchableOpacity
          onPress={handleLogin}
          style={styles.Button}
          >
             
              <Text style={{ color: "white" }}>SIGN IN</Text>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#f8f3e9",
  },
  imageLY: {
    width: 56.77,
    height: 89.45,
    marginVertical: 20,
  },
  ContainerForm: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  TextSignUp: {
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 28,
    color: "#4B2C20",
    marginBottom: 10,
  },
  TextSologan: {
    fontSize: 14,
    color: "#4B2C20",
    fontWeight: "400",
    width: 291,
    fontFamily: "Poppins",
    textAlign: "left",
    marginBottom: 20,
  },
  UserInput: {
    marginVertical: 10,
  },
  TextUser: {
    fontFamily: "Poppins",
    color: "#4E8D7C",
    marginBottom: 5,
  },
  inputUser: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#DEE5E6",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  Button: {
    backgroundColor: "#4B2C20",
    height: 50,
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  Remember: {
    textAlign: "center",
    marginTop: 10,
    alignItems:"center",
    marginBottom:10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
  },
});

export default SignInScreen;
