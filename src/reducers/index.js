import { combineReducers } from 'redux';
import gameReducer from './game';
import { initialState as gameState } from './game';

export default combineReducers({
    game: gameReducer
});

export const initialStates = {
    gameState
}
