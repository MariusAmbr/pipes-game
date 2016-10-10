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
    },
    saveOptions: (Size, StartPipe, EndPipe, Name) => {
        return {
            type: Constants.SAVING_OPTIONS,
            size: Size,
            startPipe: StartPipe,
            endPipe: EndPipe,
            name: Name
        }
    }
};
export default Actions;
