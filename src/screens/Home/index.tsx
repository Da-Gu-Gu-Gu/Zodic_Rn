import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import data from '../../../Zodiac';
import Header from '../../components/Header';
import {Text, Card} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';

const Home = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const _renderItem = useCallback(({item}) => {
    return (
      <Card
        style={{
          width: '30%',
          paddingVertical: 10,
          justifyContent: 'center',
          backgroundColor: '#090c08',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginBottom: 10,
            width: 75,
            height: 75,
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: '#fbff12',

            alignItems: 'center',
          }}>
          {item.ZodiacSignImageUrl}
        </View>
        <Text variant="bodySmall" style={{textAlign: 'center', color: 'white'}}>
          {item.Name}
        </Text>
      </Card>
    );
  }, []);

  const _keyExtractor = useCallback(item => item.Id, []);

  return (
    <View style={styles.flex}>
      <Header />
      <View style={[styles.container]}>
        <Text variant="headlineLarge" style={{color: 'white'}}>
          👋 Hi,
        </Text>
        <Text variant="headlineSmall" style={{color: 'white'}}>
          Horoscope Forecasts
        </Text>
        <Text style={{color: 'gray'}}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum .
        </Text>
        <Text variant="titleMedium" style={{color: 'white'}}>
          If you don't know your sign, just enter your birthday.
        </Text>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            paddingVertical: 10,
            borderRadius: 10,
            alignItems: 'center',
            borderColor: 'gray',
            marginVertical: 15,
          }}
          onPress={() => setOpen(true)}>
          <Text style={{color: '#fbff12'}}>Pick Date</Text>
        </TouchableOpacity>
        <Text variant="titleSmall" style={{color: 'white'}}>
          Signs
        </Text>
        <FlatList
          style={{marginTop: 20, flexGrow: 1}}
          data={data.ZodiacSignsDetail}
          renderItem={_renderItem}
          contentContainerStyle={{gap: 20, paddingBottom: 100}}
          columnWrapperStyle={{gap: 20}}
          numColumns={3}
          keyExtractor={_keyExtractor}
        />
        <DatePicker
          modal
          open={open}
          mode="date"
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#161a1d',
  },
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
  },
});
