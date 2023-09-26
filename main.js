import { Enemy } from "./modules/enemy.js";
import { Ship } from "./modules/ship.js";
import { Vector2D } from "./modules/vector2d.js";

const FRAMERATE = 60.0;
const FRAMETIME = 1000.0 / FRAMERATE; //ms

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let lastRenderTime = Date.now();

let mouse = new Vector2D(canvas.width/2, canvas.height/2);

const ship = new Ship();
const enemy = new Enemy("./res/enemy.png");

window.onload = function () {
    init();
    renderCycle();
}

function init(){
    canvas.addEventListener("mousemove", mouseMoveHandler);
}

function mouseMoveHandler(event){
    const canvasRect = canvas.getBoundingClientRect();
    mouse.x = Math.round(event.clientX - canvasRect.left);
    mouse.y = Math.round(event.clientY - canvasRect.top);
}

function renderCycle(){
    let currentTime = Date.now();
    const deltaTime = currentTime - lastRenderTime;

    ship.moveTo(mouse);
    enemy.move();

    render(deltaTime);

    setInterval(renderCycle, FRAMETIME, null);
    lastRenderTime = Date.now();
}

function render(deltaTime){
    ctx.fillStyle = "000000";
    ctx.clearRect( 0, 0, canvas.width, canvas.height);

    let distance = Math.abs(FRAMETIME - deltaTime);

    ship.draw(ctx);
    enemy.draw(ctx);
}