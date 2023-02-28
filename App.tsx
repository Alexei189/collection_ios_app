/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
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

import {
  Colors,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import MyFragrance from './src/pages/MyFragrance';
import ModalAddItem from './src/components/ModalAddItem/ModalAddItem';

function App(): JSX.Element {
  const [showModalAddItem, setShowModalAddItem] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const handlerOnClickAddItem = () => {
    setShowModalAddItem(!showModalAddItem);
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#ffffff',
  };

  return (
    <>
      <SafeAreaView style={backgroundStyle}>
        <View style={styles.body}>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Header onPress={handlerOnClickAddItem} />
          {/* <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}> */}
          <View style={styles.page}>
            <MyFragrance />
          </View>
          {/* </ScrollView> */}
          <Modal
            animationType="slide"
            // presentationStyle="pageSheet"
            visible={showModalAddItem}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
              setShowModalAddItem(false);
            }}>
            <ModalAddItem onPress={handlerOnClickAddItem} />
          </Modal>
        </View>
      </SafeAreaView>

      <Footer />
    </>
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
    paddingLeft: 10,
    paddingRight: 10,
  },
  page: {
    // height: '',
  },
});

export default App;
