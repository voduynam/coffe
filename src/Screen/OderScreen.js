import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, TextInput, View, FlatList, Button, ActivityIndicator } from 'react-native';
import ProductCart from '../component/ProductCart';
import Header from '../component/Header';
import { fetchDrinks, setCurrentPage, selectDrinks, selectCurrentPage, selectIsLoading, selectError, searchProducts } from '../redux/OderSlice';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const drinks = useSelector(selectDrinks);
  const currentPage = useSelector(selectCurrentPage);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [searchKeyword, setSearchKeyword] = useState('');


  limit = 6;

  useEffect(() => {
    dispatch(fetchDrinks({ page: currentPage, limit }));
  }, [dispatch, currentPage]);

  //check if not item then render currentpage 1
  useEffect(() => {
    if (drinks.length === 0 && currentPage > 1) {
      handleResetPage();
    }
  }, [drinks]);






  const handleResetPage = () => {
    dispatch(setCurrentPage(1));
  };

  const handleNextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));


  };

  const handlePrePage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const renderDrinkItem = ({ item }) => <ProductCart item={item} />;

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
          onChangeText={(text) => setSearchKeyword(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
    
        <View style={styles.drinkContainer}>
            <Text style={styles.textDrink}>Drinks</Text>
        </View>
   

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={drinks}
          numColumns={3}
          renderItem={renderDrinkItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <View style={styles.containerButton}>
        {currentPage > 1 && <View style={styles.buttonWrapper}>
          <Button title="Previous" color="green" onPress={handlePrePage} />
        </View>}

        <View style={styles.buttonWrapper}>
          <Button title="Next" color="green" onPress={handleNextPage} />
        </View>

      </View>
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default OrderScreen;
