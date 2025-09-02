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

export function inputSetup() {
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
}
