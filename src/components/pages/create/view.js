import React from 'react'
import {Image, Text, SafeAreaView, View, TextInput, Button} from 'react-native'
import {styles} from './styles'
import {TouchableOpacity} from 'react-native-gesture-handler'

class Create extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      name: '',
      types: '',
      weight: '',
      height: '',
      moves: ''
    }
  }
  render() {
    const {image, name, types, weight, height, moves} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.image} />
        <View style={styles.nameCell}>
          <Text style={styles.nameLabel}>{'Name: '}</Text>
          <TextInput
            style={styles.nameValue}
            value={name}
            onChangeText={(text) => this.setState({name: text})}
          />
        </View>
        <View style={styles.typesCell}>
          <Text style={styles.typesLabel}>{'Types: '}</Text>
          <TextInput
            style={styles.typesValue}
            value={types}
            onChangeText={(text) => this.setState({types: text})}
          />
        </View>
        <View style={styles.weightCell}>
          <Text style={styles.weightLabel}>{'Weight: '}</Text>
          <TextInput
            style={styles.weightValue}
            value={weight}
            onChangeText={(text) => this.setState({weight: text})}
          />
        </View>
        <View style={styles.heightCell}>
          <Text style={styles.heightLabel}>{'Height: '}</Text>
          <TextInput
            style={styles.heightValue}
            value={height}
            onChangeText={(text) => this.setState({height: text})}
          />
        </View>
        <View style={styles.movesCell}>
          <Text style={styles.movesLabel}>{'Moves: '}</Text>
          <TextInput
            style={styles.movesValue}
            value={moves}
            onChangeText={(text) => this.setState({moves: text})}
            multiline={true}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => onPress()}>
          <Text style={styles.buttonText}>{'Save'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default Create
