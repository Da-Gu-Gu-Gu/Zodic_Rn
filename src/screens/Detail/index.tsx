import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Header, {BackHeader} from '../../components/Header';
import data from '../../../Zodiac';
import {Text} from 'react-native-paper';
import {PieChart} from 'react-native-gifted-charts';
import {useRoute} from '@react-navigation/native';

const Detail = () => {
  const route = useRoute();
  const {signData} = route.params;

  const [currentChartData, setCurrentChartData] = useState(null);

  const traitsData = signData.Traits.map(data => {
    return {
      value: data.percentage,
      label: data.name,
      gradientCenterColor: '#006DFF',
    };
  });

  return (
    <View style={styles.flex}>
      <BackHeader />
      <ImageBackground
        source={signData.ZodiacSign2ImageUrl}
        style={styles.container}>
        <ScrollView
          style={styles.bg}
          contentContainerStyle={styles.bgContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.titleWrapper}>
            {signData.ZodiacSignImageUrl}
            <Text variant="titleSmall">({signData.Dates})</Text>
          </View>

          <Text variant="titleLarge">{signData.Name}</Text>
          <Text variant="titleMedium">
            Myanmar Month: <Text> {signData.MyanmarMonth}</Text>
          </Text>
          <View style={styles.baseLine}>
            <Text variant="titleMedium" style={styles.underline}>
              Character
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.Character}
            </Text>
          </View>
          <View style={styles.baseLine}>
            <Text variant="titleMedium" style={styles.underline}>
              LifePurpose
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.LifePurpose}
            </Text>
          </View>
          <View style={styles.baseLine}>
            <Text variant="titleMedium" style={styles.underline}>
              Loyal
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.Loyal}
            </Text>
          </View>
          <View style={styles.baseLine}>
            <Text variant="titleMedium" style={styles.underline}>
              Representative Flower
            </Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.RepresentativeFlower}
            </Text>
          </View>
          <View style={styles.baseLine}>
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
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <PieChart
                data={traitsData}
                donut
                showGradient
                focusOnPress
                showValuesAsLabels
                showTextBackground
                radius={130}
                onPress={(item: any, index: any) => setCurrentChartData(item)}
                innerRadius={90}
                innerCircleColor={'#232B5D'}
                centerLabelComponent={(_item: any) => {
                  return (
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      {currentChartData && (
                        <>
                          <Text
                            style={{
                              fontSize: 22,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            {currentChartData?.value} %
                          </Text>
                          <Text style={{fontSize: 14, color: 'white'}}>
                            {currentChartData?.label}
                          </Text>
                        </>
                      )}
                    </View>
                  );
                }}
              />
            </View>
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
    backgroundColor: '#161a1d',
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
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  baseLine: {alignItems: 'baseline'},
});
