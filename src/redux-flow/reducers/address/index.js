import createReducer from '../create-reducer'
import { UPDATE_ADDRESS, FETCHING } from './action'

const initialState = {
  address: '',
  city: '',
  code: '',
  district: '',
  state: '',
  status: 1
}

const Address = createReducer(initialState, {
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: true
  }),
  [UPDATE_ADDRESS]: (state, action) => ({
    address: action.payload.address,
    city: action.payload.city,
    code: action.payload.code,
    district: action.payload.district,
    state: action.payload.state,
    status: action.payload.status,
    isFetching: false
  })
})

export default Address
