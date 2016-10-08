import Pipe from '../classes/Pipe';
export function generateGrid(size,startPipeNum,endPipeNum){
    let array2d = [];
    for(x = 0; x < size; x++){
        var innerArray = [];
        for(y = 0; y < size; y++){
            var pipe = new Pipe(x,y,Math.floor((Math.random()*4)),Math.floor((Math.random()*3)));
            innerArray.push(pipe);
        }
        array2d.push(innerArray);
    }
    var i = 0;
    while(i < startPipeNum){
        var randomX = Math.floor((Math.random()*array2d.length));
        var randomY = Math.floor((Math.random()*array2d[randomX].length));
        if(array2d[randomX][randomY].spriteNum!=4){
            var direction = checkSides(randomX,randomY,array2d);
            var pipe = new Pipe(randomX,randomY,4,direction,true);
            array2d[randomX][randomY] = pipe;
            i++;
        }
    }
    i = 0;
    while(i < endPipeNum){
        var randomX = Math.floor((Math.random()*array2d.length));
        var randomY = Math.floor((Math.random()*array2d[randomX].length));
        if(array2d[randomX][randomY].spriteNum!=4){
            var direction = checkSides(randomX,randomY,array2d);
            var pipe = new Pipe(randomX,randomY,4,direction,false);
            array2d[randomX][randomY] = pipe;
            i++;
        }
    }
    return array2d;
}

function checkSides(randomX,randomY,array2d){
    var direction;
    if(randomX==0){
        if(randomY==0){
            direction = Math.floor((Math.random()*2));
        } else if (randomY==(array2d[randomX].length-1)){
            switch (Math.floor((Math.random()*2))){
                case 0:{
                    direction = 3;
                    break;
                }
                case 1:{
                    direction = 0;
                    break;
                }
            }
        } else {
            switch (Math.floor((Math.random()*3))){
                case 0:{
                    direction = 3;
                    break;
                }
                case 1:{
                    direction = 0;
                    break;
                }
                case 2:{
                    direction = 1;
                    break;
                }
            }
        }
    } else if (randomX == array2d.length-1){
        if(randomY==0){
            switch (Math.floor((Math.random()*2))){
                case 0:{
                    direction = 2;
                    break;
                }
                case 1:{
                    direction = 1;
                    break;
                }
            }
        } else if (randomY==(array2d[randomX].length-1)){
            switch (Math.floor((Math.random()*2))){
                case 0:{
                    direction = 3;
                    break;
                }
                case 1:{
                    direction = 2;
                    break;
                }
            }
        } else {
            switch (Math.floor((Math.random()*3))){
                case 0:{
                    direction = 3;
                    break;
                }
                case 1:{
                    direction = 2;
                    break;
                }
                case 2:{
                    direction = 1;
                    break;
                }
            }
        }
    } else if(randomY==0){
        direction = (Math.floor((Math.random()*3)));
    } else if (randomY==(array2d[randomX].length-1)){
        switch (Math.floor((Math.random()*3))){
            case 0:{
                direction = 0;
                break;
            }
            case 1:{
                direction = 2;
                break;
            }
            case 2:{
                direction = 3;
                break;
            }
        }
    } else {
        direction = (Math.floor((Math.random()*4)));
    }
    return direction;
}
