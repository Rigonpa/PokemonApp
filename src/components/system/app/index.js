import React from 'react'
import {Router, Scene, Stack, Actions} from 'react-native-router-flux'
import {Home, Detail, Create} from '../../pages'
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
              rightTitle={'New'}
              onRight={() => Actions.push('Create')}
              rightButtonTextStyle={{color: colors.white, fontSize: 14}}
            />
            <Scene
              key={'Detail'}
              component={Detail}
              titleStyle={{color: colors.white}}
              backButtonTextStyle={{color: colors.white}}
              backButtonTintColor={colors.white}
            />
            <Scene
              key={'Create'}
              component={Create}
              titleStyle={{color: colors.white}}
              backButtonTextStyle={{color: colors.white}}
              backButtonTintColor={colors.white}
              title={'Create pokemon'}
              initial
            />
          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App
