import Constants from '../constants/actionConstants';
import { createGrid, rotateNode } from './reducerFunctions';

export const initialState = {
    pipes: [],
};
export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.CREATING_GRID:
            return createGrid(state, action.grid);

        case Constants.ROTATING_NODE:
            return rotateNode(state, action.x, action.y);

        default:
            return state;
    }
};
