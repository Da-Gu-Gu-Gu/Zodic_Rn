import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Alert,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import data from '../../../Zodiac';
import {Text} from 'react-native-paper';
import {PieChart} from 'react-native-gifted-charts';

const Detail = () => {
  const signData = data.ZodiacSignsDetail[1];

  const pieData = [
    {
      value: 47,
      label: 'AA',
      color: '#009FFF',
      gradientCenterColor: '#006DFF',
    },
    {value: 40, color: '#93FCF8', gradientCenterColor: '#3BE9DE'},
    {value: 16, color: '#BDB2FA', gradientCenterColor: '#8F80F3'},
    {value: 3, color: '#FFA5BA', gradientCenterColor: '#FF7F97'},
  ];

  return (
    <View style={styles.flex}>
      <Header />
      <ImageBackground
        source={signData.ZodiacSign2ImageUrl}
        style={styles.container}>
        <ScrollView
          style={styles.bg}
          contentContainerStyle={styles.bgContainer}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            {signData.ZodiacSignImageUrl}
            <Text variant="titleSmall">({signData.Dates})</Text>
          </View>

          <Text variant="titleLarge">{signData.Name}</Text>
          <Text variant="titleMedium">
            Myanmar Month: <Text> {signData.MyanmarMonth}</Text>
          </Text>
          <View style={{alignItems: 'baseline'}}>
            <Text variant="titleMedium" style={styles.underline}>
              Character
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.Character}
            </Text>
          </View>
          <View style={{alignItems: 'baseline'}}>
            <Text variant="titleMedium" style={styles.underline}>
              LifePurpose
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.LifePurpose}
            </Text>
          </View>
          <View style={{alignItems: 'baseline'}}>
            <Text variant="titleMedium" style={styles.underline}>
              Loyal
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.Loyal}
            </Text>
          </View>
          <View style={{alignItems: 'baseline'}}>
            <Text variant="titleMedium" style={styles.underline}>
              RepresentativeFlower
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.RepresentativeFlower}
            </Text>
          </View>
          <View style={{alignItems: 'baseline'}}>
            <Text variant="titleMedium" style={styles.underline}>
              Angry
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.Angry}
            </Text>
          </View>
          <View style={styles?.traits}>
            <Text variant="titleMedium" style={styles.underline}>
              Traits
            </Text>
            <PieChart
              data={pieData}
              donut
              showGradient
              focusOnPress
              showValuesAsLabels
              showTextBackground
              radius={130}
              onPress={(item, index) => Alert.alert(JSON.stringify(item))}
              innerRadius={90}
              innerCircleColor={'#232B5D'}
              centerLabelComponent={item => {
                return (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 22,
                        color: 'white',
                        fontWeight: 'bold',
                      }}>
                      {/* {item.value} */}
                    </Text>
                    <Text style={{fontSize: 14, color: 'white'}}>
                      Excellent
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    margin: 10,
    borderRadius: 20,
    // borderWidth: 1,
    padding: 4,
    flex: 1,
  },
  bg: {
    flex: 1,
    padding: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  paragraph: {
    paddingVertical: 10,
  },
  bgContainer: {
    paddingVertical: 20,
    gap: 15,
  },
  underline: {
    borderBottomColor: 'yellow',
    borderBottomWidth: 2,
    paddingBottom: 5,
  },
  traits: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
});
