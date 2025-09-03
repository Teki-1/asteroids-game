import {
  canvas,
  canvasContext,
  SPEED,
  SLOW_DOWN,
  ROTATION_SPEED,
  projectiles,
} from "./config.js";
import { Player } from "./player.js";
import { keys, inputSetup } from "./input.js";

const player = new Player({
  position: { x: canvas.width / 2, y: canvas.height / 2 },
  velocity: { x: 0, y: 0 },
});

inputSetup(player);

function animate() {
  window.requestAnimationFrame(animate);
  canvasContext.fillStyle = "darkblue";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  for (let i = projectiles.length - 1; i >= 0; i--) {
    const p = projectiles[i];
    p.update(canvasContext);
    if (
      projectiles.position.x + p.radius < 0 ||
      p.position.x - p.radius > canvas.width ||
      p.position.y + p.radius < 0 ||
      p.position.y - p.radius > canvas.height
    ) {
      {
        projectiles.splice(i, 1);
      }
    }

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
}
animate();
