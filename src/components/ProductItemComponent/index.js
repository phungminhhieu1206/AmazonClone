import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '../common';
import {useNavigation} from '@react-navigation/native';

const ProductItemComponent = ({item}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ProductDetails', {id: item.id});
  };
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image
        style={styles.image}
        source={{
          uri: item?.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item?.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <Icon
              key={`${item?.id}-${i}`} // item.id là id của item nhưng có 5 dấu sao trong 1 item nên thêm i
              type="FontAwesome"
              style={styles.star}
              size={18}
              name={i < Math.floor(item?.avgRating) ? 'star' : 'star-o'}
              color={'#e47911'}
            />
          ))}
          <Text>{item?.ratings}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>from ${item?.price}</Text>
          {item?.oldPrice && <Text style={styles.oldPrice}>${item.oldPrice}</Text>}
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItemComponent;
