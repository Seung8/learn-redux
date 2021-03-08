/* counter redux module using ducks pattern */

// create action types.
// moudule identification prefix / action type;
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action create functions
export const setDiff = diff => ({ type: SET_DIFF});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// default state
const initialState = {
	number: 0,
	diff: 1,
};

// reducer
const counter = (state = initialState, action) => {
	switch (action.type) {
		case SET_DIFF:
			return {
				...state,
				diff: action.diff,
			};
		case INCREASE:
			return {
				...state,
				number: state.number + state.diff,
			};
		case DECREASE:
			return {
				...state,
				number: state.number - state.diff,
			};
		default:
			return state;
	}
};

export default counter;
