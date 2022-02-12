import * as ActionsType from '../ActionTypes'

const initState = {
	images : []
}

export const Images = (state = initState, action) => {
	switch (action.type) {
		case ActionsType.LOAD_IMAGES_ARRIVALS:
			return {...state, images : action.payload}			
	
		default:
			return state
	}
}