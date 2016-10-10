export function createGrid(state, grid){
    return {...state, pipes:grid };
}

export function rotateNode(state, x, y){
    let newPipes = Object.assign({}, state.pipes);
    newPipes[x][y].rotation = (newPipes[x][y].rotation + 90)%360;
    newPipes[x][y].state = (newPipes[x][y].state + 1)%4;
    newPipes[x][y].accept();
    return {...state, pipes: newPipes};
}

export function saveOptions(state, sizeNum, sNum, eNum, nName){
    return {...state, size: sizeNum, startPipe: sNum, endPipe: eNum, name: nName};
}
