import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {styles} from './styles'
import _ from 'lodash'

class PokemonCard extends React.Component {
  render() {
    const {pokemon, onPress} = this.props

    var image = null
    var name = null
    const pokemonTypes = []
    var stringTypes = null
    var weight = null

    if (pokemon.item.id !== undefined) {
      // Api pokemon
      image = {uri: pokemon.item.sprites.front_default}
      name = pokemon.item.name
      for (var i = 0; i < _.size(pokemon.item.types); i++) {
        pokemonTypes.push(pokemon.item.types[i].type.name)
      }
      stringTypes = pokemonTypes.reduce((result, item) => {
        return `${result}, ${item}`
      })
      weight = `${pokemon.item.weight / 10} kg`
    } else {
      // Manual pokemon
      image = {uri: pokemon.item.image.uri}
      name = pokemon.item.name
      stringTypes = pokemon.item.types
      weight = pokemon.item.weight
    }

    return (
      <TouchableOpacity onPress={() => onPress(pokemon)}>
        <View style={styles.cell}>
          <Image source={image} style={styles.image} />
          <View style={styles.textSection}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.types}>{stringTypes}</Text>
            <Text style={styles.weight}>{weight}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    )
  }
}

export default PokemonCard
