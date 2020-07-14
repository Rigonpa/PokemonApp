import {StyleSheet} from 'react-native'
import colors from '../../../assets/colors'

export const styles = StyleSheet.create({
  cell: {flexDirection: 'row', height: 190},
  image: {
    width: 150,
    height: 150,
    backgroundColor: colors.second,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: colors.third,
    marginLeft: 20,
    marginTop: 20
  },
  textSection: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.main,
    marginLeft: 20,
    marginTop: 30
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    flex: 1,
    textTransform: 'uppercase',
    marginTop: 30
  },
  types: {
    color: 'black',
    fontSize: 16,
    flex: 1,
    textTransform: 'capitalize'
  },
  weight: {
    color: 'black',
    fontSize: 14,
    fontStyle: 'italic',
    flex: 1,
    textTransform: 'capitalize',
    marginBottom: 30,
    marginRight: 20,
    textAlign: 'right'
  },
  separator: {
    width: '60%',
    height: 1,
    alignSelf: 'flex-end',
    backgroundColor: colors.third
  }
})
