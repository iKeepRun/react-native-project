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

const Login = () => {
  const [read, setRead] = useState(false);

  return (
    <View style={styles.login}>
      <View
        style={{
          flexDirection: 'row',
          marginTop:200
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
        }}
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

      <TouchableOpacity>
        <View style={styles.phoneLogin}>
          <Text style={{ color: '#fff' }}> 手机号登录</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.wechatLogin}>
          <Text style={{ color: '#fff' }}> 一键微信登录</Text>
        </View>
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
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'column-reverse',
    // marginTop:5,
  },
  wechatLogin: {
    backgroundColor: '#00c800',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 180,
  },
  phoneLogin: {
    backgroundColor: '#02efee',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
});

export default Login;
