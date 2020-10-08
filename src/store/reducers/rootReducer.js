import {combineReducers} from 'redux'
import veuReducer from '../reducers/veu'
import clsReducer from '../reducers/clsReducer'
import veuOptions from './veuOptions'


export default combineReducers({
    veu: veuReducer,
    cls: clsReducer,
    imemVeu: veuOptions

})