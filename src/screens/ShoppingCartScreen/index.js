/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import carts from '../../data/cart';
import CartProductItem from '../../components/CartProductItem';
import ButtonCustom from '../../components/ButtonCustom';
import styles from './styles';

const ShoppingCartScreen = () => {
  const navigation = useNavigation();

  const totalPrice = carts.reduce(
    (summedPrice, product) => summedPrice + product.item.price * product.quantity,
    0,
  );

  const onCheckout = () => {
    navigation.navigate('Address');
  };

  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={carts}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={styles.price}>
              Subtotal ({carts.length} items): <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            </Text>
            <ButtonCustom
              text="Proceed to checkout"
              onPress={onCheckout}
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#c7b702',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ShoppingCartScreen;
