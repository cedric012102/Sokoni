import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Modal} from 'react-native';

// import Product Modal
import ProductModal from './product-modal';

import {styles} from './styles/product-bag-style';

const ProductBag = ({item}) => {
  const [productVisible, setProductVisible] = useState(false);

  const ToggleProductVisible = () => {
    setProductVisible(!productVisible);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => ToggleProductVisible()}>
      <Modal
        animationType="slide"
        visible={productVisible}
        onRequestClose={() => ToggleProductVisible()}>
        <ProductModal closeModal={() => ToggleProductVisible()} item={item} />
      </Modal>

      <View style={styles.subContainer}>
        <View style={[styles.imgContainer, {backgroundColor: item.background}]}>
          <Image source={item.image} style={{width: 100, height: 100}} />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.nameText}>{item.color}</Text>
          <Text style={styles.priceText}>{item.price}.00$</Text>
        </View>

        <View style={styles.sizeContainer}>
          <View style={styles.numCircle}>
            <Text style={styles.nameText}>1x</Text>
          </View>
          <View style={styles.sizeCircle}>
            <Text style={styles.nameText}>M</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductBag;
