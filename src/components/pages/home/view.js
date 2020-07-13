import React from 'react'
import {View, SafeAreaView, Text, FlatList} from 'react-native'
import styles from './styles'
import colors from '../../../assets/colors'

class Home extends React.Component {
  render() {
    const {list} = this.props
    console.log('this.props: ', this.props)
    return (
      <SafeAreaView style={styles.container}>
        {/* <FlatList
          data={list}
          keyExtractor={(item, index) => `pokemon-${item.name}`}
          renderItem={({item}) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        /> */}
        <View>
          <Text>{'Palitopalito30'}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default Home
