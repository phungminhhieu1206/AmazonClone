/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useState} from 'react';
import {View, Image, FlatList, useWindowDimensions} from 'react-native';
import styles from './styles';

const ImageCarousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    // console.log(viewableItems);
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image style={[styles.image, {width: windowWidth - 40}]} source={{uri: item.url}} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'} // important
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatlistUpdate} // chuyển button slide
        keyExtractor={item => item.id}
      />

      <View style={styles.dots}>
        {images.map((item, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
