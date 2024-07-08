import React from 'react';
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../asset/CoffeeShotlogo.png")} style={styles.imageLY} />
            <View style={styles.ContainerForm}>
                <Text style={styles.TextSignUp}>Sign Up</Text>
                <Text style={styles.TextSologan}>We are so excited you’re ready to become apart of our coffee network! don’t forget  check out your perks!</Text>
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
                    <TouchableOpacity>
                        <View style={styles.Button}>
                            <Text style={{ color: "white" }} >REGISTER</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.Already}>Already have an account?</Text>
                    <TouchableOpacity>

                        <View style={styles.Button}>
                            <Text style={{ color: "white" }}>SIGN IN</Text>
                        </View>

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
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
    marginRight: 10,
  },
  Already:{
    alignSelf:"center",
    justifyContent:"center",
    marginTop:20
  }

});

export default RegisterScreen;
