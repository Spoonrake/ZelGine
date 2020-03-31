
class Drawable extends Physical{

  constructor(){
    super()
    this.animationMap={
      default: ["./src/engine/img/defaultSprite.png"],
    }

    this.animationSecTime;

    this.framesFromStartAnimation = 1;

    this.frameIntervalBtwnSprites = 0;
    this.excessFrames = 0;
    this.currentFrameBtwnSprites = 1;

    this.currentSpriteGroup = this.animationMap.default;
    this.spritePointer = 0;

    this.currentSprite = new Image();
    this.currentSprite.src;
  }



  setCurrentAnimationForSec(spriteGroup, seconds = 1){
    this.animationSwap(spriteGroup, seconds);
    this.framesFromStartAnimationTimer();
    this.calculateExcessFramesForCurrentAnim();
  }


  animationSwap(spriteGroup, seconds){
    if(this.isAnimationChanged(spriteGroup)){
      this.setFieldsForChangedAnimation(spriteGroup, seconds);
    }
  }

  isAnimationChanged(spriteGroup){
    if(this.currentSpriteGroup != spriteGroup)
      return true;
    else
      return false;
  }

  setFieldsForChangedAnimation(spriteGroup, seconds){
    this.currentSpriteGroup = spriteGroup;

    this.spritePointer = 0;
    this.animationSecTime = seconds;
    // TODO: fix for currentSpriteGroup.length > 15
    this.frameIntervalBtwnSprites = Math.floor((FPS*this.animationSecTime)/this.currentSpriteGroup.length);
    this.excessFrames = FPS - this.frameIntervalBtwnSprites * this.currentSpriteGroup.length;
    this.framesFromStartAnimation = 0;
  }


  framesFromStartAnimationTimer(){
    this.framesFromStartAnimation += 1;
  }


  calculateExcessFramesForCurrentAnim(){
    if(this.framesFromStartAnimation == FPS * this.animationSecTime){
      this.excessFrames = FPS - this.frameIntervalBtwnSprites * this.currentSpriteGroup.length;
    }
  }



  //// TODO: new name?
  currentSpriteSourceSetter(){
    this.currentSprite.src = this.currentSpriteGroup[this.spritePointer];
  }





  //TODO set the width and height in args
  drawImage(image = this.currentSprite){
    screen.drawImage(image, 0, 0, 128, 128, this.x,this.y, this.width,this.height);
  }


  spritesCounter(){
    this.spritePointerCounter();
    this.currentFrameBtwnSpritesCounter();
  }

  spritePointerCounter(){
    if(this.isCurrentFrameForMovePointer()){
        if(this.spritePointer < this.currentSpriteGroup.length-1)
          this.spritePointer += 1;
        else
          this.spritePointer = 0;
      }
  }

  isCurrentFrameForMovePointer(){
    if(this.currentFrameBtwnSprites == 1)
      return true;
    else
      return false;
  }


  currentFrameBtwnSpritesCounter(){
    if(this.isExcessFrames())
      this.countCurrFrameBtwnSpritesAddingExcess();
    else
      this.countCurrFrameBtwnSprites();
  }

  countCurrFrameBtwnSpritesAddingExcess(){
    if(this.currentFrameBtwnSprites < this.frameIntervalBtwnSprites+1)
      this.currentFrameBtwnSprites += 1
    else{
      this.currentFrameBtwnSprites = 1;
      this.excessFrames -= 1;
    }
  }

  countCurrFrameBtwnSprites(){
    if(this.currentFrameBtwnSprites < this.frameIntervalBtwnSprites)
      this.currentFrameBtwnSprites += 1
    else
      this.currentFrameBtwnSprites = 1;
  }

  isExcessFrames(){
    if(this.excessFrames > 0)
      return true;
  }

}
