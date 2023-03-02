import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Card from '../components/Card/Card';
import useSelector from '../hooks/useSelector';
// const mockData = [
//   {
//     id: Math.random().toString(),
//     brand: 'Frederic Male',
//     name: 'Promise',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Iceberg',
//     name: 'Twice',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Moschino',
//     name: 'Toy Boy',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Moschino',
//     name: 'Toy Boy',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Iceberg',
//     name: 'Twice',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Moschino',
//     name: 'Toy Boy',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Moschino',
//     name: 'Toy Boy',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Iceberg',
//     name: 'Twice',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Moschino',
//     name: 'Toy Boy',
//   },
//   {
//     id: Math.random().toString(),
//     brand: 'Moschino',
//     name: 'Toy Boy',
//   },
// ];
// console.log(mockData);

const MyFragrance: React.FC = () => {
  const storeData = useSelector(state => state.main.collection);
  console.log(storeData);

  return (
    <SafeAreaView style={styles.body}>
      <FlatList
        data={storeData}
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
  },
  column: {
    justifyContent: 'space-between',
  },
});
export default MyFragrance;
