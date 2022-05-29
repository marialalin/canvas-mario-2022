class Background {
  constructor(ctx) {
    // TODO: init background x, y, vx, vy, img
    this.ctx = ctx
    this.x = 0
    this.y = 0
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.vx = -0.5

    this.img = new Image()
    this.img.src='/img/bg.png'
  }

  draw() {
    // TODO: draw background twice!
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    this.ctx.drawImage(this.img, this.x + this.w, this.y, this.w, this.h)
  }

  move() {
    // TODO: move background
    this.x += this.vx
    if (this.x + this.w <= 0) {
      this.x = 0
    }
  }
}
