import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Card from '../components/Card/Card';

const MyFragrance: React.FC = () => {
  return (
    <View style={styles.body}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
});
export default MyFragrance;
