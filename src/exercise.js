import { createStore } from "redux";

// initial redux state
const initialState = {
	counter: 0,
	text: '',
	list: [],
};

// action types
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action create functions
const increase = () => ({
	type: INCREASE,
});

const decrease = () => ({
	type: DECREASE,
});

const changeText = text => ({
	type: CHANGE_TEXT,
	text: text,
});

const addToList = item => ({
	type: ADD_TO_LIST,
	item,
});

// reducer
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREASE:
			return {
				...state,
				counter: state.counter + 1,
			};
		case DECREASE:
			return {
				...state,
				counter: state.counter - 1,
			};
		case CHANGE_TEXT:
			return {
				...state,
				text: action.text,
			};
		case ADD_TO_LIST:
			return {
				...state,
				list: state.list.concat(action.item),
			};
		default:
			return state;
	}
}

// store
const store = createStore(reducer);
// console.log(store.getStore());
