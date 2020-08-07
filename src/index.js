'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './redux-flow/configure-store'
import App from './app'

const store = configureStore()

function lazyAction () {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: 'todos:ADD_TODO',
        payload: {
          text: 'Lazy Action',
          id: '123'
        }
      })
    })
  }
}

store.dispatch(lazyAction())

// const initialState = {
//   todos: [{
//     text: 'auto',
//     id: '1',
//     completed: false
//   }]
// }
//createReducer aceita um segundo argumento que é o initialState, util para caso vc queria trazer dados de um usuario logado.

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })

  module.hot.accept('reducers', () => {
    const NextReducer = require('reducers').default
    store.replaceReducer(NextReducer)
  })
}
