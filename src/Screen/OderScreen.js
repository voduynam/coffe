import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import ProductCart from '../component/ProductCart';
import Header from '../component/Header';
import { searchProducts } from '../redux/cartSlice';
import dataFood from "../data/ProductFood.json";
import data from '../data/ProductDrink.json';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector(state => state.cart.filteredProducts);
  const filteredProductsFood = useSelector(state => state.cart.filteredProductsFood);
  const [products, setProducts] = useState(data.productDrink);
  const [productsFood, setProductsFood] = useState(dataFood.productFood);
  const [searchKeyword, setSearchKeyword] = useState('');

  const renderDrinkItem = ({ item }) => <ProductCart item={item} />;
  const renderFoodItem = ({ item }) => <ProductCart item={item} />;

  const handleSearch = () => {
    dispatch(searchProducts({ keyword: searchKeyword }));
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Search"
          value={searchKeyword}
          onChangeText={text => setSearchKeyword(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.drinkContainer}>
        <Text style={styles.textDrink}>Drinks</Text>
      </View>
      <FlatList
        data={products}
        numColumns={3}
        renderItem={renderDrinkItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        ListFooterComponent={
          <View>
            <View style={styles.drinkContainer}>
              <Text style={styles.textDrink}>Foods</Text>
            </View>
            <FlatList
              data={productsFood}
              numColumns={3}
              renderItem={renderFoodItem}
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.flatListContent}
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2ED',
  },
  drinkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  textDrink: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: 'Poppins',
    color: '#272727',
    marginLeft: 15,
  },
  flatListContent: {
    paddingBottom: 50,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowRadius: 10,
    shadowOpacity: 0.25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
  },
  textInput: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#272727',
  },
});

export default OrderScreen;
