

import React, { useEffect } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch và useSelector
import Header from '../component/Header';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleSwitch from 'toggle-switch-react-native';
import {
    enableFactorAuthentication2,
    disableFactorAuthentication2,
    enablePasscodeLock,
    disablePasscodeLock,
    enableFaceID,
    disableFaceID,
    logout,
} from '../redux/cartSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AccountScreen = () => {

    const dispatch = useDispatch();






    const handleLogOut = () => {
        dispatch(logout());
    }


    const isFactorAuthentication2Enabled = useSelector(
        (state) => state.cart.isFactorAuthentication2Enabled
    );
    const isPasscodeLockEnabled = useSelector(
        (state) => state.cart.isPasscodeLockEnabled
    );
    const isFaceIDEnabled = useSelector((state) => state.cart.isFaceIDEnabled);

    // Handler to handle conversion changes and dispatch corresponding actions
    const handleToggleFactorAuthentication2 = (isOn) => {
        if (isOn) {
            dispatch(enableFactorAuthentication2());
        } else {
            dispatch(disableFactorAuthentication2());
        }
    };

    const handleTogglePasscodeLock = (isOn) => {
        if (isOn) {
            dispatch(enablePasscodeLock());
        } else {
            dispatch(disablePasscodeLock());
        }
    };

    const handleToggleFaceID = (isOn) => {
        if (isOn) {
            dispatch(enableFaceID());
        } else {
            dispatch(disableFaceID());
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.textGood}>Account</Text>
                    <Text style={styles.textSlogan}>Welcome test</Text>
                </View>
                <Image source={require('../asset/avatar.png')} />
            </View>

            <View style={styles.bodyContainer}>
                <View>
                    <Text style={styles.textTitle}>Profile</Text>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>Personal Info</Text>
                        <Feather name="info" size={22} color={"#434343"} />
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>Cards & Payments</Text>
                        <MaterialIcons name="payment" size={22} color={"#434343"} />
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>Transaction History</Text>
                        <MaterialIcons name="history" size={22} color={"#434343"} />
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>Privacy & Data</Text>
                        <Ionicons name="hand-right-outline" size={22} color={"#434343"} />
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>Account ID</Text>
                        <MaterialCommunityIcons
                            name="badge-account-horizontal-outline"
                            size={22}
                            color={"#434343"}
                        />
                    </View>

                    <Text style={styles.textTitle}>Security</Text>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>2-factor authentication</Text>
                        <ToggleSwitch
                            isOn={isFactorAuthentication2Enabled}
                            onColor="green"
                            offColor="#787880"
                            onToggle={handleToggleFactorAuthentication2}
                            size="medium"
                        />
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>Passcode Lock</Text>
                        <ToggleSwitch
                            isOn={isPasscodeLockEnabled}
                            onColor="green"
                            offColor="#787880"
                            onToggle={handleTogglePasscodeLock}
                            size="medium"
                        />
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={styles.textInfo}>Face ID</Text>
                        <ToggleSwitch
                            isOn={isFaceIDEnabled}
                            onColor="green"
                            offColor="#787880"
                            onToggle={handleToggleFaceID}
                            size="medium"
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.LogoutContainer}
                onPress={handleLogOut}
            >
                <Text style={styles.textLogout}>LOG OUT</Text>
            </TouchableOpacity>


        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F6F2ED",
    },
    textGood: {
        fontWeight: "900",
        fontSize: 30,
        color: "#272727",
        fontFamily: "Poppins",
    },
    headerContainer: {
        flexDirection: "row",
        padding: 15,
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 17,
    },
    textSlogan: {
        fontWeight: "100",
        fontSize: 17,
        color: "#272727",
        fontFamily: "Poppins",
    },
    textTitle: {
        fontFamily: "San Francisco",
        fontWeight: "700",
        fontSize: 22,
        color: "#0B0B0B",
        marginLeft: 22,
    },
    textInfo: {
        fontWeight: "400",
        fontSize: 20,
    },
    infoContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginHorizontal: 22,
        marginVertical: 10,
    },
    bodyContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
    },
    LogoutContainer: {
        backgroundColor: "#4E8D7C",
        width: 180,
        marginVertical: 20,
        alignSelf: "flex-end",
        height: 36,
        borderRadius: 5,
        marginRight: 15,


    },
    textLogout: {
        textAlign: "center",
        fontSize: 20,
        alignItems: "center",
        fontWeight: "400",
        color: "#fff0b3"
    }
});

export default AccountScreen;
