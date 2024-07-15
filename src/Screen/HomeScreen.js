import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../component/Header';
import data from '../data/Product.json';
import { FlatList } from 'react-native-gesture-handler';
import ProductCart from '../component/ProductCart';
import { useNavigation } from '@react-navigation/native';
import { ImageSlider } from "react-native-image-slider-banner";

const HomeScreen = () => {
  const [products, setProducts] = useState(data.product);
  const navagation =useNavigation();

  const handleSeeAll =()=>{
    navagation.navigate('ODERSCREEN');
  }
  //render item
  const renderItem = ({ item }) => (
    <ProductCart item={item}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.heaContainer}>
        <View>
          <Text style={styles.textGood}>Good Morning!</Text>
          <Text style={styles.textsologan}>Let's get this Coffee ☕️ </Text>
        </View>
        <Image source={require('../asset/avatar.png')} />
      </View>
      <View style={styles.headerunder}>
        <View style={styles.bonusContainer}>
          <Text style={styles.textBonus}>BONUS REWARDS</Text>
          <Text style={styles.textContentBonus}>Coffee Delivered to your house</Text>
        </View>
        <Text style={styles.textOrder2}>Order 2 bags of coffee and get bonus stars!</Text>
        <Text style={styles.textOrderBonus}>Order any of our coffee and get an additional 30 Stars! Now that’s how you get free coffee!</Text>
        <Image source={require('../asset/bagCoffee.png')} style={styles.coffeeImage} />
      </View>
      <View style={styles.drinkContainer}>
        <Text style={styles.textDrink}>Drinks</Text>
        <TouchableOpacity
        onPress={handleSeeAll}>
          <Text style={styles.textSeeAll}> See all</Text>
        </TouchableOpacity>
        
      </View>
      <FlatList
        data={products}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F2ED",
  },
  textGood: {
    fontWeight: "900",
    fontSize: 24,
    color: "#272727",
    fontFamily: "Poppins",
  },
  heaContainer: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textsologan: {
    fontWeight: "100",
    fontSize: 20,
    color: "#272727",
    fontFamily: "Poppins",
  },
  bonusContainer: {
    backgroundColor: "#4E8D7C",
    padding: 10,
    borderRadius: 6,
  },
  textBonus: {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "500",
    fontSize: 10,
    lineHeight: 24,
  },
  textContentBonus: {
    color: "white",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
  },
  headerunder: {
    backgroundColor: "white",
    marginHorizontal: 23,
    borderRadius: 6,
    shadowColor: "#000000",
    elevation: 10,
    shadowRadius: 6,
    padding: 10,
  },
  textOrder2: {
    color: "#272727",
    fontFamily: "Poppins",
    fontWeight: "700",
    fontSize: 12,
    marginVertical: 10,
  },
  textOrderBonus: {
    color: "#272727",
    fontFamily: "Poppins",
    fontWeight: "400",
    fontSize: 12,
    marginVertical: 10,
    width: 237,
  },
  coffeeImage: {
    position: "absolute",
    marginLeft: 250,
    marginTop: 10,
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
    fontSize: 14,
    color: '#272727',
    marginTop: 2,
    marginBottom: 2,
  },
  flatListContent: {
    paddingBottom: 50,
  },
});

export default HomeScreen;
