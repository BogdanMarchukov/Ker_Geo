const initialState = {
    activObject: 0,
    activIndex:0,
    name: ""
   }
   
   
   export default function veuOptions(state = initialState, action) {
       console.log(action)
       switch (action.type) {
           case 'OPEN_OBJECT':
               return{
                   activObject: action.item.namber,
                   activIndex: action.item.index,
                   name: action.item.name
               }
           default:
               return state
       }
   }