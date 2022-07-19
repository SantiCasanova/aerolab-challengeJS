import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: []
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload.user
		},
		addPoints: (state, action) => {
			state.user.points += action.payload
		}
	}
});

// Action creators are generated for each case reducer function
export const { setUser, addPoints } = userSlice.actions;