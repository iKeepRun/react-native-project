import React, { useState } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  LayoutAnimation

} from 'react-native';
// import { Picker } from '@react-native-picker/picker';
import { Picker } from '@react-native-picker/picker';

import close_icon from '../../assets/icon_close_modal.png';
import eye_open_icon from '../../assets/icon_eye_open.png';
import eye_close_icon from '../../assets/icon_eye_close.png';
import icon_exchange from '../../assets/icon_exchange.png';
import icon_wechat from '../../assets/icon_wx.png';
import icon_qq from '../../assets/icon_qq.webp';


import { NavigationProp, useNavigation } from '@react-navigation/native';
import select_btn from '../../assets/icon_selected.png';
import unselect_btn from '../../assets/icon_unselected.png';

const OtherLogin = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [selectedValue, setSelectedValue] = useState('86');
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [read, setRead] = useState(false);
  return (
    <View style={styles.otherLoginPage}>
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => {navigation.goBack()
          LayoutAnimation.easeInEaseOut()
        }}
      >
        <Image source={close_icon} style={{ width: 40, height: 40 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 28, color: '#333', marginTop: 25 }}>
        密码登录
      </Text>
      <Text style={{ fontSize: 14, color: '#cbcbcb', marginTop: 8 }}>
        未注册手机号登录成功之后将自动注册
      </Text>

      <View style={styles.phoneInput}>
        <Picker
          selectedValue={selectedValue}
          style={{ width: 100, height: 60, fontSize: 20 }}
          onValueChange={itemValue => setSelectedValue(itemValue)}
        >
          <Picker.Item label="+86" value="86" />
          <Picker.Item label="+1" value="1" />
          <Picker.Item label="+81" value="81" />
        </Picker>
        <TextInput
          placeholder="请输入手机号码"
          placeholderTextColor={'#cbcbcb'}
          style={{
            fontSize: 20,
            height: 60,
            lineHeight: 40,
            marginLeft: 5,
            flex: 1,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginTop: 8,
          borderBottomWidth: 1,
          borderBottomColor: '#cbcbcb',
        }}
      >
        <TextInput
          placeholder="输入密码"
          placeholderTextColor={'#cbcbcb'}
          style={{ fontSize: 20 }}
        />

        <TouchableOpacity onPress={() => setIsEyeOpen(!isEyeOpen)}>
          <Image
            source={isEyeOpen ? eye_open_icon : eye_close_icon}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image style={{ width: 20, height: 20 }} source={icon_exchange} />
          <Text style={{ flex: 1 }}>验证码登录</Text>
          <Text>忘记密码？</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          width: '100%',
          height: 56,
          display: 'flex',
          backgroundColor: '#fd2139',
          borderRadius: 28,
          alignItems: 'center',
          justifyContent: 'center',

          marginTop: 25,
        }}
        activeOpacity={0.7}
      >
        <Text style={{ fontSize: 18, color: '#fff' }}>登录</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 70,
          paddingHorizontal: 50,
        }}
      >
        <TouchableOpacity onPress={() => setRead(!read)}>
          <Image
            source={read ? select_btn : unselect_btn}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 12, color: '#c5c5c5' }}>我已阅读并同意</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://www.baidu.com')}
        >
          <Text style={{ fontSize: 14, color: '#333' }}>
            《用户协议》《隐私政策》
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginLeft:-16}}>
        <Text style={{  fontSize: 14 }}>《儿童/青少年个人数据保护指引》</Text>
      </TouchableOpacity>



      <View style={{marginTop: 50, flexDirection: 'row',}}>
        <Image source={icon_wechat} style={{ width: 56, height: 56 ,marginRight:50}} />
        <Image source={icon_qq} style={{ width: 56, height: 56 ,marginLeft:50}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otherLoginPage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingVertical: 60,
    paddingHorizontal: 60,
    alignItems: 'center',
    flexDirection: 'column',

  },
  closeIcon: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
  phoneInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
});

export default OtherLogin;
