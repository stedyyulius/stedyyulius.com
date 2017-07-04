import {combineReducers} from 'redux'

import ecommerceReducers from './ecommerceReducers.js'

export default combineReducers({
  products:ecommerceReducers
})