import {StyleSheet} from 'react-native';
import * as theme from '../../utils/use-theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h3,
    color: theme.colors.light.foreground,
  },
  subTitle: {
    fontSize: theme.sizes.h3,
    color: theme.colors.light.foreground,
  },
  imgContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
