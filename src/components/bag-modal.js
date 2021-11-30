import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import theme
import * as theme from '../utils/use-theme';

// import clothes from products
import * as Products from '../utils/products';

// import product component
import ProductBag from '../components/product-bag';
import {styles} from './styles/bag-modal-style';

const BagModal = props => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Bag</Text>
        <Text style={styles.headerSubTitle}>6 ITEMS</Text>
      </View>

      {/* Body */}
      <View style={styles.bodyContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Products.clothes}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <ProductBag item={item} />;
          }}
        />
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>CHECKOUT</Text>
          <Icon
            name="keyboard-arrow-right"
            size={30}
            color={theme.colors.light.foreground}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BagModal;
