import {START_SAVE_TO_BASE_XYH, FINISH_SAVE_TO_BASE} from './actionTypes'
import Axios from 'axios'

export function saveUpdatesObjectToBase(activ, info) {
    return async dispatch => {
            dispatch(saveUpdatesObjectToBaseStart())
            const indx = activ.activIndex,
            key = activ.id[indx]
        try {
            await Axios.patch(`https://geo-ker.firebaseio.com/veu/${key}.json`, info)
           dispatch(saveUpdatesObjectToBaseFinish())
        } catch (e) {
            alert(e)
        }
    }

    
}


export function saveUpdatesObjectToBaseStart() {
    return {
        type: START_SAVE_TO_BASE_XYH
    }
}

export function saveUpdatesObjectToBaseFinish() {
    return {
        type: FINISH_SAVE_TO_BASE
    }
    
}