/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import product from '../../data/product';
import ImageCarousel from '../../components/ImageCarousel';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import ButtonCustom from '../../components/ButtonCustom';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={styles.root}>
      {/* Title product */}
      <Text style={styles.title}>{product?.title}</Text>

      {/* Image carousel */}
      <ImageCarousel images={product.images} />

      {/* Option selector */}
      <Picker selectedValue={selectedOption} onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map((option, index) => (
          <Picker.Item label={option} value={option} key={index} />
        ))}
      </Picker>

      {/* Price */}
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && <Text style={styles.oldPrice}> ${product.oldPrice}</Text>}
      </Text>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      {/* Choose button */}
      <ButtonCustom
        text={'Add To Cart'}
        onPress={() => {
          console.warn('Add to cart');
        }}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <ButtonCustom
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy now');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
