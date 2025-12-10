import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo_main from "../../assets/icon_main_logo.png";
import  arrow_btn from "../../assets/icon_arrow.png";

const Login = () => {
    return (
        <View style={styles.login}>
            <Image source={logo_main} style={{width:230,height:120}}/>

           <TouchableOpacity>
             <View style={styles.wechatLogin}>
                <Text style={{color:'#fff'}}> 一键微信登录</Text>
             </View>
           </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.phoneLogin}>
              <Text style={{color:'#fff'}}> 手机号登录</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20 }}>
            <Text style={{fontSize:16}}>其他登录方式</Text>
            <Image source={arrow_btn} style={{width:20,height:20,transform:[{rotate:'180deg'}]}} />
          </TouchableOpacity>

        </View>
    )
}

const styles=StyleSheet.create({
  login:{
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    marginTop:150,
  },
  wechatLogin:{
    backgroundColor:'#00c800',
    width:200,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginTop:180,
  },
  phoneLogin:{
    backgroundColor:'#02efee',
    width:200,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    marginTop:20,
  }

})

export default Login
