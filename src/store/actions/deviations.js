import Axios from 'axios'
import {
    FINISH_SAVE_TO_BASE,
    START_SAVE_TO_BASE_BOTTOM,
    START_SAVE_TO_BASE_START,
    START_SAVE_TO_BASE_CONCRETE
} from './actionTypes'

export function saveToBase(activ, save, item, offline) {
    return async dispatch => {
        if (item === "Bottom" && offline === false) {
            dispatch(startSaveBottom())
        } if (item === "Start" && offline === false) {
            dispatch(startSaveStart())
        } if (item === "Concrete" && offline === false) {
            dispatch(startSaveConcrete())
        } if (offline === false) {
            const indx = activ.activIndex,
                key = activ.id[indx]
            try {
                await Axios.patch(`https://geo-ker.firebaseio.com/veu/${key}.json`, save)
                dispatch(finishSave())
            } catch (e) {
                alert(e)
            }
        } else if (offline === true) {
            const indx = activ.activIndex,
                key = activ.id[indx]
            localStorage.setItem('key', key.toString())
            localStorage.setItem('save', JSON.stringify(save))
            alert('Сохраннено локально')
        }

    }
}

export function startSaveBottom() {
    return {
        type: START_SAVE_TO_BASE_BOTTOM
    }
}

export function startSaveStart() {
    return {
        type: START_SAVE_TO_BASE_START
    }
}

export function startSaveConcrete() {
    return {
        type: START_SAVE_TO_BASE_CONCRETE
    }
}

export function finishSave() {

    return {
        type: FINISH_SAVE_TO_BASE
    }
}