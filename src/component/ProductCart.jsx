import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProductCart = ({ item }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => navigation.navigate("PRODUCTS_DETAIL", { item })}
            
        >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}$</Text>
        </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 15,
        padding: 10,
        
      },
      image: {
        width: 80,
        height: 100,
        
        
      },
      title: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: '#272727',
        marginTop: 2,
        marginBottom: 2,
        textAlign:"center"
      },
      price:{
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: '#272727',
        marginTop: 2,
        marginBottom: 2,
        textAlign:"center"
      }
});

export default ProductCart;
