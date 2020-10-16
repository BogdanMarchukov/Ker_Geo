import {CREATE_NEW_OBJECT} from './actionTypes'
import Axios from 'axios'
import {START_CREATE_NEW_OBJECT} from './actionTypes'


export function addNewObject(info) {
    return async dispatch => {
        dispatch (startCreate())
        try {
            const response = await Axios.post('https://geo-ker.firebaseio.com/veu.json', info)
            dispatch(saveNewObjectToSrore(info, response.data.name))
        } catch (e) {
            console.log(e)
        }
    }

}

export function saveNewObjectToSrore(info, newkey) {
       return {
       type: CREATE_NEW_OBJECT,
       info,
       newkey
   }
}

export function startCreate () {
    return {
        type: START_CREATE_NEW_OBJECT
    }
}

