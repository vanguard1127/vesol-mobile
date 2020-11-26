'use-strict'

import { combineReducers, createStore } from 'redux';
import UserDataReducer from './user/reducer';


const AppReducers = combineReducers({
  UserDataReducer
});

const rootReducer = (state, action) => {
	return AppReducers(state,action);
}

let store = createStore(rootReducer);


export default store;
