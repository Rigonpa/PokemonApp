import React from 'react'
import {Router, Scene, Stack} from 'react-native-router-flux'
import {Home} from '../../pages'
import store from '../../../config/redux'
import {Provider} from 'react-redux'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={'root'}>
            <Scene key={'Home'} component={Home} />
          </Stack>
        </Router>
      </Provider>
    )
  }
}

export default App
