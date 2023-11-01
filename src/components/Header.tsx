import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header style={{justifyContent: 'space-between'}}>
      <Appbar.Action icon="magnify" />
      <Appbar.Action icon="dots-vertical" />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({});
