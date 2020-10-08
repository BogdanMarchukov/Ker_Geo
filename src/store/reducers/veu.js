

const initialState = {
    veu: [
        { name: "Черный яр", namber: "15", disabled: false, id: 1 },
        { name: "Котово", namber: "25", disabled: false, id: 2 },
        { name: "Гуково", namber: "21", disabled: false, id: 3 }

    ]


}


export default function veuReducer(state = initialState, action) {
    // console.log(action)
    let item = action.info
    let sum = []
    if (item !== undefined) {
        sum = [item]
        state.veu.map((element) => {

            sum.push(element)
        })
    }
    switch (action.type) {
        case 'CREATE_NEW_OBJECT':
            return {
                veu: sum
            }
        case 'SAVE_TO_STORE_BOTTOM':
            return {
                veu: state.veu,
                ...state.veu[action.activ.activIndex].['nV' + (action.activ.activIndexVeu + 1)] = {
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
                ...state.veu[action.activ.activIndex].['sV' + (action.activ.activIndexVeu + 1)] = {
                    shF: action.infoVeu.startTemplate,
                    anchor: action.infoVeu.startAnchor,
                    uzer: action.infoVeu.startUzer,
                    date: action.infoVeu.startDate
                }
            }
        case 'SAVE_TO_STORE_CONCRETE':
            return {
                veu: state.veu,
                ...state.veu[action.activ.activIndex].['finV' + (action.activ.activIndexVeu + 1)] = {
                    shF: action.infoVeu.concreteTemplate,
                    anchor: action.infoVeu.concreteAnchor,
                    uzer: action.infoVeu.concreteUzer,
                    date: action.infoVeu.concreteDate
                }
            }

        default:
            return state
    }
}
