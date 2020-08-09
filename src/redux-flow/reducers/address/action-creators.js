import { UPDATE_ADDRESS, FETCHING } from './action'
import ajax from '@fdaciuk/ajax'

export const fetchAddress = async (dispatch,cep) => {
  dispatch({
    type: FETCHING
  })
  const response = await ajax().get('https://ws.apicep.com/cep.json',{ code : cep })
  dispatch({
    type: UPDATE_ADDRESS,
    payload: response
  })
}
