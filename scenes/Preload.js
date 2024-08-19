export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
      this.load.image ("ball", "./public/assets/ball.png");
      this.load.image ("sky", "./public/assets/sky.jpg")
  }

  create() {
      this.scene.start('game');
    }

}