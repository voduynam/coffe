// CartScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/cartSlice';
import Header from '../component/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

  const CartScreen = () => {
    const navigation=useNavigation();
    const cartItems = useSelector((state) => state.cart.items);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    const handleODder = ()=>{
      navigation.navigate("SCAN_PAY")
    }

    const renderCartItem = ({ item }) => (
      <View style={styles.cartItem}>
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.info}>Size: {item.size}</Text>
          <Text style={styles.info}>Ice: {item.ice}</Text>
          <Text style={styles.info}>Sweetness: {item.sweetness}</Text>
          <Text style={styles.info}>Quantity :{item.quantity}</Text>
        </View>      
            <Text style={styles.TextPrice}>{item.totalPrice}$</Text>
       
        </View>
     
    );

    return (
      <View style={styles.container}>

        <Header/>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => `${item.id}-${item.size}-${item.ice}-${item.sweetness}`}
          contentContainerStyle={styles.cartList}
          
        />
         <Text style={styles.textTotalPrice}>TotalPrice: {totalPrice}$</Text>
        <TouchableOpacity
          onPress={handleODder}
          style={styles.ButtonContainer}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "600" }}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F2ED',
    },
    cartList: {
      padding: 13,
    },
    cartItem: {
      flexDirection: 'row',
      backgroundColor: '#F6F2ED',
      marginBottom: 10,
      borderRadius: 10,
      
    },
    details: {
      flex: 1,
      padding: 10,
    },
    title: {
      fontFamily: 'Poppins',
      fontWeight: '700',
      fontSize: 16,
      color: 'black',
      marginBottom: 5,
    },
    info: {
      fontFamily: 'Poppins',
      fontSize: 14,
      color: 'gray',
      marginBottom: 5,
    },


 
    quantityContainer: {
      position: 'absolute',
      right: 10,
    },
    TextQuantity: {
      fontSize: 17,
      marginHorizontal: 10,
    },
   
    TextPrice: {
      textAlign: 'center',
      fontSize: 20,
      marginTop:10
      
    },
    
    totalText: {
      fontFamily: 'Poppins',
      fontSize: 20,
      fontWeight: '700',
      color: 'white',
    },
    ButtonContainer:{
      padding: 10,
      backgroundColor: "#4E8D7C",
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      marginVertical: 5,
    },
    textTotalPrice:{
      fontSize: 17,
      marginVertical:10,
      marginLeft:265,
      color:"#4E8D7C"
    }
 
  });

  export default CartScreen;
