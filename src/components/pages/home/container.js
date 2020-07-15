import {connect} from 'react-redux'
import View from './view'
import {pokemonActions} from '../../../redux/pokemons'

const mapStateToProps = (state) => {
  return {
    list: state.pokemons.list,
    loading: state.pokemons.loading
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    downloadPokemons: () => dispatch(pokemonActions.getPokemons()),
    savePokemonInRedux: (pokemon) => dispatch(pokemonActions.setItem(pokemon))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
