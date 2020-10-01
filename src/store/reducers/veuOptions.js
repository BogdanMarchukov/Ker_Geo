const initialState = {
    activObject: 10
   }
   
   
   export default function veuOptions(state = initialState, action) {
      
       switch (action.type) {
           case 'OPEN_OBJECT':
               return{
                   activObject: action.item
               }
           default:
               return state
       }
   }