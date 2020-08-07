import { UPDATE_ADDRESS } from './action'
import ajax from '@fdaciuk/ajax'

export const fetchAddress = async (cep) => {
  const response = await ajax().get('https://ws.apicep.com/cep.json',{ code : cep })
  return setAddress(response)
}

export const setAddress = (data) => ({
  type: UPDATE_ADDRESS,
  payload: data
})
