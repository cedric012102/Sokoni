import React, {useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import theme
import * as theme from '../utils/use-theme';

// import Bag Modal
import BagModal from '../components/bag-modal';

import {styles} from './styles/product-modal-style';

const ProductModal = props => {
  const background = props.item.background;

  const [bagVisible, setBagVisible] = useState(false);

  const ToggleBagVisible = () => {
    setBagVisible(!bagVisible);
  };
  return (
    <View style={{flex: 1}}>
      <Modal
        animationType="slide"
        visible={bagVisible}
        onRequestClose={() => ToggleBagVisible()}>
        <BagModal closeModal={() => ToggleBagVisible()} />
      </Modal>
      <View style={[styles.container, {backgroundColor: background}]}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={props.closeModal}>
            <Icon
              name="keyboard-arrow-left"
              size={30}
              color={theme.colors.light.foreground}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ToggleBagVisible()}>
            <Icon
              name="shopping-cart"
              size={30}
              color={theme.colors.light.foreground}
            />
            <View style={styles.badgeContainer}>
              <Text style={styles.badgeText}>6</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Body */}
        <View style={styles.imgContainer}>
          <Image source={props.item.image} style={{width: 220, height: 220}} />
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={styles.sizesContainer}>
              <View
                style={[
                  styles.sizeCircleContainer,
                  {backgroundColor: background},
                ]}>
                <Text>S</Text>
              </View>
              <View style={styles.sizeCircleContainer}>
                <Text>M</Text>
              </View>
              <View style={styles.sizeCircleContainer}>
                <Text>L</Text>
              </View>
            </View>
            <Text style={styles.priceText}>{props.item.price}$</Text>
          </View>
          <Text style={styles.descriptionText}>{props.item.description}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={[
              styles.btnContainer,
              {marginRight: 10, borderColor: background},
            ]}>
            <Icon name="bookmark" size={30} color={background} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnContainer,
              {flex: 1, backgroundColor: background, borderColor: background},
            ]}>
            <Text style={styles.btnText}>ADD TO CARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductModal;
