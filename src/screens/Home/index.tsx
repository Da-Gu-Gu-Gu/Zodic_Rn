import {
  Image,
  StyleSheet,
  FlatList,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useMemo, useState} from 'react';
import data from '../../../Zodiac';
import Header from '../../components/Header';
import {Text, Card} from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import getZodiac from '../../utils/getZodiac';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation();

  const yourZodiac = useMemo(() => (date ? getZodiac(date) : null), [date]);

  const _renderItem = useCallback(
    ({item}: any) => {
      return (
        <Card
          onPress={() =>
            navigation.navigate('Detail', {
              signData: item,
            })
          }
          style={[
            styles.card,
            {
              borderColor: item.Name === yourZodiac ? '#fbff12' : '#090c08',
            },
          ]}>
          <View style={styles.imgWrapper}>{item.ZodiacSignImageUrl}</View>
          <Text
            variant="bodySmall"
            style={{textAlign: 'center', color: 'white'}}>
            {item.Name}
          </Text>
        </Card>
      );
    },
    [date],
  );

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
        <TouchableOpacity style={styles.btn} onPress={() => setOpen(true)}>
          <Text style={{color: '#fbff12'}}>Pick Date</Text>
        </TouchableOpacity>
        {yourZodiac && (
          <Text
            variant="titleMedium"
            style={{color: 'white', marginVertical: 20}}>
            Your Zodiac sign is{' '}
            <Text style={{color: '#fbff12'}}> {yourZodiac}</Text>
          </Text>
        )}
        <Text variant="titleSmall" style={{color: 'white'}}>
          Signs
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
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
          date={date ?? new Date()}
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
  card: {
    width: '30%',
    borderWidth: 2,
    paddingVertical: 10,
    justifyContent: 'center',
    backgroundColor: '#090c08',
    alignItems: 'center',
  },
  imgWrapper: {
    marginBottom: 10,
    width: 75,
    height: 75,
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: '#fbff12',

    alignItems: 'center',
  },
  btn: {
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: 'gray',
    marginVertical: 15,
  },
});
