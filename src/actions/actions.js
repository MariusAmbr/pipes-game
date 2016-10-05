import Constants from '../constants/actionConstants';

const Actions = {
    increment: () => {
        return{
            type: Constants.INCREMENT_COUNTER
        }
    },
    decrement: () => {
        return{
            type: Constants.DECREMENT_COUNTER
        }
    },
    createGrid: (Grid) => {
        return {
            type: Constants.CREATING_GRID,
            grid: Grid
        }
    }
};
export default Actions;
