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
console.log(store.getState());

// printing listner function for subscribe
const listner = () => {
	const state = store.getState();
	console.log(state);
}

// store.subscribe() basically returns unsubscribe function.
const unsubscribe = store.subscribe(listner);

// action dispatch
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('낄낄'));
store.dispatch(addToList({
	id: 1,
	text: '낄낄'
}));

// for bowser testing
window.store = store;

// for browser unsubscribe testing
window.unsubscribe = unsubscribe;