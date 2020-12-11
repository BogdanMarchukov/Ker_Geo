import Axios from 'axios'
import {START_INIT_TO_STORE, FINISH_INIT_TO_STORE} from './actionTypes'

export function initState() {

    return async dispatch => {
        dispatch(startInit())
       try {
            const response = await Axios.get('https://geo-ker.firebaseio.com/veu.json')
            const veuBase = []
            const name = []
            Object.keys(response.data).forEach((key) => {
                veuBase.push(response.data[key])
                name.push(key)
            })
            dispatch(FinishInit(veuBase, name))
        } catch (e) {
            console.log(e)
        }
    }
}

export function startInit() {
    return {
        type: START_INIT_TO_STORE
    }
}

export function FinishInit(veuBase, key) {
    return {
        type: FINISH_INIT_TO_STORE,
        veuBase,
        key
    }
}

