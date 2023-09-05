const mario = document.querySelector(".mario");
const pipe2 = document.querySelector(".pipe2");
const gameOver = document.querySelector(".gameOver");
const lua = document.querySelector(".lua");
const game = document.querySelector(".game");


const night = setInterval(() => {
  game.classList.add("night");
  game.classList.remove("game");

  setTimeout(() => {
    lua.classList.remove("hide")
  }, 700)

  clearInterval(night);
}, 21000)

let jumpSum = 0;

console.log(jumpSum+1)
const jump = () => {
  mario.classList.add("jump");

  document.getElementById("pontuacao").innerHTML = jumpSum++;
  
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

function reset() {
  window.location.reload(true);
  gameOver.classList.add("hide");
}

const loop = setInterval(() => {
  const pipe2Position = pipe2.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipe2Position <= 100 && pipe2Position > 0 && marioPosition < 80) {
    pipe2.style.animation = "none";
    pipe2.style.left = `${pipe2Position}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./src/img/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    gameOver.classList.remove("hide");

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
