import React, { useState } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import logo_main from '../../assets/icon_main_logo.png';
import arrow_btn from '../../assets/icon_arrow.png';
import select_btn from '../../assets/icon_selected.png';
import unselect_btn from '../../assets/icon_unselected.png';
import  wechat_icon from '../../assets/icon_wx_small.png';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Login = () => {
  const [read, setRead] = useState(false);
 const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.login}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 80,
        }}
      >
        <TouchableOpacity onPress={() => setRead(!read)}>
          <Image
            source={read ? select_btn : unselect_btn}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 12, marginLeft: 10 }}>我已阅读并同意</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.baidu.com')}
        >
          <Text style={{ fontSize: 12, color: '#00c800' }}>
            《用户协议》和《隐私政策》
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      onPress={() => {navigation.navigate('OtherLogin')}}
      >
        <Text style={{ fontSize: 16 }}>其他登录方式</Text>
        <Image
          source={arrow_btn}
          style={{
            width: 20,
            height: 20,
            transform: [{ rotate: '180deg' }],
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.wechatLogin} activeOpacity={0.7}>
          <Image source={wechat_icon}  style={{ width: 38, height: 38 }}/>
          <Text style={{ color: '#fff' , fontSize: 18}}> 微信登录</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.oneLogin} activeOpacity={0.7}>
          <Text style={{ color: '#fff' ,fontSize: 18}}> 一键登录</Text>
      </TouchableOpacity>

      <Image source={logo_main} style={{ width: 230, height: 120 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    height: '100%',
    width: '100%',
    paddingBottom: 40,
    alignItems: 'center',
    paddingHorizontal: 56,
    flexDirection: 'column-reverse',
  },
  wechatLogin: {
    backgroundColor: '#05c160',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',

  },
  oneLogin: {
    backgroundColor: '#eb0638',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    marginTop: 300

  },
});

export default Login;
