const canvas = document.querySelector("canvas");
const canvasContext = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvasContext.fillStyle = "darkblue";
canvasContext.fillRect(0, 0, canvas.width, canvas.height);
