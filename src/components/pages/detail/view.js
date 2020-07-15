import React from 'react'
import {Image, Text, SafeAreaView, View, min} from 'react-native'
import {styles} from './styles'
import _ from 'lodash'

class Detail extends React.Component {
  render() {
    const {pokemon} = this.props
    const image = {uri: pokemon.item.sprites.front_default}
    const pokemonTypes = []
    const pokemonMoves = []
    for (var i = 0; i < _.size(pokemon.item.types); i++) {
      pokemonTypes.push(pokemon.item.types[i].type.name)
    }
    const stringTypes = pokemonTypes.reduce((result, item) => {
      return `${result}, ${item}`
    })
    const limit =
      30 <= _.size(pokemon.item.moves) ? 30 : _.size(pokemon.item.moves)
    for (var i = 0; i < limit; i++) {
      pokemonMoves.push(pokemon.item.moves[i].move.name)
    }
    const stringMoves = pokemonMoves.reduce((result, item) => {
      return `${result}, ${item}`
    })
    return (
      <SafeAreaView style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.nameCell}>
          <Text style={styles.nameLabel}>{'Name: '}</Text>
          <Text style={styles.nameValue}>{pokemon.item.name}</Text>
        </View>
        <View style={styles.typesCell}>
          <Text style={styles.typesLabel}>{'Types: '}</Text>
          <Text style={styles.typesValue}>{stringTypes}</Text>
        </View>
        <View style={styles.weightCell}>
          <Text style={styles.weightLabel}>{'Weight: '}</Text>
          <Text style={styles.weightValue}>{`${
            pokemon.item.weight / 10
          } kg`}</Text>
        </View>
        <View style={styles.heightCell}>
          <Text style={styles.heightLabel}>{'Height: '}</Text>
          <Text style={styles.heightValue}>{`${
            pokemon.item.height / 10
          } mts`}</Text>
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
