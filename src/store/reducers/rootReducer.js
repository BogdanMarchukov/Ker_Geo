import {combineReducers} from 'redux'
import veuReducer from '../reducers/veu'
import clsReducer from '../reducers/clsReducer'

export default combineReducers({
    veu: veuReducer,
    cls: clsReducer
})