import React from 'react'
import {View, Text, TouchableOpacity, Image} from 'react-native'
import {styles} from './styles'
import _ from 'lodash'

class PokemonCard extends React.Component {
  render() {
    const {pokemon} = this.props
    const image = {uri: pokemon.item.sprites.front_default}
    const pokemonTypes = []
    for (var i = 0; i < _.size(pokemon.item.types); i++) {
      pokemonTypes.push(pokemon.item.types[i].type.name)
    }
    const stringTypes = pokemonTypes.reduce((result, item) => {
      return `${result}, ${item}`
    })
    return (
      <TouchableOpacity>
        <View style={styles.cell}>
          <Image source={image} style={styles.image} />
          <View style={styles.textSection}>
            <Text style={styles.name}>{pokemon.item.name}</Text>
            <Text style={styles.types}>{stringTypes}</Text>
            <Text style={styles.weight}>{`${
              pokemon.item.weight / 10
            } kg`}</Text>
          </View>
        </View>
        <View style={styles.separator} />
      </TouchableOpacity>
    )
  }
}

export default PokemonCard
