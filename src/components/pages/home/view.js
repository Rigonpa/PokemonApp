import React from 'react'
import {View, SafeAreaView, FlatList, RefreshControl} from 'react-native'
import styles from './styles'
import {PokemonCard} from '../../molecules'
import {Actions} from 'react-native-router-flux'
import colors from '../../../assets/colors'
import _ from 'lodash'

class Home extends React.Component {
  componentDidMount() {
    this.props.downloadPokemons()
  }

  _onPokemonSelected = (pokemon) => {
    this.props.savePokemonInRedux(pokemon)
    Actions.push('Detail', {
      title: pokemon.item.name.toUpperCase()
    })
  }

  _renderItem = ({item}) => (
    <PokemonCard pokemon={{item}} onPress={this._onPokemonSelected} />
  )

  _onEndReached = () => {
    const {list, loading} = this.props
    const listSize = _.size(list)
    if (!loading && listSize > 0) {
      this.props.fetchNextPage()
    }
  }

  render() {
    const {list, loading} = this.props
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => `pokemon-${item.name}`}
          renderItem={this._renderItem}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.6}
          refreshControl={
            <RefreshControl
              colors={[colors.black]}
              tintColor={colors.black}
              refreshing={loading}
              onRefresh={this.props.downloadPokemons}
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
