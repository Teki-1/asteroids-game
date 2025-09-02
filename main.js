import {
  canvas,
  canvasContext,
  SPEED,
  SLOW_DOWN,
  ROTATION_SPEED,
} from "./config.js";
import { Player } from "./player.js";
import { keys, inputSetup } from "./input.js";

const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

inputSetup();

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
animate();
