import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		counter: 10
	},
	reducers: {
		increment: (state, /* action */) => {
			state.counter += 1;
		},
	}
});

// Action creators are generated for each case reducer function
export const { increment } = userSlice.actions;