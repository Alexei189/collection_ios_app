import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

interface IProp {
  onPress: () => void;
}

const ModalAddItem: React.FC<IProp> = ({onPress}) => {
  return (
    <View style={styles.body}>
      <Button title="X" onPress={onPress} />
      <TextInput placeholder="brand" keyboardType="default" />
      <TextInput placeholder="name" keyboardType="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    // marginTop: 100,
    backgroundColor: 'lightGreen',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
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
export default ModalAddItem;
