import Axios from 'axios'
import {
    FINISH_SAVE_TO_BASE,
    START_SAVE_TO_BASE_BOTTOM,
    START_SAVE_TO_BASE_START,
    START_SAVE_TO_BASE_CONCRETE
} from './actionTypes'

export function saveToBase(activ, save, item) {
    return async dispatch => {
        if (item === "Bottom") {
            dispatch(startSaveBottom())
        } if (item === "Start") {
            dispatch(startSaveStart())
        } if (item === "Concrete") {
            dispatch(startSaveConcrete())
        }
        const indx = activ.activIndex,
            key = activ.id[indx]
        try {
            await Axios.patch(`https://geo-ker.firebaseio.com/veu/${key}.json`, save)
            dispatch(finishSave())
        } catch (e) {
            alert(e)
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
    console.log("Finish")
    return {
        type: FINISH_SAVE_TO_BASE
    }
}