import {connect} from 'react-redux'
import View from './view'
import {pokemonActions} from '../../../redux/pokemons'

const mapStateToProps = (state) => {
  console.log('globalState: ', state)
  return {
    list: state.pokemons.list,
    loading: state.pokemons.loading
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    downloadPokemons: () => dispatch(pokemonActions.getPokemons()),
    downloadPokemonData: (pokemonId) =>
      dispatch(pokemonActions.getPokemonData(pokemonId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
