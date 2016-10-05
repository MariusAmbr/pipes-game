import Constants from '../constants/actionConstants';
import { createGrid } from './reducerFunctions';

export const initialState = {
    pipes: [],
};
export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.CREATING_GRID:
            return createGrid(state, action.grid);

        default:
            return state;
    }
};
