import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigation = useNavigation();
  const cartItems = useSelector((state) => state.cart.items);

  // handleCart
  const handleCart = () => {
    navigation.navigate('CART_PRODUCT');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconList}>
        <Foundation 
          name="list"
          size={35}
          color="#272727"
        />
      </TouchableOpacity>

      <Image source={require('../asset/CoffeeShotlogo.png')} style={styles.imgHeader} />

      <View style={{ position: 'relative' }}>
        <TouchableOpacity style={styles.iconBag} onPress={handleCart}>
          <SimpleLineIcons 
            name="handbag"
            size={33}
            color="#272727"
          />
          {cartItems.length > 0 ? (
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>
                {cartItems.length}
              </Text>
            </View>
          ):(
            <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>
              0
            </Text>
          </View>
          )
         
          }
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F2ED',
    padding: 10,
    shadowColor: '#000',
    shadowRadius: 3.84,
    elevation: 10,
    alignItems: 'center',
  },
  iconList: {
    marginLeft: 10,
  },
  imgHeader: {
    height: 47,
    width: 30,
  },
  iconBag: {
    marginRight: 10,
  },
  badgeContainer: {
    height: 18,
    width: 18,
    borderRadius: 18,
    backgroundColor: '#4E8D7C',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 4,
    right: -1,
  },
  badgeText: {
    color: '#272727',
    fontWeight: '600',
    fontSize: 12.5,
  },
});

export default Header;
