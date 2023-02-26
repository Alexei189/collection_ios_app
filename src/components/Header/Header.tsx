import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

interface IProps {
  onPress: () => void;
}

const Header: React.FC<IProps> = ({onPress}) => {
  return (
    <View style={styles.body}>
      <Text>My Fragrance</Text>
      <Button title="+" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    height: 40,
    borderColor: 'black',
    borderBottomWidth: 4,
  },
});
export default Header;
