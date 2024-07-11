import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Header from '../component/Header';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const OrderDetailsScreen = ({ route }) => {
    const { item } = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const sizes = [
        { label: 'Large', value: 'large' },
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' },
    ];
    const ices = [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' }
    ];
    const sweetness = [
        { label: '100%', value: '100%' },
        { label: '50%', value: '50%' },
        { label: '0%', value: '0' },
    ];

    const [selectedSize, setSelectedSize] = useState(sizes[0].value);
    const [selectedIce, setSelectedIce] = useState(ices[0].value);
    const [selectedSweetness, setSelectedSweetness] = useState(sweetness[0].value);

    const renderPickerItems = (items) => {
        return items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
        ));
    };

    const handleAddToCart = () => {
        const itemWithOptions = {
            ...item,
            size: selectedSize,
            ice: selectedIce,
            sweetness: selectedSweetness
        };
        dispatch(addToCart(itemWithOptions));
        navigation.navigate("CART_PRODUCT");
    };

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.headerContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.textIncluded}>What's included</Text>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Cup Size:</Text>
                    <Picker
                        selectedValue={selectedSize}
                        onValueChange={(itemValue) => setSelectedSize(itemValue)}
                        style={styles.picker}
                    >
                        {renderPickerItems(sizes)}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Ice:</Text>
                    <Picker
                        selectedValue={selectedIce}
                        onValueChange={(itemValue) => setSelectedIce(itemValue)}
                        style={styles.picker}
                    >
                        {renderPickerItems(ices)}
                    </Picker>
                </View>
                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Sweetener:</Text>
                    <Picker
                        selectedValue={selectedSweetness}
                        onValueChange={(itemValue) => setSelectedSweetness(itemValue)}
                        style={styles.picker}
                    >
                        {renderPickerItems(sweetness)}
                    </Picker>
                </View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleAddToCart}
                >
                    <Text style={{ color: "white", fontSize: 24, fontWeight: "600" }}>Add to cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F2ED',
    },
    headerContainer: {
        backgroundColor: '#4E8D7C',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    image: {
        width: 80,
        height: 100,
    },
    title: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 20,
        color: 'white',
        marginLeft: 20,
    },
    content: {
        flex: 1,
        padding: 15,
    },
    textIncluded: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        marginBottom: 10,
    },
    pickerContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    label: {
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        marginRight: 10,
    },
    picker: {
        height: 50,
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: "#4E8D7C",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 30,
    }
});

export default OrderDetailsScreen;
