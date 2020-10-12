import axios from 'axios';
import * as constants from './constants'

export function getChamp(champName){

	   return function (dispatch) {
		return axios					// req.body <= todosloschampions 
			.get(`http://localhost:9000/champ/${champName}`, {withCredentials: true})
			.then(champDetails => {
				dispatch({type: constants.GET_CHAMP, payload: champDetails.data})
				return champDetails;
			})
			.catch(err => console.log(err));
	};
}

export function resolveChamp(){
    return function (dispatch) {
		return axios				
			.get(`http://localhost:9000/champ/champions`, {withCredentials: true})
			.then(champDetails => {
				dispatch({type:constants.RES_CHAMP, payload: champDetails});
					return champDetails;
			})
			.catch(err => console.log(err));
	};

}