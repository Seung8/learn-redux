// action types
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

// for todo item identification
let nextId = 1;

// action create functions
export const addTodo = text => ({
	type: ADD_TODO,
	todo: {
		id: nextId++,
		text: text,
	},
});

export const toggleTodo = id => ({
	type: TOGGLE_TODO,
	id,
});

// default state
const initialState = [];

/*
result state example

[
	{
		id: number,
		text: string,
		done: bool,
	}
]
*/

// reducer
const todo = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return state.concat(action.todo);
		case TOGGLE_TODO:
			return state.map(
				todo => todo.id === state.id ? { ...todo, done: !state.done } : { ...todo }
			);
		default:
			return state;
	}
};

