import { AllplatFormes,buttondesac,ctx } from '../../../global/lvl2/glb_var.js';
export class Button{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = buttondesac;
        AllplatFormes.push(this);
    }
s
    draw(){
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    }
}