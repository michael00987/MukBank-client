import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Picker } from 'react-native';

export default function DistanceOrReView({
  setDirection,
  setReviewOrDistance,
  carouselIndexReset,
  showLoader,
  distance
}) {
  const [selectedValue, setSelectedValue] = useState('review');
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{
          height: 30,
          width: 110,
          color: 'black'
        }}
        onValueChange={itemValue => {
          setSelectedValue(itemValue);
          setReviewOrDistance(itemValue);
          setDirection([]);
          carouselIndexReset();
          if (distance >= 0.3) {
            showLoader();
          }
        }}
      >
        <Picker.Item label="리뷰순" value="review" />
        <Picker.Item label="거리순" value="distance" />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 10,
    flex: 1,
    top: 0,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#d1d1d1',
    alignItems: 'center'
  }
});
