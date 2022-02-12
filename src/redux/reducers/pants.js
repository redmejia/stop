import * as ActionsType from '../ActionTypes'
const initState = {
	pants: []
}

export const Pants = (state = initState, action) => {
	switch (action.type) {
		case ActionsType.LOAD_PANTS_PRODUCT:
			return { ...state, pants: action.payload }
		default:
			return state
	}
}