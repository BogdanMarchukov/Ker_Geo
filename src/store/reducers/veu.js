

const initialState = {
    veu: [

    ],
    loading: false
}


export default function veuReducer(state = initialState, action) {

    switch (action.type) {
        case 'START_INIT_TO_STORE':

            return {
                veu: state.veu,
                loading: true
            }

        case 'FINISH_INIT_TO_STORE':

            return {
                veu: action.veuBase,
                loading: false

            }
        case 'START_CREATE_NEW_OBJECT':

            return {
                veu: state.veu,
                loading: true

            }

        case 'CREATE_NEW_OBJECT':

            return {

                veu: [...state.veu, action.info],
                loading: false
            }
        case 'SAVE_TO_STORE_BOTTOM':
            return {
                veu: state.veu,
                ...state.veu[action.activ.activIndex]['nV' + (action.activ.activIndexVeu + 1)] = {
                    oF: action.infoVeu.bottomSupporting,
                    shF: action.infoVeu.bottomTemplate,
                    anchor: action.infoVeu.bottomAnchor,
                    uzer: action.infoVeu.bottomUzer,
                    date: action.infoVeu.bottomDate
                }
            }
        case 'SAVE_TO_STORE_START':
            return {
                veu: state.veu,
                ...state.veu[action.activ.activIndex]['sV' + (action.activ.activIndexVeu + 1)] = {
                    shF: action.infoVeu.startTemplate,
                    anchor: action.infoVeu.startAnchor,
                    uzer: action.infoVeu.startUzer,
                    date: action.infoVeu.startDate
                }
            }
        case 'SAVE_TO_STORE_CONCRETE':
            return {
                veu: state.veu,
                ...state.veu[action.activ.activIndex]['finV' + (action.activ.activIndexVeu + 1)] = {
                    shF: action.infoVeu.concreteTemplate,
                    anchor: action.infoVeu.concreteAnchor,
                    uzer: action.infoVeu.concreteUzer,
                    date: action.infoVeu.concreteDate
                }
            }
        case 'SAVE_X_Y_H_TO_STORE':
            return {
                veu: state.veu,
                ...state.veu[action.activ.activIndex]['XYH' + (action.activ.activIndexVeu + 1)] = {
                    x: action.info.x,
                    y: action.info.y,
                    h: action.info.h
                }
            }

        default:
            return state
    }
}
