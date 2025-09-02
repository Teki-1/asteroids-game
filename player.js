import { canvasContext } from "./config.js";

export class Player {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.rotation = 0;
  }
  draw() {
    canvasContext.save();
    canvasContext.translate(this.position.x, this.position.y);
    canvasContext.rotate(this.rotation);
    canvasContext.translate(-this.position.x, -this.position.y);

    canvasContext.arc(
      this.position.x,
      this.position.y,
      5,
      0,
      Math.PI * 2,
      false
    );
    canvasContext.fillStyle = "green";
    canvasContext.fill();

    canvasContext.beginPath();
    canvasContext.moveTo(this.position.x + 30, this.position.y);
    canvasContext.lineTo(this.position.x - 10, this.position.y - 10);
    canvasContext.lineTo(this.position.x - 10, this.position.y + 10);
    canvasContext.closePath();
    canvasContext.strokeStyle = "white";
    canvasContext.stroke();
    canvasContext.restore();
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
