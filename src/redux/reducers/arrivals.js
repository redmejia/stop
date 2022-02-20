import * as ActionsType from '../ActionTypes'

const initState = {
	images : []
}

export const Images = (state = initState, action) => {
	switch (action.type) {
		case ActionsType.LOAD_IMAGES_ARRIVALS:
			console.log("images arrivals",action.payload.arrivals);
			return {...state, images : action.payload.arrivals}			
	
		default:
			return state
	}
}