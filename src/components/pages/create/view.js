import React from 'react'
import {
  Image,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import {styles} from './styles'
import ImagePicker from 'react-native-image-picker'
import {IMAGE_OPTIONS} from '../../../config/images'

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

  _onSubmit = () => {
    const {image, name, types, weight, height, moves} = this.state
    if (
      (image != null,
      name != '',
      types != '',
      weight != '',
      height != '',
      moves != '')
    ) {
      const data = {
        image: image,
        // image && image.data ? `data:image/jpeg;base64,${image.data}` : null,
        name: name,
        types: types,
        weight: weight,
        height: height,
        moves: moves
      }
      this.props.insertNewPokemonInList(data)
    }
  }

  _onSelectImage = () => {
    ImagePicker.showImagePicker(IMAGE_OPTIONS, (response) => {
      if (response.uri) {
        this.setState({image: response})
      }
    })
  }

  render() {
    const {image, name, types, weight, height, moves} = this.state
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={this._onSelectImage} style={styles.image}>
          <Image
            source={image ? {uri: image.uri} : null}
            style={styles.imageBackground}
          />
          <Text>{image ? null : 'Press to pick image'}</Text>
        </TouchableOpacity>
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
        <TouchableOpacity style={styles.button} onPress={this._onSubmit}>
          <Text style={styles.buttonText}>{'Save'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default Create
