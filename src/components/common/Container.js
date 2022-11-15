import React from 'react';
import {ScrollView, StyleSheet, SafeAreaView} from 'react-native';

/**
 * Vì không biết trước thành phần con của nó là gì, nên sử dụng thành phần children
 * Cho phép truyền trực tiếp các phần tử con của chúng bằng cách "lồng JSX"
 */
const Container = ({children}) => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
});

export default Container;
