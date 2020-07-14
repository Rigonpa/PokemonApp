import React from 'react'
import {View} from 'react-native'

class PokemonCard extends React.Component {
  componentDidMount() {
    this.props.downloadPokemonData(this.props.pokemonId)
    console.log('this.props: ', this.props)
  }

  render() {}
}

export default PokemonCard
