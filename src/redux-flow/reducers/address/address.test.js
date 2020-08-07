import {expect} from 'chai'
import Address from './index'
import deepFreeze from 'deep-freeze'
import { UPDATE_ADDRESS } from './action'

it('should UPDATE_ADDRESS', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 1
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
    payload: {
      address: '3ª Travessa General Costa e Silva',
      city: 'Camaragibe',
      code: '54771-783',
      district: 'Alberto Maia',
      state: 'PE',
      status: 1
    }
  })

  const after = {
    address: '3ª Travessa General Costa e Silva',
    city: 'Camaragibe',
    code: '54771-783',
    district: 'Alberto Maia',
    state: 'PE',
    status: 1
  }

  expect(Address(before, action)).to.be.deep.equal(after)
})
