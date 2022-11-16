import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ProductItemComponent from '../../components/ProductItemComponent';
import products from '../../data/products';

const HomeScreen = ({searchValue}) => {
  // TODO: Search liên tục
  // console.log(searchValue);

  return (
    <View style={styles.page}>
      {/* Render product component */}
      <FlatList
        data={products}
        renderItem={({item}) => <ProductItemComponent item={item} />}
        keyExtractor={({id}) => id} // thêm key khi item dữ liệu không có trường id
        showsVerticalScrollIndicator={false} // trong app hạn chế hiển thị thanh cuộn
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
