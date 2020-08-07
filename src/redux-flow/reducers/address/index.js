import createReducer from '../create-reducer'
import { UPDATE_ADDRESS } from './action'

const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: 1
}

const Address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => ({
    address: action.payload.address,
    city: action.payload.city,
    code: action.payload.code,
    district: action.payload.district,
    state: action.payload.state,
    status: action.payload.status
  })
})

export default Address
