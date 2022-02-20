import * as ActionsType from './ActionTypes'
import { baseURL } from './baseURL'

// PRODUCT PANTS
export const loadingPantProduct = pants => ({
	type: ActionsType.LOAD_PANTS_PRODUCT,
	payload: pants,
})

export const fetchPantsProduct = () => dispatch => {

	return fetch(baseURL + "pants")
		.then(reponse => {
			if (reponse.ok) {
				return reponse
			}
		})
		.then(reponse => reponse.json())
		.then(data => dispatch(loadingPantProduct(data)))
		.catch(error => {
			console.log("this is the error ", error);
		})
}

// PRODUCT SHIRTS
export const loadingShirtProduct = shirts => ({
	type: ActionsType.LOAD_SHIRTS_PRODUCT,
	payload : shirts
})

export const fetchShirtsProduct = () => dispatch => {
	return fetch(baseURL + "shirts")
		.then(reponse => {
			if (reponse.ok) {
				return reponse
			}
		})
		.then(reponse => reponse.json())
		.then(data => dispatch(loadingShirtProduct(data)))
		.catch(error => {
			console.log("this is the error ", error);
		})
}


export const loadingArrivalsProduct = images => ({
	type : ActionsType.LOAD_IMAGES_ARRIVALS,
	payload : images
})

export const fetchImagesArrivalsProduct = () => dispatch => {
	return fetch(baseURL + "arrivals") // images
		.then(reponse => {
			if (reponse.ok) {
				return reponse
			}
		})
		.then(reponse => reponse.json())
		.then(data => dispatch(loadingArrivalsProduct(data)))
		.catch(error => {
			console.log("this is the error ", error);
		})
}