import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
// import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

interface IProp {
  onPress: () => void;
}

const ModalAddItem: React.FC<IProp> = ({onPress}) => {
  const LoadLib = () => {
    launchImageLibrary(
      {
        mediaType: 'video',
      },
      response => {
        console.log(response);
      },
    );
  };

  return (
    <View style={styles.body}>
      <Button title="X" onPress={onPress} />
      <Button title="foto" onPress={LoadLib} />
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
