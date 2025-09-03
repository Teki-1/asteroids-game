import { canvasContext } from "./config.js";

export class Projectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.radius = 3;
  }
  draw() {
    canvasContext.beginPath();
    canvasContext.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      Math.PI * 2,
      false
    );
    canvasContext.closePath();
    canvasContext.fillStyle = "red";
    canvasContext.fill();
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
