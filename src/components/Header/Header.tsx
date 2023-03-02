import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

interface IProps {
  onPress: () => void;
}

const Header: React.FC<IProps> = ({onPress}) => {
  return (
    <View style={styles.body}>
      <Button title="^" onPress={onPress} />
      <Text>My Fragrance</Text>
      <Button title="+" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    // width: '100%',
    alignItems: 'center',
    height: 40,
    borderColor: 'black',
    borderBottomWidth: 4,
  },
});
export default Header;
