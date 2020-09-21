import * as constants from './constants'

export function getChamp(champName){
    return { type: constants.GET_CHAMP, payload: champName }
}

export function resolveChamp(champName){
    return { type: constants.RES_CHAMP, payload: champName }
}