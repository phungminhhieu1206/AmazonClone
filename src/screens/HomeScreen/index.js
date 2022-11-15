import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      {/* Render product component */}
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
});

export default HomeScreen;
