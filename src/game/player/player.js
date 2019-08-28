//------CLASS PLAYER-------//
class Player{
  constructor(x, y){    //x,y - started coordinates
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
    this.speed = 5;
    this.speedBoost = 5;
    this.beta;

    this.state = '';
    this.stateMap = {
      runLeft: ["./img/staing/1.png", "./img/staing/2.png", "./img/staing/3.png", "./img/staing/4.png", "./img/staing/5.png", "./img/staing/6.png","./img/staing/7.png","./img/staing/8.png","./img/staing/9.png","./img/staing/10.png","./img/staing/11.png","./img/staing/12.png","./img/staing/13.png","./img/staing/14.png","./img/staing/15.png","./img/staing/16.png","./img/staing/17.png","./img/staing/18.png","./img/staing/19.png","./img/staing/20.png","./img/staing/21.png","./img/staing/22.png","./img/staing/23.png","./img/staing/24.png","./img/staing/25.png","./img/staing/26.png","./img/staing/27.png","./img/staing/28.png","./img/staing/29.png","./img/staing/30.png"],
      runRight: ["./img/runRight/1.png","./img/runRight/2.png","./img/runRight/3.png"],
      runTop: ["./img/staing/1.png"],
      runBottom: ["./img/staing/1.png"],
      stay:["./img/stay/1.png"],
    }


    this.spriteFlag = 0;
    this.timer = 0;

    this.currentSprite = new Image();
    this.currentSprite.src = "./img/player.jpg";

    this.side = {
      left : false,
      right: false,
      up: false,
      down: false,

      jump: false,
      jumpTime: 2, //seconds
      jumpTimeLost: 2,
    }
  }

  move(controlKeys = {left:65, right:68, up:87, down:83}){
    if(isElemInArr(keyListener_downKeys, controlKeys.left)){
      this.runLeft();
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.right)){
      this.runRight();
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.up)){
      this.runTop();
    }
    if(isElemInArr(keyListener_downKeys, controlKeys.down)){
      this.runBottom();
    }
    if(keyListener_downKeys.length == 0){
      this.stay();
    }
  }

  stay(){
    this.stateSwap("stay");
  }

  runLeft(){
    this.x -= this.speed;
    this.stateSwap("runLeft");
  }

  runRight(){
    this.x += this.speed;
    this.stateSwap("runRight");
  }

  runTop(){
    this.y -= this.speed;
    this.stateSwap("runTop");
  }

  runBottom(){
    this.y += this.speed;
    this.stateSwap("runBottom");
  }

  stateSwap(state){
    if(this.state != state){
      this.state = state;
      this.spriteFlag = 0;
    }
  }

  draw(){
    var spriteGroup = '';

    switch(this.state){
      case "runLeft":
        spriteGroup = this.stateMap.runLeft;
        break;
      case "runRight":
        spriteGroup = this.stateMap.runRight;
        break;
      case "runTop":
        spriteGroup = this.stateMap.runTop;
        break;
      case "runBottom":
        spriteGroup = this.stateMap.runBottom;
        break;
      case "stay":
      spriteGroup = this.stateMap.stay;
    }

    //console.log(typeof(sprite[0]));
    this.currentSprite.src = spriteGroup[this.spriteFlag];
    //console.log(spriteGroup);

    screen.save();
    screen.translate(this.x+player.width/2, this.y+player.height/2);
    screen.rotate((player.beta * Math.PI)/180);
    screen.drawImage(this.currentSprite, 0, 0, 128, 128, -this.width/2, -this.height/2, 128, 128);
    screen.rotate(-player.beta * Math.PI/180);
    screen.restore();



    if(this.spriteFlag < spriteGroup.length-1)
      this.spriteFlag += 1;
    else
      this.spriteFlag =0


  }

  drawRotateble(){
    screen.save();
    screen.translate(this.x+player.width/2, this.y+player.height/2);
    screen.rotate((player.beta * Math.PI)/180);
    screen.drawImage(this.sprite, 0, 0, 50, 50, -this.width/2, -this.height/2, this.width, this.height);
    screen.rotate(-player.beta * Math.PI/180);
    screen.restore();
  }
}

//^^^^^^CLASS PLAYER^^^^^^//
