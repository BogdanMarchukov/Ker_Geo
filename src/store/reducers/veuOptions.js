const initialState = {
    activObject: 0,
    activIndex: 0,
    name: "",
    activIndexVeu: 0,
    id: []
}


export default function veuOptions(state = initialState, action) {

    switch (action.type) {
        case 'FINISH_INIT_TO_STORE':
            return {
                activObject: state.activObject,
                activIndex: state.activIndex,
                name: state.name,
                activIndexVeu: state.activIndexVeu,
                id: action.key

            }
        case 'OPEN_OBJECT':
            return {
                activObject: action.item.namber,
                activIndex: action.item.index,
                name: action.item.name,
                activIndexVeu: state.activIndexVeu,
                id: state.id

            }
        case 'CREATE_ACTIV_INDEX_VEU':
            return {
                activObject: state.activObject,
                activIndex: state.activIndex,
                name: state.name,
                activIndexVeu: action.activIndexVeu,
                id: state.id
            }
        case 'CREATE_NEW_OBJECT':
            return {
                activObject: state.activObject,
                activIndex: state.activIndex,
                name: state.name,
                activIndexVeu: action.activIndexVeu,
                id: [...state.id, action.newkey]
            }
        default:
            return state
    }
}