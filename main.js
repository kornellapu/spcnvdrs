import { Ship } from "./modules/ship.js";

const FRAMERATE = 60.0;
const FRAMETIME = 1000.0 / FRAMERATE; //ms

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let lastRenderTime = new Date().getMilliseconds();

let mouseX = canvas.width/2;
let mouseY = canvas.height/2;

const ship = new Ship();

window.onload = function () {
    init();
    renderCycle();
}

function init(){
    canvas.addEventListener("mousemove", mouseMoveHandler);
}

function mouseMoveHandler(event){
    const canvasRect = canvas.getBoundingClientRect();
    mouseX = Math.round(event.clientX - canvasRect.left);
    mouseY = Math.round(event.clientY - canvasRect.top);
}

function renderCycle(){
    let currentTime = new Date().getMilliseconds();
    const deltaTime = currentTime - lastRenderTime;

    ship.moveTo(mouseX, mouseY);

    render(deltaTime);

    setInterval(renderCycle, FRAMETIME, null);
    lastRenderTime = new Date().getMilliseconds();
}

function render(deltaTime){
    ctx.fillStyle = "000000";
    ctx.clearRect( 0, 0, canvas.width, canvas.height);

    let distance = Math.abs(FRAMETIME - deltaTime);

    ship.draw(ctx);
}