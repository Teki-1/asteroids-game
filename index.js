const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvasContext.fillStyle = "darkblue";
canvasContext.fillRect(0, 0, canvas.width, canvas.height);

class Player {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
  }
  draw() {
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

    canvasContext.moveTo(this.position.x + 30, this.position.y);
    canvasContext.lineTo(this.position.x - 10, this.position.y - 10);
    canvasContext.lineTo(this.position.x - 10, this.position.y + 10);
    canvasContext.closePath();
    canvasContext.strokeStyle = "white";
    canvasContext.stroke();
  }
}

const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

player.draw();
