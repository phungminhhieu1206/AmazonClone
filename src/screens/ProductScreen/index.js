import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import product from '../../data/product';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  return (
    <View style={styles.root}>
      {/* Title product */}
      <Text style={styles.title}>{product?.title}</Text>

      {/* Image carousel */}
      <ImageCarousel images={product.images} />

      {/* Option selector */}

      {/* Price */}

      {/* Description */}

      {/* Quantity selector */}

      {/* Choose button */}
    </View>
  );
};

export default ProductScreen;
