import { combineReducers } from 'redux';
import counterReducer from './counter';
import gameReducer from './game';
import { initialState as counterState } from './counter';
import { initialState as gameState } from './game';

export default combineReducers({
    counter: counterReducer,
    game: gameReducer
});

export const initialStates = {
    counterState,
    gameState
}
