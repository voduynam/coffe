import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Header from '../component/Header'

const ScanPayScreen = () => {
  return (
   <View style={styles.container} >
        <Header/>
        <View style={styles.qrcontainer}>
            <Text style={styles.textScan}>Scan & Pay</Text>
            <Image source={require('../asset/Qr.png')} style={{width:300,height:300,
            
        }} />
        </View>
        
   </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#F6F2ED",
        flex:1,
    },
    qrcontainer:{
        alignItems:"center",
        marginVertical:100  

        
    },
    textScan:{
        color:"black",
        fontSize:40,
        fontWeight:"700",
        marginVertical:30
    }
})

export default ScanPayScreen
