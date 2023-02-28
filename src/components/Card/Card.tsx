import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
interface IProp {
  brand: string;
  name: string;
}
const Card: React.FC<IProp> = ({name, brand}) => {
  return (
    <View style={styles.body}>
      <Image
        style={styles.img}
        source={require('../../assets/images/male.png')}
      />
      <View style={styles.text_area}>
        <Text style={styles.text}>{brand}</Text>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'lightGreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: '49%',
    height: 180,
    borderColor: 'red',
    borderWidth: 2,
    marginBottom: 10,
  },
  img: {
    borderColor: 'red',
    borderWidth: 1,
    width: '70%',
    height: '70%',
  },
  text: {
    width: '100%',
  },
  text_area: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
export default Card;
