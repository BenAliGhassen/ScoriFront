import { createSlice } from '@reduxjs/toolkit';

export const ScoreSlice = createSlice({
    name: 'Score',
    initialState: {
        value: 0
    },
    reducers: {
        setScore: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setScore } = ScoreSlice.actions;
export default ScoreSlice.reducer;
