import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  return (
    <Appbar.Header
      style={{justifyContent: 'space-between', backgroundColor: '#161a1d'}}>
      <Appbar.Action icon="menu" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default Header;

export const BackHeader = () => {
  const navigation = useNavigation();
  return (
    <Appbar.Header style={{backgroundColor: '#161a1d'}}>
      <Appbar.BackAction
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({});
