import {StyleSheet, ScrollView, ImageBackground, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import data from '../../../Zodiac';
import {Text} from 'react-native-paper';

const Detail = () => {
  const signData = data.ZodiacSignsDetail[11];

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
          <View>{signData.ZodiacSignImageUrl}</View>

          <Text variant="titleLarge">{signData.Name}</Text>
          <Text variant="titleMedium">
            Myanmar Month: <Text> {signData.MyanmarMonth}</Text>
          </Text>
          <View>
            <Text>Character</Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.Character}
            </Text>
          </View>
          <View>
            <Text>LifePurpose</Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.LifePurpose}
            </Text>
          </View>
          <View>
            <Text>Loyal</Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.Loyal}
            </Text>
          </View>
          <View>
            <Text>RepresentativeFlower</Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.RepresentativeFlower}
            </Text>
          </View>
          <View>
            <Text>Angry</Text>
            <Text variant="bodySmall" style={styles.paragraph}>
              {signData.Angry}
            </Text>
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
});
