import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Footer: React.FC = () => {
  return (
    <View style={styles.body}>
      <Text>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: 80,
    borderColor: 'grey',
    borderTopWidth: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
export default Footer;
