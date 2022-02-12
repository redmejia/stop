import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import looger from 'redux-logger'
import thunk from 'redux-thunk';
import { Pants } from "../redux/reducers/pants";
import { Shirts } from "../redux/reducers/shirts";
import { Images } from "../redux/reducers/arrivals";

const rootReducer = combineReducers({
	pants: Pants,
	shirts :Shirts,
	images : Images

})

export const ConfigureStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk, looger))
	)
	return store
}
