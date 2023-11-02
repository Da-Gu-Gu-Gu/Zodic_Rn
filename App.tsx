import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import {PaperProvider} from 'react-native-paper';
import Detail from './src/screens/Detail';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './src/route';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={{flex: 1}}>
          {/* <Text>App</Text> */}
          <StackScreens />
          {/* <Detail /> */}
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
