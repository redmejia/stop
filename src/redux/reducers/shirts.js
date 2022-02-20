import * as ActionsType from '../ActionTypes'

const initState = {
	shirts : []
}

export const Shirts = (state = initState, action) => {
	switch (action.type) {
		case ActionsType.LOAD_SHIRTS_PRODUCT:
			return {...state, shirts : action.payload.shirts}
		default:
			return state;
	}
}