import React from 'react'
import {View, SafeAreaView, Text, FlatList} from 'react-native'
import styles from './styles'
import colors from '../../../assets/colors'
import {color} from 'react-native-reanimated'

class Home extends React.Component {
  componentDidMount() {
    this.props.downloadPokemons()
  }

  _renderItem = ({item}) => (
    <View>
      <Text style={{color: 'white'}}>{item.name}</Text>
    </View>
  )

  render() {
    const {list} = this.props
    console.log('this.props: ', this.props)
    console.log('---------------------------------')
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item, index) => `pokemon-${item.name}`}
          renderItem={this._renderItem}
        />
      </SafeAreaView>
    )
  }
}

export default Home
