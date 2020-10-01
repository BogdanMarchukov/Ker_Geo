
const initialState = {
 veu: [
   {name: "Черный яр", namber: "12"}
 ]
}


export default function veuReducer(state = initialState, action) {
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
        default:
            return state
    }
}
