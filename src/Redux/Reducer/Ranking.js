import { createSlice } from '@reduxjs/toolkit';

export const RankSlice = createSlice({
    name: 'Rank',
    initialState: {
        value: false
    },
    reducers: {
        setRank: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setRank } = RankSlice.actions;
export default RankSlice.reducer;
