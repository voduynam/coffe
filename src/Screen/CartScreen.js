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

    const handleRemoveFromCart = (item) => {
      dispatch(removeFromCart(item));
    };

    const handleIncrementQuantity = (item) => {
      dispatch(incrementQuantity(item));
    };

    const handleDecrementQuantity = (item) => {
      dispatch(decrementQuantity(item));
    };
    const handleODder = ()=>{
      navigation.navigate("CHECKTOTALPRODUCTDETAIL")
    }

    const renderCartItem = ({ item }) => (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.info}>Size: {item.size}</Text>
          <Text style={styles.info}>Ice: {item.ice}</Text>
          <Text style={styles.info}>Sweetness: {item.sweetness}</Text>
          <TouchableOpacity onPress={() => handleRemoveFromCart(item)} style={styles.removeButton}>
            <Text style={styles.removeButtonText}>Remove</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.InDcquantity}>
            <TouchableOpacity onPress={() => handleIncrementQuantity(item)}>
              <Ionicons name="add" color="#9C4400" size={30} />
            </TouchableOpacity>

            <Text style={styles.TextQuantity}>{item.quantity}</Text>

            <TouchableOpacity onPress={() => handleDecrementQuantity(item)}>
              <AntDesign name="minus" color="#9C4400" size={30} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.TextPrice}>{item.totalPrice}$</Text>
          </View>
        </View>
      </View>
    );

    return (
      <View style={styles.container}>

        <Header  isCart={true}/>
        <FlatList
          data={cartItems}
          renderItem={renderCartItem}
          keyExtractor={(item) => `${item.id}-${item.size}-${item.ice}-${item.sweetness}`}

          contentContainerStyle={styles.cartList}
          ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
        />
        
        <TouchableOpacity
          onPress={handleODder}
          style={styles.ButtonContainer}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "600" }}>Oder Now</Text>
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
      padding: 15,
    },
    cartItem: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 1,
      position: 'relative',
    },
    image: {
      width: 80,
      height: 100,
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
    removeButton: {
      backgroundColor: '#4E8D7C',
      borderRadius: 5,
      padding: 5,
      alignItems: 'center',
    },
    removeButtonText: {
      color: 'white',
      fontFamily: 'Poppins',
      fontWeight: '700',
    },
    emptyText: {
      textAlign: 'center',
      fontFamily: 'Poppins',
      fontSize: 16,
      color: 'gray',
      marginTop: 20,
    },
    quantityContainer: {
      position: 'absolute',
      right: 10,
    },
    TextQuantity: {
      fontSize: 17,
      marginHorizontal: 10,
    },
    InDcquantity: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    TextPrice: {
      textAlign: 'center',
      fontSize: 20,
      marginTop: 30,
      marginLeft: 20,
    },
    totalContainer: {
      backgroundColor: '#4E8D7C',
      paddingVertical: 10,
      alignItems: 'center',
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
  });

  export default CartScreen;
