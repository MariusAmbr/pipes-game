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

export function loadImages(){
    let image1 = require('../res/1.png');
    let image2 = require('../res/2.png');
    let image3 = require('../res/3.png');
    let image4 = require('../res/4.png');
    let image5 = require('../res/5.png');
    let image1_2 = require('../res/11.png');
    let image2_2 = require('../res/22.png');
    let image3_2 = require('../res/33.png');
    let image4_2 = require('../res/44.png');
    let image5_2 = require('../res/55.png');
    let images = {
        img1: image1, img1_2: image1_2,
        img2: image2, img2_2: image2_2,
        img3: image3, img3_2: image3_2,
        img4: image4, img4_2: image4_2,
        img5: image5, img5_2: image5_2
    }
    return images;
}
