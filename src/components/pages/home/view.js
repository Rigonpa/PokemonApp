import React from 'react'
import {View, SafeAreaView, FlatList, RefreshControl} from 'react-native'
import styles from './styles'
import {PokemonCard} from '../../molecules'
import {Actions} from 'react-native-router-flux'
import colors from '../../../assets/colors'

class Home extends React.Component {
  componentDidMount() {
    this.props.downloadPokemons()
  }

  _onPokemonSelected = (pokemon) => {
    this.props.savePokemonInRedux(pokemon)
    Actions.push('Detail', {title: pokemon.name})
  }

  _renderItem = ({item}) => (
    <PokemonCard pokemon={{item}} onPress={this._onPokemonSelected} />
  )

  render() {
    const {list, loading} = this.props
    console.log('this.props: ', this.props)
    console.log('---------------------------------')
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `pokemon-${item.name}`}
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              colors={[colors.black]}
              tintColor={colors.black}
              refreshing={loading}
              onRefresh={this.props.downloadPokemons()}
              title={'Loading'}
              titleColor={colors.black}
            />
          }
        />
      </SafeAreaView>
    )
  }
}

export default Home
