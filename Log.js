class log
{
    constructor(speed){
 
 this.x = random([100,300,500,700,900]);
 this.y = random([]);
 this.width = 1500;
 this.height = 800;
 this.speed = speed;
 this.spt = createSprite(this.x,this.y,this.width,this.height);
 this.spt.veloCityX = this.speed;
 this.spt.shapeColor = "brown";
 this.spt.scale=0.1;








    }
}
    

   
