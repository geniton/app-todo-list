import React, { PureComponent } from 'react';
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'
import { connect } from 'react-redux'
import { setAddress } from 'reducers/address/action-creators'

class SearchCepContainer extends PureComponent {
   state = {
      isFetching: false
   }

   handleSubmit = async (e) => {
      e.preventDefault()

      const cep = e.target.cep.value

      this.setState({isFetching: true})

      const response = await ajax().get('https://ws.apicep.com/cep.json',{ code : cep })

      this.props.updateAddress(response)

      this.setState({
         isFetching: false
      })
   }

   render() {
      return <SearchCep
         {...this.state}
         {...this.props.address}
         handleSubmit={this.handleSubmit}
       />
   }
}

const mapStateToProps = (state) => ({
   address: state.address
})

const mapDispatchToProps = (dispatch) => {
   return {
      updateAddress: (data) => dispatch(setAddress(data))
   }
}

// const mapDispatchToProps = { updateAddress } Podemos usar o mapDispatachToProps assim tbm, como um objeto

export default connect(mapStateToProps,mapDispatchToProps)(SearchCepContainer);