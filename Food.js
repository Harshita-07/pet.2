class Food
{
    constructor (){
        this.foodStock 
        this.lastfed 
   
    this.image = loadImage("Milk.png")
    }

    getfoodStock(){
       return this.foodStock
    }
    updatefoodStock(foodStock){
        this.foodStock = foodStock
    }
    deductfoodStock(x){
        if(this.foodStock >0){
            this.foodStock= this.foodStock-1;
        }
    }
    getFedTime(lastfed){
        this.lastfed = this.lastfed
    }
    display(){
        imageMode(CENTER);
        image(this.image, 420, 220, 70, 70);
        var x =80;
        var y = 100;
        if(this.foodStock !==0){
            for(var i=0; i<this.foodStock; i++){
                if(i%10 === 0){
                    x=80;
                    y=y+50
                }
                image(this.image, x, y, 70, 70);
                x=x+30;
            }
        }
}
}