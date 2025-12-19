import React, { useEffect } from 'react';
import {Image, StyleSheet, View} from "react-native";
import logo_main from "../../assets/icon_main_logo.png";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import storage from '../../utils/Storage.ts';

const Welcome = () => {
    const navigation = useNavigation<NavigationProp<any>>();
    useEffect(()=>{
      const timer=setTimeout(() => {
        storage.get('userInfo').then(res=>{
          console.log("获取用户信息：",res)
          if(res){
            navigation.navigate('HomeTab')
          }else {
            navigation.navigate('Login')
          }
        })
      }, 3000);

      //清理定时器
      return ()=>clearTimeout( timer)
    },[navigation])

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
