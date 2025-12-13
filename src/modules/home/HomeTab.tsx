import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const HomeTab = () => {
  const styles = StyleSheet.create({
    homePage: {
      flexDirection: 'column',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.homePage}>
      <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold'}}>
        HomeTab
      </Text>
    </View>

  );

};
export default HomeTab;
