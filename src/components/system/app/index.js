import React from 'react'
import {Router, Scene, Stack} from 'react-native-router-flux'
import {Home} from '../../pages'
import store from '../../../config/redux'
import {Provider} from 'react-redux'
import colors from '../../../assets/colors'
import {StatusBar} from 'react-native'

class App extends React.Component {
  constructor(props) {
    super(props)
    StatusBar.setBarStyle('light-content', true)
  }
  render() {
    return (
      <Provider store={store}>
        <Router navigationBarStyle={{backgroundColor: colors.navBar}}>
          <Stack key={'root'}>
            <Scene
              key={'Home'}
              component={Home}
              title={'Pokedex'}
              titleStyle={{color: colors.white}}
            />
          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App
