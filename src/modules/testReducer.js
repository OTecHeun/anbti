// Action Type
const _SAVE = 'DATA_SAVE';
 
// Action Create Function
export const resultSave = (saveData) => (
    console.log('saveData :: ', saveData),
    {
    type: _SAVE,
    inputData: {
        result: saveData
    },
})
 
// initState
const initialState = {
    inputData: {
        result: [0,0,0,0,0,0,0,0]
    }
}
 
// Reducer
export default function testReducer(state = initialState, action) {
    switch(action.type) {
        case _SAVE:
            return Object.assign({}, state, {
                inputData: {
                    content: action.inputData.result
                }
            })
        default:
            return state;
    }
}
