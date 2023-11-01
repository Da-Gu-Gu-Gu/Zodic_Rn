import {Image, StyleSheet, FlatList, View} from 'react-native';
import React, {useCallback} from 'react';
import data from '../../../Zodiac';
import Header from '../../components/Header';
import {Text, Card} from 'react-native-paper';

const Home = () => {
  const _renderItem = useCallback(({item}) => {
    return (
      <Card style={{width: '30%', height: 120, padding: 8}}>
        <Image
          source={item.ZodiacSign2ImageUrl}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 10,
            resizeMode: 'contain',
          }}
        />
      </Card>
    );
  }, []);

  const _keyExtractor = useCallback(item => item.Id, []);

  return (
    <View style={styles.flex}>
      <Header />
      <View style={[styles.container]}>
        <Text variant="headlineLarge">Headline Large</Text>
        <Text variant="headlineSmall">Headline Large</Text>
        <Text variant="titleSmall">Signs</Text>
        <FlatList
          data={data.ZodiacSignsDetail}
          renderItem={_renderItem}
          contentContainerStyle={{gap: 20}}
          columnWrapperStyle={{gap: 20}}
          numColumns={3}
          keyExtractor={_keyExtractor}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    padding: 20,
    gap: 10,
  },
});
