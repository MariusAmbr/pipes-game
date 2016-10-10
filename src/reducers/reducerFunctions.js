export function createGrid(state, grid){
    return {...state, pipes:grid };
}

export function rotateNode(state, x, y){
    let newPipes = state.pipes.slice();
    newPipes[x][y].rotation = (newPipes[x][y].rotation + 90)%360;
    newPipes[x][y].state = (newPipes[x][y].state + 1)%4;
    newPipes[x][y].accept();
    return {...state, pipes: newPipes};
}

export function changeTemp1(state, a){
    return {...state, size:a};
}

export function changeTemp2(state, a){
    return {...state, startPipe:a};
}

export function changeTemp3(state, a){
    return {...state, endPipe:a};
}

export function changeTemp4(state, a){
    return {...state, name:a};
}

export function loadOptions(state, obj){
    return {...state, size: obj.size, startPipe: obj.startPipe, endPipe: obj.endPipe, name: obj.name};
}
