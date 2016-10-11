import Constants from '../constants/actionConstants';
import { createGrid, rotateNode, changeTemp1, changeTemp2, changeTemp3, changeTemp4, loadOptions, spreadWater } from './reducerFunctions';

export const initialState = {
    pipes: [],
    score: 0,
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

        case Constants.CHANGING_TEMP_1:
            return changeTemp1(state, action.size);

        case Constants.CHANGING_TEMP_2:
            return changeTemp2(state, action.startPipe);

        case Constants.CHANGING_TEMP_3:
            return changeTemp3(state, action.endPipe);

        case Constants.CHANGING_TEMP_4:
            return changeTemp4(state, action.name);

        case Constants.LOADING_OPTIONS:
            return loadOptions(state, action.options);

        case Constants.SPREADING_WATER:
            return spreadWater(state);

        default:
            return state;
    }
};
