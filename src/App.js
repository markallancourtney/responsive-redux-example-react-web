import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { store } from './store'

import Example from './Example'

class App extends Component {
  render () {
    return (
      <Provider
        store={store}
      >
        <Example />
      </Provider>
    )
  }
}

export default App
