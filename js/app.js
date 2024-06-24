let $ = document;
const canvasElem = $.getElementById("c");
const ctx = canvasElem.getContext("2d");

let scale = 10;

function Snake() {
  this.x = 0;
  this.y = 0;

  this.speedX = 1;
  this.speedY = 0;

  this.snakeDrow = function () {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, scale, scale);
  };

  this.snakeLocation = function () {
    this.x += this.speedX;
    this.y += this.speedY;
  };

  this.snakeEnter = function () {
    if (Math.round(this.x) == canvasElem.width) {
      this.x = 0;
    } else if (Math.round(this.y) == canvasElem.height) {
        this.y = 0;
    } else if (Math.round(this.x) == -10) {
        this.x = canvasElem.width;

    } else if (Math.round(this.y) == -10) {
        this.y = canvasElem.height
    }
  };

  this.controlSnake = function (snakeDirection) {
    switch(snakeDirection) {
        case 'Up': {
            this.speedX = 0;
            this.speedY = -1;
            break;
        }
        case "Down": {
            this.speedX = 0;
            this.speedY = 1;
            break;
        }
        case "Left": {
            this.speedX = -1
            this.speedY = 0
            break;
        }
        case "Right": {
            this.speedX = 1
            this.speedY = 0
            break;
        }
    }
  }
}

const snakeGame = new Snake();
const createSnakeGame = () => {

  function animate() {
    ctx.clearRect(0, 0, canvasElem.width, canvasElem.height);
    snakeGame.snakeDrow();
    snakeGame.snakeLocation();
    snakeGame.snakeEnter();

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

};

const controlGame = event => {
    let snakeDirection = event.key.replace("Arrow", "");
    snakeGame.controlSnake(snakeDirection);

}

window.addEventListener("keydown", controlGame);
window.addEventListener("load", createSnakeGame);
