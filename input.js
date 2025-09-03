import { Projectile } from "./projectile.js";
import { projectiles, PROJECTILE_SPEED } from "./config.js";

export const keys = {
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

export function inputSetup(player) {
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
      case "Space":
        projectiles.push(
          new Projectile({
            position: {
              x: player.position.x + Math.cos(player.rotation) * 30,
              y: player.position.y + Math.sin(player.rotation) * 30,
            },
            velocity: {
              x: Math.cos(player.rotation) * PROJECTILE_SPEED,
              y: Math.sin(player.rotation) * PROJECTILE_SPEED,
            },
          })
        );
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
}
