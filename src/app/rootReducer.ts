import { combineReducers } from '@reduxjs/toolkit';
import cardsReducer from '../features/cards/cardsSlice';

const rootReducer = combineReducers({
    cards: cardsReducer,
});

export default rootReducer;
