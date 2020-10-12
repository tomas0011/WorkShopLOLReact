import * as constants from './constants';


const initialState = {
        champsName: [],
        resChamp: []
    };

export default function rootReducer(state=initialState, action){
    switch (action.type) {
        case constants.GET_CHAMP:
            return {
                ...state,
                champsName: [].concat(action.payload,state.champsName)
                }
        case constants.RES_CHAMP:
            console.log(action.payload)
            return {
                ...state,
                resChamp: action.payload
            }
        default:
            return state;
    }
}