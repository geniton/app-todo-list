import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'reducers/visibility-filter/actions'
import { setVisibilityFilter } from 'reducers/visibility-filter/actions-creators'
import FilterLink from './filter-link'

class Filter extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { activeFilter, handleFilter } = this.props

    return (
      <div>
        <h3>Mostrar</h3>
        {visibilityFilter.map((item) =>
          <FilterLink
            key={item.action}
            action={item.action}
            onClick={handleFilter(item.action)}
            activeFilter={activeFilter}
          >
            {item.label}
          </FilterLink>
        )}
      </div>
    )
  }
}

const visibilityFilter = [
  {
    label: 'Todos',
    action: SHOW_ALL
  },
  {
    label: 'Finalizados',
    action: SHOW_COMPLETED
  },
  {
    label: 'A fazer',
    action: SHOW_ACTIVE
  }
]

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (action) => (e) => {
    e.preventDefault()
    dispatch(setVisibilityFilter(action))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
