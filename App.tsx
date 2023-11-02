import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import {PaperProvider} from 'react-native-paper';
import Detail from './src/screens/Detail';

const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{flex: 1}}>
        {/* <Text>App</Text> */}
        <Home />
        {/* <Detail /> */}
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
