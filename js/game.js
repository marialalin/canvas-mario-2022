class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.interval = null;
    
    this.background = new Background(ctx);
    this.player = new Player(ctx);
    this.enemies = [];
    this.tick = 0;

    this.audio = new Audio("audio/theme.mp3");
    this.gameOverAudio = new Audio("audio/game-over.mp3");

    this.setListeners();
  }

  start() {
    this.interval = setInterval(() =>{
      this.clear()
      this.draw()
      this.move()
      
      this.tick++
      if (this.tick > Math.random() * 600 + 100) {
        this.tick = 0
        this.addEnemy()
        
      }
    }, 1000/60)
    // TODO: play audio
    // TODO: init game loop: clear, draw, move, check collisions and randomly add enemy based on ticks
  }

  stop() {
    // TODO: pause audio, stop interval, set interval to null
  }

  clear() {
    // TODO: clear entire canvas
    // TODO: clear not visible enemies (tip: filter)
  }

  draw() {
    this.background.draw()
    this.player.draw()
    this.enemies.forEach((e) => e.draw())
    // TODO: draw everything
  }

  move() {
    this.background.move()
    this.player.move()
    this.enemies.forEach((e) => e.move())
    // TODO: move everything
  }

  addEnemy() {
    // TODO: create new enemy and add it to this.enemies
    const enemy = new Enemy(this.ctx)
    this.enemies.push(enemy)
    
  }

  checkCollisions() {
    // TODO: check if any enemy "collides" with player
    // TODO: check if game over
  }

  gameOver() {
    // TODO: play game over audio
    // TODO: stop game
    // TODO: write "game over"
    // TODO: restart player and enemies
  }

  setListeners() {
    // TODO: proxy "keydown" key to player keyDown method
    // TODO: proxy "keyup" key to player keyUp method
    document.addEventListener('keydown', (e) => {
      this.player.keyDown(e.keyCode)
    })
    document.addEventListener('keyup', (e) => {
      this.player.keyUp(e.keyCode)
    })
  }
}
