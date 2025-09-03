export const canvas = document.querySelector("canvas");
export const canvasContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

export const SPEED = 2.5;
export const ROTATION_SPEED = 0.03;
export const SLOW_DOWN = 0.95;
export const PROJECTILE_SPEED = 3;

export const projectiles = [];
