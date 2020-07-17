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
    marginTop: 40,
    paddingHorizontal: 10
  },
  nameCell: {flexDirection: 'row', marginTop: 40, alignItems: 'center'},
  nameLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  nameValue: {
    color: colors.black,
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: colors.white,
    width: 245,
    height: 25,
    textAlign: 'center',
    borderRadius: 15,
    paddingHorizontal: 10
  },

  typesCell: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  typesLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  typesValue: {
    textTransform: 'capitalize',
    marginLeft: 20,
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: colors.white,
    width: 245,
    height: 25,
    textAlign: 'center',
    borderRadius: 15,
    paddingHorizontal: 10
  },

  weightCell: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  weightLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  weightValue: {
    marginLeft: 13,
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: colors.white,
    width: 245,
    height: 25,
    textAlign: 'center',
    borderRadius: 15,
    paddingHorizontal: 10
  },

  heightCell: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  heightLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  heightValue: {
    marginLeft: 16,
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: colors.white,
    width: 245,
    height: 25,
    textAlign: 'center',
    borderRadius: 15,
    paddingHorizontal: 10
  },

  movesCell: {flexDirection: 'column', marginTop: 12},
  movesLabel: {marginLeft: 50, fontStyle: 'italic', fontSize: 15},
  movesValue: {
    textTransform: 'capitalize',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: colors.white,
    marginRight: 50,
    height: 150,
    textAlign: 'center',
    borderRadius: 15,
    paddingHorizontal: 10
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.second,
    borderWidth: 1,
    borderColor: colors.third,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 30
  },
  buttonText: {
    color: colors.black
  }
})
