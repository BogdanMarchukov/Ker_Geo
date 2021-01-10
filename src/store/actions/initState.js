import Axios from 'axios'
import {START_INIT_TO_STORE, FINISH_INIT_TO_STORE} from './actionTypes'

export function initState() {

    return async dispatch => {
        dispatch(startInit())
        try {
            const response = await Axios.get('https://geo-ker.firebaseio.com/veu.json')
            const responseFieldList = await Axios.get('https://geo-ker.firebaseio.com/options.json')
            const filedList = {};
            const veuBase = [];
            const name = [];
            Object.keys(response.data).forEach((key) => {
                veuBase.push(response.data[key])
                name.push(key)
            })
            if (responseFieldList.data !== null) {
                Object.keys(responseFieldList.data).forEach(key => {
                    filedList[key] = responseFieldList.data[key]
                })
                dispatch(FinishInit(veuBase, name, filedList))
            }
            else

            dispatch(FinishInit(veuBase, name, filedList))
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

export function FinishInit(veuBase, key, filedList) {
    return {
        type: FINISH_INIT_TO_STORE,
        veuBase,
        key,
        filedList
    }
}

