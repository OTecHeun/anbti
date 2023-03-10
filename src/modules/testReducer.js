// Action Type
const DATA_SAVE = 'DATA_SAVE';
 
// Action Create Function
export const resultSave = saveData => ({ type: DATA_SAVE, saveData });
 
// initState
const initialState = {
    saveData: [0,0,0,0,0,0,0,0]
}
 
// Reducer
export default function testReducer(state = initialState, action) {
    switch(action.type) {
        case DATA_SAVE:
            return {
                ...state,
                saveData: action.saveData
            }
        default:
            return state;
    }
}
