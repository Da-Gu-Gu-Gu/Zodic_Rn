import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import StackScreens from './src/route';

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar backgroundColor={'#161a1d'} />
          <StackScreens />
          {/* <Detail /> */}
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
