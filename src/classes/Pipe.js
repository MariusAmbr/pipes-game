export default class Pipe {
    constructor(x,y,spriteNum,state,filled = false){
        this.filled = filled;
        this.x = x;
        this.y = y;
        this.spriteNum = spriteNum;
        this.state = state; // state of the pipe e.g: 0 is an unturned pipe, while 1 is a sideways turned pipe (if sprite is 0);
        var rotation = 0;
        switch(state){
            case 0:{
                rotation = 0;
                break;
            }
            case 1:{
                rotation = 90;
                break;
            }
            case 2:{
                rotation = 180;
                break;
            }
            case 3:{
                rotation = 270;
                break;
            }
        }
        this.rotation = rotation;
        //this.sprite = s_pipe[spriteNum];
        this.accept = function (){
            var accepts = [];
            switch(this.spriteNum){
                case 0:{
                    switch(this.state){
                        case 0: {accepts = [{x:this.x,y:this.y-1},{x:this.x,y:this.y+1}]; break;}
                        case 1: {accepts = [{x:this.x+1,y:this.y},{x:this.x-1,y:this.y}]; break;}
                        case 2: {accepts = [{x:this.x,y:this.y-1},{x:this.x,y:this.y+1}]; break;}
                        case 3: {accepts = [{x:this.x+1,y:this.y},{x:this.x-1,y:this.y}]; break;}
                    }
                    break;
                }
                case 1:{
                    switch(this.state){
                        case 0: {accepts = [{x:this.x,y:this.y-1},{x:this.x,y:this.y+1},{x:this.x+1,y:this.y}]; break;}
                        case 1: {accepts = [{x:this.x+1,y:this.y},{x:this.x-1,y:this.y},{x:this.x,y:this.y+1}]; break;}
                        case 2: {accepts = [{x:this.x,y:this.y-1},{x:this.x,y:this.y+1},{x:this.x-1,y:this.y}]; break;}
                        case 3: {accepts = [{x:this.x+1,y:this.y},{x:this.x-1,y:this.y},{x:this.x,y:this.y-1}]; break;}
                    }
                    break;
                }
                case 2:{
                    accepts = [{x:this.x,y:this.y-1},{x:this.x,y:this.y+1},{x:this.x+1,y:this.y},{x:this.x-1,y:this.y}];
                    break;
                }
                case 3:{
                    switch(this.state){
                        case 0: {accepts = [{x:this.x,y:this.y-1},{x:this.x+1,y:this.y}]; break;}
                        case 1: {accepts = [{x:this.x,y:this.y+1},{x:this.x+1,y:this.y}]; break;}
                        case 2: {accepts = [{x:this.x,y:this.y+1},{x:this.x-1,y:this.y}]; break;}
                        case 3: {accepts = [{x:this.x,y:this.y-1},{x:this.x-1,y:this.y}]; break;}
                    }
                    break;
                }
                case 4:{
                    switch(this.state){
                        case 0: {accepts = [{x:this.x+1,y:this.y}]; break;}
                        case 1: {accepts = [{x:this.x,y:this.y+1}]; break;}
                        case 2: {accepts = [{x:this.x-1,y:this.y}]; break;}
                        case 3: {accepts = [{x:this.x,y:this.y-1}]; break;}
                    }
                }
            }
            this.accepts = accepts;
        }
        this.accept();
    }
    fillArround(pipes){
        let amount = 0;
        for(var i in this.accepts){
            if(this.accepts[i].x>=0 && this.accepts[i].x<pipes.length){
                if(this.accepts[i].y>=0 && this.accepts[i].y<pipes[this.accepts[i].x].length){
                    if(pipes[this.accepts[i].x][this.accepts[i].y].check(this.x,this.y)){
                        pipes[this.accepts[i].x][this.accepts[i].y].fill();
                        amount++;
                    }
                }
            }
        }
        return amount;
    }
    check(otherX, otherY){
        if(this.filled || otherX<0 || otherY<0){
            return false;
        }
        for(var i in this.accepts){
            if(this.accepts[i].x==otherX && this.accepts[i].y==otherY){
                return true;
            }
        }
        return false;
    }
    fill(){
        this.filled = true;
    }
}
