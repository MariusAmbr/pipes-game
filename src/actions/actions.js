import Constants from '../constants/actionConstants';

const Actions = {
    createGrid: (Grid) => {
        return {
            type: Constants.CREATING_GRID,
            grid: Grid
        }
    },
    rotateNode: (X,Y) => {
        return {
            type: Constants.ROTATING_NODE,
            x:X,
            y:Y
        }
    }
};
export default Actions;
