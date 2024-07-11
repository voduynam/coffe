import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, FlatList } from 'react-native-gesture-handler';

import data from "../data/Product.json";
import Header from '../component/Header';
import { useNavigation } from '@react-navigation/native';

const OderScreen = () => {
    const [products, setProducts] = useState(data.product);
    const navagation =useNavigation();
    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity
                onPress={()=>{
                    navagation.navigate('PRODUCTS_DETAIL', {item})
                }}
            >
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}$</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        
        <GestureHandlerRootView>
            <View><Header/></View>
            
            <View style={styles.container}>
                <View style={styles.drinkContainer}>
                    <Text style={styles.textDrink}>Drinks</Text>
                    <Text style={styles.textSeeAll}>See all</Text>
                </View>
                <FlatList
                    data={products}
                    numColumns={3}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                />
            </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F2ED',
    },
    drinkContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    textDrink: {
        fontSize: 20,
        fontWeight: "700",
        fontFamily: "Poppins",
        color: "#272727",
        marginLeft: 15,
    },
    textSeeAll: {
        color: "#4E8D7C",
        marginRight: 20,
    },
    itemContainer: {
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
      },
    flatListContent: {
        paddingBottom: 50,
    },
});

export default OderScreen;
