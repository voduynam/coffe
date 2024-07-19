// import React, { useState } from 'react';
// import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../redux/RegisterSlice';
// import { useNavigation } from '@react-navigation/native';

// const RegisterScreen = () => {
//   const navigation = useNavigation();
//   const dispatch = useDispatch();
//   const [Email, setEmail] = useState('');
//   const [Password, setPassword] = useState('');

//   const handleSignup = () => {
//     navigation.navigate('SIGNIN');
//   };

//   const handleRegister = () => {


//     dispatch(registerUser({ Email, Password }))
//       .then(() => {

//       Alert.alert("succesfully")
//       })
//       .catch((error) => {

//         console.error('Failed to register:', error);

//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require("../asset/CoffeeShotlogo.png")} style={styles.imageLY} />
//       <View style={styles.ContainerForm}>
//         <Text style={styles.TextSignUp}>Sign Up</Text>
//         <Text style={styles.TextSologan}>
//           We are so excited you’re ready to become a part of our coffee network! Don't forget to check out your perks!
//         </Text>
//         <View style={styles.UserInput}>
//           <Text style={styles.TextUser}>Email</Text>
//           <TextInput
//             style={styles.inputUser}
//             placeholder='Enter Email'
//             value={Email}
//             onChangeText={setEmail}
//             autoCapitalize='none'
//             keyboardType='email-address'
//             required
//           />
//           <Text style={styles.TextUser}>Password</Text>
//           <TextInput
//             style={styles.inputUser}
//             placeholder='Enter password'
//             value={Password}
//             onChangeText={setPassword}
//             secureTextEntry
//             required
//           />
//         </View>
//         <TouchableOpacity onPress={handleRegister}>
//           <View style={styles.Button}>
//             <Text style={{ color: "white" }}>REGISTER</Text>
//           </View>
//         </TouchableOpacity>
//         <Text style={styles.Already}>Already have an account?</Text>
//         <TouchableOpacity onPress={handleSignup}>
//           <View style={styles.Button}>
//             <Text style={{ color: "white" }}>SIGN IN</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: "#f8f3e9",
//   },
//   imageLY: {
//     width: 56.77,
//     height: 89.45,
//     marginVertical: 20,
//   },
//   ContainerForm: {
//     backgroundColor: "white",
//     width: "100%",
//     height: "100%",
//     borderRadius: 40,
//     paddingHorizontal: 20,
//     paddingTop: 40,
//   },
//   TextSignUp: {
//     fontFamily: "Poppins",
//     fontWeight: "700",
//     fontSize: 28,
//     color: "#4B2C20",
//     marginBottom: 10,
//   },
//   TextSologan: {
//     fontSize: 14,
//     color: "#4B2C20",
//     fontWeight: "400",
//     width: 291,
//     fontFamily: "Poppins",
//     textAlign: "left",
//     marginBottom: 20,
//   },
//   UserInput: {
//     marginVertical: 10,
//   },
//   TextUser: {
//     fontFamily: "Poppins",
//     color: "#4E8D7C",
//     marginBottom: 5,
//   },
//   inputUser: {
//     width: "100%",
//     height: 50,
//     borderRadius: 10,
//     backgroundColor: "#DEE5E6",
//     paddingHorizontal: 15,
//     marginBottom: 20,
//   },
//   Button: {
//     backgroundColor: "#4B2C20",
//     height: 50,
//     width: "100%",
//     borderRadius: 10,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   Already: {
//     alignSelf: "center",
//     justifyContent: "center",
//     marginTop: 20,
//   }
// });

// export default RegisterScreen;
