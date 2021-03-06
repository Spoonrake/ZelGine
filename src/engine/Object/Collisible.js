class Collisible{
    constructor(){
        this.x
        this.y
        this.width
        this.height
    }



    //   GENERAL COLLISIONS
    hasCollisionWithPoint(x, y){
        if ((this.x <= x) & (this.x >= (x - this.width)) & (this.y <= y) & (this.y >= (y - this.height)))
            return true
        else
            return false
    }


    hasCollisionWithField(x, y, width, height){
        if ((this.x <= (x + width)) & (this.x >= (x - this.width)) & (this.y <= (y + width)) & (this.y >= (y - this.height)))
            return true
        else
            return false
    }


    hasCollisionWithClassOfObj(objClass){
        for(var i = 0; i < SCENE.objectsGroup.length; i++){
            if(SCENE.objectsGroup[i] instanceof objClass)
                if(this.hasCollisionWithObj(SCENE.objectsGroup[i]))
                    return true
        }
    }


    hasCollisionWithObj(object){
        if ((this.x <= (object.x + object.width)) & (this.x >= (object.x - this.width)) & (this.y <= (object.y + object.width)) & (this.y >= (object.y - this.height)))
            return true
        else
            return false
    }







    //   TOP COLLISIONS
    hasTopCollisionWithClassOfObj(objClass){
        for(var i = 0; i < SCENE.objectsGroup.length; i++){
            if(SCENE.objectsGroup[i] instanceof objClass)
                if(this.hasTopCollisionWithObj(SCENE.objectsGroup[i]))
                    return true
        }
    }

    hasTopCollisionWithObj(object){
        if((object.y+object.height==this.y) & (object.x > this.x - object.width) & (object.x < this.x + this.width))
            return true
    }





    //   DOWN COLLISIONS
    hasDownCollisionWithClassOfObj(objClass){
        for(var i = 0; i < SCENE.objectsGroup.length; i++){
            if(SCENE.objectsGroup[i] instanceof objClass)
                if(this.hasDownCollisionWithObj(SCENE.objectsGroup[i]))
                    return true
        }
    }

    hasDownCollisionWithObj(object){
        if((object.y==this.y+this.height) & (object.x>this.x-object.width) & (object.x<this.x+this.width))
            return true
    }





    //   RIGHT COLLISIONS
    hasRightCollisionWithClassOfObj(objClass){
        for(var i = 0; i < SCENE.objectsGroup.length; i++){
            if(SCENE.objectsGroup[i] instanceof objClass)
                if(this.hasRightCollisionWithObj(SCENE.objectsGroup[i]))
                    return true
        }
    }

    hasRightCollisionWithObj(object){
        if((object.x==this.x+this.width) & (object.y>this.y-object.height) & (object.y<this.y+this.height))
            return true
    }





    //  LEFT COLLISIONS
    hasLeftCollisionWithClassOfObj(objClass){
        for(var i = 0; i < SCENE.objectsGroup.length; i++){
        if(SCENE.objectsGroup[i] instanceof objClass)
            if(this.hasLeftCollisionWithObj(SCENE.objectsGroup[i]))
                return true
        }
    }

    hasLeftCollisionWithObj(object){
        if((object.x==this.x-object.width) & (object.y>this.y-object.height) & (object.y<this.y+this.height))
            return true
    }

}
