import axios from 'axios';
import * as constants from './constants'

export function getChamp(champName){
    return { type: constants.GET_CHAMP, payload: champName }
}

export function resolveChamp(champName){

    return function (dispatch) {
		return axios
			.get(`http://localhost:3001/champ/:name`, {withCredentials: true})
			.then(champDetails => {
				dispatch({type:constants.RES_CHAMP, payload: champDetails});
					return champDetails;
			})
			.catch(err => console.log(err));
	};

}