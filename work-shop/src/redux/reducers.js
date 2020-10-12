import * as constants from './constants';


const initialState = {
        champsName: [],
        resChamp: [],
        battle:[]

    };


    
    //     {
    //         "id": 1,
    //         "name": "Morgana",
    //         "description": "Conflicted between her celestial and mortal natures, Morgana bound her wings to embrace humanity, and inflicts her pain and bitterness upon the dishonest and the corrupt. She rejects laws and traditions she believes are unjust, and fights for truth from the shadows of Demacia—even as others seek to repress it—by casting shields and chains of dark fire. More than anything else, Morgana truly believes that even the banished and outcast may one day rise again.",
    //         "img": "http://ddragon.leagueoflegends.com/cdn/10.19.1/img/champion/Morgana.png",
    //         "stat": {
    //             "id": 1,
    //             "hp": 560,
    //             "attack": 56,
    //             "defense": 25,
    //             "attackSpeed": 0.625,
    //             "createdAt": "2020-10-12T00:50:02.257Z",
    //             "updatedAt": "2020-10-12T00:50:02.260Z",
    //             "championId": 1
    //         }
    

export default function rootReducer(state=initialState, action){
    switch (action.type) {
        case constants.GET_CHAMP:
            return {
                ...state,
                champsName: [].concat(action.payload,state.champsName)
                }
                 case constants.GETALLCHAMP:
            return {
                ...state,
                champsName: action.payload
                }


        case constants.RES_CHAMP:
            console.log(action.payload)
            return {
                ...state,
                resChamp: action.payload
            }

            case constants.ADDBATTLE:
                return {
                    ...state,
                    battle: [].concat(action.payload)
                    }

            case constants.REMOVEBATTLE:
                return {
                    ...state,
                    battle: state.battle.filter(champ=> Number(champ.id) !== action.payload)
                    }

        default:
            return state;
    }
}