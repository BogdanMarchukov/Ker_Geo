const initialState = {
    activObject: 0,
    activIndex:0,
    name: "",
    activIndexVeu:0
   }
   
   
   export default function veuOptions(state = initialState, action) {
       switch (action.type) {
           case 'OPEN_OBJECT':
               return{
                   activObject: action.item.namber,
                   activIndex: action.item.index,
                   name: action.item.name,
                   activIndexVeu: state.activIndexVeu

               }
            case 'CREATE_ACTIV_INDEX_VEU':
                return{
                    activObject: state.activObject,
                    activIndex: state.activIndex,
                    name: state.name,
                    activIndexVeu: action.activIndexVeu
                }
           default:
               return state
       }
   }