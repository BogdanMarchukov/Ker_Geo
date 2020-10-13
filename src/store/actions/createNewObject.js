import {CREATE_NEW_OBJECT} from './actionTypes'


export function addNewObject(info) {
   return {
       type: CREATE_NEW_OBJECT,
       info: info
   }
}


