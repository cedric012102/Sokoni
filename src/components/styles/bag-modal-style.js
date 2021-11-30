import {StyleSheet} from 'react-native';
import * as theme from '../../utils/use-theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light.background,
  },
  header: {
    height: 80,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h6,
  },
  headerSubTitle: {
    fontSize: theme.sizes.h2,
    color: theme.colors.gray,
  },
  bodyContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  footerContainer: {
    padding: 20,
    backgroundColor: theme.colors.light.background,
  },
  btnContainer: {
    flex: 1,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flexDirection: 'row',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: theme.sizes.h3,
  },
});
