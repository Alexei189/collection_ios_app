import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card/Card';
const mockData = [
  {
    id: Math.random().toString(),
    brand: 'Frederic Male',
    name: 'Promise',
  },
  {
    id: Math.random().toString(),
    brand: 'Iceberg',
    name: 'Twice',
  },
  {
    id: Math.random().toString(),
    brand: 'Moschino',
    name: 'Toy Boy',
  },
  {
    id: Math.random().toString(),
    brand: 'Moschino',
    name: 'Toy Boy',
  },
  {
    id: Math.random().toString(),
    brand: 'Iceberg',
    name: 'Twice',
  },
  {
    id: Math.random().toString(),
    brand: 'Moschino',
    name: 'Toy Boy',
  },
  {
    id: Math.random().toString(),
    brand: 'Moschino',
    name: 'Toy Boy',
  },
  {
    id: Math.random().toString(),
    brand: 'Iceberg',
    name: 'Twice',
  },
  {
    id: Math.random().toString(),
    brand: 'Moschino',
    name: 'Toy Boy',
  },
  {
    id: Math.random().toString(),
    brand: 'Moschino',
    name: 'Toy Boy',
  },
];
console.log(mockData);

const MyFragrance: React.FC = () => {
  return (
    <SafeAreaView style={styles.body}>
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
      <FlatList
        data={mockData}
        renderItem={({item}) => <Card brand={item.brand} name={item.name} />}
        keyExtractor={item => item.id}
        columnWrapperStyle={styles.column}
        key={2}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 10,
    // height: '90%',
  },
  column: {
    justifyContent: 'space-between',
  },
});
export default MyFragrance;
