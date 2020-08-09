import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { fetchAddress } from 'reducers/address/action-creators'

const searchCep = ({
   address,
   city,
   code,
   district,
   state,
   handleSubmit,
   status,
   isFetching
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' id='' />
      <button type='submit' disabled={isFetching}>{isFetching ? 'Buscando...' : 'Buscar Endereço'}</button>
    </form>

    { status != 200 && <p>CEP não encontrado</p>}

    { status === 200 &&
    <table>
      <thead>
        <tr>
          <td>CEP</td>
          <td>Endereço</td>
          <td>Bairro</td>
          <td>Cidade</td>
          <td>Estado</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{code}</td>
          <td>{address}</td>
          <td>{district}</td>
          <td>{city}</td>
          <td>{state}</td>
        </tr>
      </tbody>
    </table>
      }
  </div>
)

const mapStateToProps = (state) => state.address

const mapDispatchToProps = (dispatch) => {
   return {
      handleSubmit: async (e) => {
         e.preventDefault()
         fetchAddress(dispatch,e.target.cep.value)
      }
   }
}

// const mapDispatchToProps = { updateAddress } Podemos usar o mapDispatachToProps assim tbm, como um objeto

export default connect(mapStateToProps,mapDispatchToProps)(searchCep);