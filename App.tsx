import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import MyFragrance from './src/pages/MyFragrance';
import ModalAddItem from './src/components/ModalAddItem/ModalAddItem';
import {useDispatch} from 'react-redux';
import {getCollectionAction} from './src/store/main';

function App(): JSX.Element {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getCollectionAction());
  }, [dispatch]);
  const [showModalAddItem, setShowModalAddItem] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const handlerOnClickAddItem = () => {
    setShowModalAddItem(!showModalAddItem);
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#ffffff',
  };

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar
      // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <View style={styles.body}> */}
      <Header onPress={handlerOnClickAddItem} />
      <View style={styles.page}>
        <MyFragrance />
      </View>

      <Modal
        animationType="slide"
        // presentationStyle="pageSheet"
        visible={showModalAddItem}
        onRequestClose={() => {
          setShowModalAddItem(false);
        }}>
        <ModalAddItem onPress={handlerOnClickAddItem} />
      </Modal>
      <Footer />
      {/* </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  body: {
    flex: 1,
  },
  page: {
    // marginBottom: '48%',
    // height: '86%',
    flex: 1,
    // height: '',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default App;
