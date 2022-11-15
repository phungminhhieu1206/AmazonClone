import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 5,
    marginVertical: 5,
  },
  image: {
    height: 150,
    flex: 2, // fit kích thước ảnh vào vùng diện tích cho phép
    resizeMode: 'contain', // chứa toàn bộ ảnh
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'baseline', // căn thẳng chân
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  star: {
    margin: 2,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    marginLeft: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline', // thẳng chữ text
  },
});

export default styles;
