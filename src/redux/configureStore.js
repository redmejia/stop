import { createStore } from "redux";
import { Reducer, initState } from "./reducer";

export const ConfigureStore = () => {
	const store = createStore(
		Reducer, 
		initState
	)
	return store
}
