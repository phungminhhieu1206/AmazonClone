import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItemComponent from '../components/ProductItemComponent';

import products from '../data/products';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render product component */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItemComponent item={item} />}
        keyExtractor={({id}) => id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default HomeScreen;
