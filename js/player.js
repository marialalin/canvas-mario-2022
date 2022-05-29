class Player {
  constructor(ctx) {
    // TODO: init player attributes: position, size, v, a, img, audio, score, tick
    this.ctx = ctx
    this.x = 20
    this.y = 350
    this.w = 50
    this.h = 90

    this.vx = 0
    this.vy = 0
    this.g = 0.5
    this.ax = 0
    this.ay = 0

    this.img = new Image()
    this.img.src = '/img/mario.png'
    this.img.frames = 3
    this.img.frame = 0

    this.tick=0

  }

  draw() {
    // TODO: draw player image
    // TODO: draw score
    this.ctx.drawImage(
      this.img,
      this.img.frame * this.img.width / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    )
  }

  move() {
    // TODO: move player. v + a, position + v
    // TODO: check if floor to stop falling
    // TODO: animate based on tick
    // TODO: move score
    this.x += this.vx
    this.y += this.vy
    
    this.vy += this.ay
    //GRAVEDAD
    this.vy += this.g
    this.vx += this.ax


    if (this.y + this.h >= this.ctx.canvas.height - 50) {
      this.y = this.ctx.canvas.height - 50 - this.h
      this.vy = 0

    }
    this.tick++
    if (this.tick > 10){
      this.tick = 0
      this.img.frame++
      if (this.img.frame>2){
        this.img.frame=0
      }
    }

  }

  animate() {
    // TODO: increment frameIndex only if not vy
  }

  hit() {
    // TODO: decrement score
  }

  isAlive() {
    // TODO: return true if score is > 0
  }

  keyDown(key) {
    if (key === KEY_UP && this.vy === 0) {
      // TODO: jump and play jump sound
      console.log('hey')
      this.vy=-10
    }

    if (key === KEY_RIGHT) {
      this.vx = 2
      this.tick++
      if (this.tick > 1){
        this.tick = 0
        this.img.frame++
        if (this.img.frame>2){
          this.img.frame=0
        }
      }
      // TODO: more vx
    }

    if (key === KEY_LEFT) {
      this.vx = -2
      this.tick++
      if (this.tick > 1){
        this.tick = 0
        this.img.frame++
        if (this.img.frame>2){
          this.img.frame=0
        }
      }
      // TODO: less vx
    }
  }

  keyUp(key) {
    if (key === KEY_RIGHT || key === KEY_LEFT) {
      this.vx = 0
      // TODO: stop vx
    }
  }
}
