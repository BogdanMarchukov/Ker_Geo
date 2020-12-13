import Axios from "axios";
import {INPUT_OFFLINE} from "./actionTypes";
import {initState} from "./initState";

export  function saveOfflineToBase (key, save) {
    return async dispatch => {
        try {
            dispatch(inputHandler())
            await Axios.patch(`https://geo-ker.firebaseio.com/veu/${key}.json`, save)
            localStorage.removeItem('save')
            localStorage.removeItem('key')
            dispatch(initState())
            alert('Сохроннено успешно')
        } catch (e) {
            alert(e)
        }
    }

}

export function inputHandler () {
    return {
        type: INPUT_OFFLINE
    }
}