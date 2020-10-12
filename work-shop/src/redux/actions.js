import axios from 'axios';
import * as constants from './constants'

export function getChamp(champName){

	   return function (dispatch) {
		return axios					// req.body <= todosloschampions 
			.post(`http://localhost:9000/champ/${champName}`, {withCredentials: true})
			.then(champDetails => {
				if(!champDetails.data.stat)
					throw new Error('Nada')
						dispatch({type: constants.GET_CHAMP, payload: champDetails.data})
				return champDetails.data;
			})
			.catch(err => console.log(err));
	};
}


export function getAllChamp(){
	return function (dispatch) {
		console.log('asd')
	return  axios					// req.body <= todosloschampions 
		 .get(`http://localhost:9000/champ/all`, {withCredentials: true})
		 .then(champs => {
			 console.log('asldjskal',champs.data)
					 dispatch({type: constants.GETALLCHAMP, payload: champs.data})
			 return champs.data;
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

	export function removeBattle(id){
					return( {type:constants.REMOVEBATTLE, payload: Number(id)})
		};

	export function addBattle(champ){
			return( {type:constants.ADDBATTLE, payload: champ})
};

