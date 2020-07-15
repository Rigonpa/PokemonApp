import {StyleSheet} from 'react-native'
import colors from '../../../assets/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main
  },
  image: {
    width: 250,
    height: 250,
    backgroundColor: colors.second,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: colors.third,
    alignSelf: 'center',
    marginTop: 40
  },
  nameCell: {flexDirection: 'row', marginTop: 40, alignItems: 'center'},
  nameLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  nameValue: {
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '600'
  },

  typesCell: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  typesLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  typesValue: {
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '600'
  },

  weightCell: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  weightLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  weightValue: {
    marginLeft: 13,
    fontSize: 15,
    fontWeight: '600'
  },

  heightCell: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  heightLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  heightValue: {
    marginLeft: 16,
    fontSize: 15,
    fontWeight: '600'
  },

  movesCell: {flexDirection: 'column', marginTop: 10},
  movesLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  movesValue: {
    textTransform: 'capitalize',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 12,
    fontSize: 15,
    fontWeight: '600'
  }
})
