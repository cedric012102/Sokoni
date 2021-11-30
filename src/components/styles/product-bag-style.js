import {StyleSheet} from 'react-native';
import * as theme from '../../utils/use-theme';

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  subContainer: {
    flexDirection: 'row',
  },
  imgContainer: {
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  nameText: {
    fontWeight: '900',
    fontSize: theme.sizes.h3,
  },
  priceText: {
    marginTop: 7,
    fontWeight: 'bold',
  },
  sizeContainer: {
    justifyContent: 'center',
  },
  numCircle: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.silver,
  },
  sizeCircle: {
    width: 30,
    height: 30,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.silver,
    backgroundColor: theme.colors.silver,
  },
});
