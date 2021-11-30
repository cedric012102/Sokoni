import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';

// import Product Modal
import ProductModal from './product-modal';

import {styles} from './styles/product-style';

const Product = ({item}) => {
  const [productVisible, setProductVisible] = useState(false);

  const ToggleProductVisible = () => {
    setProductVisible(!productVisible);
  };
  return (
    <TouchableOpacity
      onPress={() => ToggleProductVisible()}
      style={[styles.container, {backgroundColor: item.background}]}>
      <Modal
        animationType="slide"
        visible={productVisible}
        onRequestClose={() => ToggleProductVisible()}>
        <ProductModal closeModal={() => ToggleProductVisible()} item={item} />
      </Modal>

      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>{item.price}$</Text>
        <View style={styles.imgContainer}>
          <Image source={item.image} style={{width: 100, height: 100}} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
