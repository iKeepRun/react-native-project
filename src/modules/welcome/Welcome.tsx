import React from 'react'
import {Image, StyleSheet, View} from "react-native";
import logo_main from "../../assets/icon_main_logo.png";

const Welcome = () => {
    return (
        <View style={styles.root}>
            <Image
                   style={styles.login_main}
                source={logo_main} />
        </View>
    )
}

const styles=StyleSheet.create({
    root:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'#fff',
        flexDirection:'column',
    },
    login_main:{
        width:230,
        height:120,
        marginTop:200,
        resizeMode: 'contain'
    }
})
export default Welcome
