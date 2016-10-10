import Constants from '../constants/actionConstants';
import { createGrid, rotateNode, saveOptions } from './reducerFunctions';

export const initialState = {
    pipes: [],
    size: 5,
    startPipe: 1,
    endPipe: 1,
    name: ''
};
export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.CREATING_GRID:
            return createGrid(state, action.grid);

        case Constants.ROTATING_NODE:
            return rotateNode(state, action.x, action.y);

        case Constants.SAVING_OPTIONS:
            return saveOptions(state, action.size, action.startPipe, action.endPipe, action.name);

        default:
            return state;
    }
};
