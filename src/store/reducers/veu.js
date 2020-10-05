
const initialState = {
 veu: [
    {name: "Черный яр", namber: "15", disabled: false, id:1},
    {name: "Котово", namber: "25", disabled: false, id:2},
    {name: "Гуково", namber: "21", disabled: false, id:3}
   
 ]

}


export default function veuReducer(state = initialState, action) {
    let indexObject = action.indexObject
    let indexVeu = action.indexVeu
    let value = action.value
    console.log(indexObject)
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
        case 'ADD_BOTTOM_SUPPORTING':
            return {
            state: state.veu[indexObject].veu = value
            }
        default:
            return state
    }
}
