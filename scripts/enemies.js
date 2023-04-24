//class enemy test

class Enemy {
  constructor(x, y, width, height, hp, ctx, img, shot, enemyType, player) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.hp = hp;
    this.ctx = ctx;
    this.img = img;
    this.shot = shot;
    this.enemyType = enemyType;
    this.player = player;
    this.dx = 0;
    this.dy = 0;
    this.movLeft = null;
    this.movRight = null;
    this.setintervalId = null;
    this.movDiagRightTop = false;
    this.movDiagLeftTop = false;
    this.movDiagRightDown = false;
    this.movDiagLeftDown = false;
    this.movTop = false;
    this.movDown = false;
    this.startX = 0;
    this.startY = 0;
    this.actualDirection = "";
  }

  draw() {
    const enemyImg = new Image();
    enemyImg.src = this.img;
    if (this.movLeft) this.dy = 0;
    else if (this.movRight) this.dy = 52;
    this.ctx.drawImage(
      enemyImg,
      this.dx,
      this.dy,
      40,
      50,
      this.x,
      this.y,
      50,
      70
    );
  }

  newPos() {
    if (player.x < this.x) {
      this.x -= 1;
      this.movLeft = true;
      this.movRight = false;
    } else {
      this.x += 1;
      this.movLeft = false;
      this.movRight = true;
    }

    if (player.y < this.y) this.y -= 1;
    else this.y += 1;

    if (player.x == this.x) {
      this.movLeft = false;
      this.movRight = true;
    }
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  /* gotShot = () =>{

     
    return !(this.bottom() < this.shot.top() || this.top() > this.shot.bottom() || 
     this.right() < this.shot.left() || this.left() > this.shot.right())  
  
     
  }
/*
  receiveDamage() {
    /* if(this.shot.shotFired)this.hp -= 5;
      this.shot.shotFired = false;
      console.log(this.hp) 
    this.hp -= 5;
    //console.log(this.hp)
  } */
}

console.log("enemies JS is loaded");