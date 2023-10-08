import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomProductCard = ({title, image, description, price}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Text>{price} $</Text>
      </View>
    </View>
  );
};

export default CustomProductCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
  },
  image: {
    height: 100,
    aspectRatio: 1,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
