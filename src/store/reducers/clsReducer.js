
const initialState = {
    none : 'none',
    btn : 'btn_veu'
}

export default function clsReducer (state = initialState, action) {
    switch(action.type) {
        case 'CALL_MODEL_WINDOW' :
            return {
                none: 'background_createNewObject',
                btn: 'none'
            }
        case 'CLOSE_WINDOW' :
            return {
                none : 'none',
                btn : 'btn_veu'
            }

        default:
            return state
    }

}