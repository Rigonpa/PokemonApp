import React from 'react'
import {Image, Text, SafeAreaView, View} from 'react-native'
import {styles} from './styles'
import _ from 'lodash'

class Detail extends React.Component {
  render() {
    const {pokemon} = this.props

    var image = null
    var name = null
    const pokemonTypes = []
    var stringTypes = null
    var weight = null
    var height = null
    const pokemonMoves = []
    var stringMoves

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
      height = `${pokemon.item.height / 10} mts`
      const limit =
        30 <= _.size(pokemon.item.moves) ? 30 : _.size(pokemon.item.moves)
      for (var i = 0; i < limit; i++) {
        pokemonMoves.push(pokemon.item.moves[i].move.name)
      }
      stringMoves = pokemonMoves.reduce((result, item) => {
        return `${result}, ${item}`
      })
    } else {
      // Manual pokemon
      image = {uri: pokemon.item.image.uri}
      name = pokemon.item.name
      stringTypes = pokemon.item.types
      weight = pokemon.item.weight
      height = pokemon.item.height
      stringMoves = pokemon.item.moves
    }

    return (
      <SafeAreaView style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.nameCell}>
          <Text style={styles.nameLabel}>{'Name: '}</Text>
          <Text style={styles.nameValue}>{name}</Text>
        </View>
        <View style={styles.typesCell}>
          <Text style={styles.typesLabel}>{'Types: '}</Text>
          <Text style={styles.typesValue}>{stringTypes}</Text>
        </View>
        <View style={styles.weightCell}>
          <Text style={styles.weightLabel}>{'Weight: '}</Text>
          <Text style={styles.weightValue}>{weight}</Text>
        </View>
        <View style={styles.heightCell}>
          <Text style={styles.heightLabel}>{'Height: '}</Text>
          <Text style={styles.heightValue}>{height}</Text>
        </View>
        <View style={styles.movesCell}>
          <Text style={styles.movesLabel}>{'Moves: '}</Text>
          <Text style={styles.movesValue}>{stringMoves}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default Detail
