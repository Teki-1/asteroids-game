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

const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },

  d: {
    pressed: false,
  },
};

const SPEED = 2.5;
const ROTATION_SPEED = 0.03;
const SLOW_DOWN = 0.95;

animate();

function animate() {
  window.requestAnimationFrame(animate);
  canvasContext.fillStyle = "darkblue";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.w.pressed) {
    player.velocity.x = Math.cos(player.rotation) * SPEED;
    player.velocity.y = Math.sin(player.rotation) * SPEED;
  } else if (!keys.w.pressed) {
    player.velocity.x *= SLOW_DOWN;
    player.velocity.y *= SLOW_DOWN;
  }

  if (keys.d.pressed) {
    player.rotation += ROTATION_SPEED;
  } else if (keys.a.pressed) {
    player.rotation -= ROTATION_SPEED;
  }
}
window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyW":
      keys.w.pressed = true;
      break;
    case "KeyA":
      keys.a.pressed = true;
      break;
    case "KeyD":
      keys.d.pressed = true;
      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyW":
      keys.w.pressed = false;
      break;
    case "KeyA":
      keys.a.pressed = false;
      break;
    case "KeyD":
      keys.d.pressed = false;
      break;
  }
});
