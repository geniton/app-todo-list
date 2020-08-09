import React, { PureComponent } from 'react';
import SearchCep from './search-cep'
import { connect } from 'react-redux'
import { fetchAddress } from 'reducers/address/action-creators'

const SearchCepContainer = ({address,handleSubmit}) => (
   <SearchCep
      {...address}
      handleSubmit={handleSubmit}
   />
)

const mapStateToProps = (state) => ({
   address: state.address
})

const mapDispatchToProps = (dispatch) => {
   return {
      handleSubmit: async (e) => {
         e.preventDefault()
         fetchAddress(dispatch,e.target.cep.value)
      }
   }
}

// const mapDispatchToProps = { updateAddress } Podemos usar o mapDispatachToProps assim tbm, como um objeto

export default connect(mapStateToProps,mapDispatchToProps)(SearchCepContainer);