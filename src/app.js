'use strict'

import React, { PureComponent } from 'react'
import Form from 'components/form'
import TodosList from 'components/todos-list'
import Filter from 'components/filter'
import SearchCepContainer from 'components/search-cep'
import 'milligram'

class App extends PureComponent {
  constructor () {
    super()
  }

  render () {
    return (
      <div style={{'display': 'flex', 'justifyContent': 'space-around', 'padding': '10'}}>
        <div>
          <Form />
          <TodosList />
          <Filter />
        </div>
        <SearchCepContainer />
      </div>
    )
  }
}

export default App
