import { configureStore } from '@reduxjs/toolkit';
import scoreReducer from './Reducer/ScoreA';
import rankReducer from './Reducer/Ranking';

export default configureStore({
    reducer: {
        Score: scoreReducer,
        Rank: rankReducer,
    },
});
