export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
      this.load.image ("ball", "./public/assets/ball.png");
      
  }

  create() {
      this.scene.start('game');
    }

}