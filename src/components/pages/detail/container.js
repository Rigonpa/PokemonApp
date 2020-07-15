import {connect} from 'react-redux'
import View from './view'

const mapStateToProps = (state) => {
  return {pokemon: state.pokemons.item}
}

const mapDispatchToProps = (dispatch, getState) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
