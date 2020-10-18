
const initialState = {
    none: 'none',
    btn: 'btn_veu',
    btnObj: 'none',
    disabledObj: true
}

export default function clsReducer(state = initialState, action) {
    switch (action.type) {
        case 'CALL_MODEL_WINDOW':
            return {
                none: 'background_createNewObject',
                btn: 'none'
            }
        case 'CLOSE_WINDOW':
            return {
                none: 'none',
                btn: 'btn_veu'
            }
        case 'BTN_OBJECT_DISABLED_OF':
            return {
                none: state.none,
                btn: state.btn,
                btnObj: state.btnObj,
                disabledObj: false
            }

        default:
            return state
    }

}