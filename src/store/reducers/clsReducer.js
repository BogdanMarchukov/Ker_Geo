
const initialState = {
    none: 'none',
    btn: 'btn_veu',
    btnObj: 'none',
    disabledObj: true,
    startLoad: null,
    startLoadBottom: false,
    startLoadStart: false,
    startLoadConcrete: false,
    startLoadXYH: false,
    offline: false
}

export default function clsReducer(state = initialState, action) {
    switch (action.type) {
        case 'CALL_MODEL_WINDOW':
            return {
                none: 'background_createNewObject',
                btn: 'none',
                bthObj: state.btnObj,
                disabledObj: state.disabledObj,
                startLoad: state.startLoad,
                startLoadBottom: state.startLoadBottom,
                startLoadStart: state.startLoadStart,
                startLoadConcrete: state.startLoadConcrete,
                startLoadXYH: state.startLoadXYH,
                offline: state.offline
            }
        case 'CLOSE_WINDOW':
            return {
                none: 'none',
                btn: 'btn_veu',
                bthObj: state.btnObj,
                disabledObj: state.disabledObj,
                startLoad: state.startLoad,
                startLoadBottom: state.startLoadBottom,
                startLoadStart: state.startLoadStart,
                startLoadConcrete: state.startLoadConcrete,
                startLoadXYH: state.startLoadXYH,
                offline: state.offline
            }
        case 'BTN_OBJECT_DISABLED_OF':
            return {
                none: state.none,
                btn: state.btn,
                btnObj: state.btnObj,
                disabledObj: false,
                startLoad: state.startLoad,
                startLoadBottom: state.startLoadBottom,
                startLoadStart: state.startLoadStart,
                startLoadConcrete: state.startLoadConcrete,
                startLoadXYH: state.startLoadXYH,
                offline: state.offline
            }
        case 'START_SAVE_TO_BASE_BOTTOM':
            return {
                none: state.none,
                btn: state.btn,
                btnObj: state.btnObj,
                disabledObj: state.disabledObj,
                startLoad: true,
                startLoadBottom: true,
                startLoadStart: false,
                startLoadConcrete: false,
                startLoadXYH: false,
                offline: state.offline
            }
        case 'START_SAVE_TO_BASE_START':
            return {
                none: state.none,
                btn: state.btn,
                btnObj: state.btnObj,
                disabledObj: state.disabledObj,
                startLoadStart: true,
                startLoad: true,
                startLoadBottom: false,
                startLoadConcrete: false,
                startLoadXYH: false,
                offline: state.offline

            }
        case 'START_SAVE_TO_BASE_CONCRETE':
            return {
                none: state.none,
                btn: state.btn,
                btnObj: state.btnObj,
                disabledObj: state.disabledObj,
                startLoadStart: false,
                startLoad: true,
                startLoadBottom: false,
                startLoadConcrete: true,
                startLoadXYH: false,
                offline: state.offline

            }
        case 'START_SAVE_TO_BASE_XYH':
            return {
                none: state.none,
                btn: state.btn,
                btnObj: state.btnObj,
                disabledObj: state.disabledObj,
                startLoadStart: false,
                startLoad: true,
                startLoadBottom: false,
                startLoadConcrete: false,
                startLoadXYH: true,
                offline: state.offline

            }
        case 'FINISH_SAVE_TO_BASE':
            return {
                none: state.none,
                btn: state.btn,
                btnObj: state.btnObj,
                disabledObj: state.disabledObj,
                startLoad: false,
                startLoadBottom: state.startLoadBottom,
                startLoadStart: state.startLoadStart,
                startLoadConcrete: state.startLoadConcrete,
                startLoadXYH: state.startLoadXYH,
                offline: state.offline
            }
        case 'CREATE_ACTIV_INDEX_VEU':
            return {
                none: state.none,
                btn: state.btn,
                btnObj: state.btnObj,
                disabledObj: state.disabledObj,
                startLoad: null,
                startLoadBottom: true,
                startLoadStart: true,
                startLoadConcrete: true,
                startLoadXYH: true,
                offline: state.offline
            }
        case 'INPUT_OFFLINE':
            return {
                ...state,
                offline: !state.offline


            }


        default:
            return state
    }

}