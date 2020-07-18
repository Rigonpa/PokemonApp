import {connect} from 'react-redux'
import View from './view'
import {pokemonActions} from '../../../redux/pokemons'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertNewPokemonInList: (data) =>
      dispatch(pokemonActions.addElementToList(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
