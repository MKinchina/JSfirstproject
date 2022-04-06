const imgCat = document.createElement('img');
const cat = document.createElement('div');
const imgBoxes = document.createElement('img');
const boxes = document.createElement('div');
let score = document.createElement('p');
const gameOver = document.createElement('p');
 
score.innerText = 'Score: 00.'
imgCat.src = './assets/kitty.png'
imgBoxes.src ='./assets/boxes.png'

cat.classList.add('cat');
boxes.classList.add('boxes');
gameOver.classList.add('gameOver');
score.classList.add('score')

const game = document.querySelector('#game');

cat.append(imgCat);
boxes.append(imgBoxes);
game.append(cat);
game.append(boxes);
game.append(gameOver);
game.append(score);

let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerText = `Score ${playerScore}`;
}

document.addEventListener("keydown", (start) => {
    if (start.code == "Space") {
        gameOver.style.display = "none";
        boxes.classList.add("boxesActive");

        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp"){
        if (cat.classList != "catActive") {
            cat.classList.add("catActive");

            setTimeout(() => {
                cat.classList.remove("catActive");
            }, 500);
        }
    }
});

let result = setInterval(() => {
    let catBottom = parseInt(getComputedStyle(cat).getPropertyValue("bottom"));
    let boxesLeft = parseInt(getComputedStyle(boxes).getPropertyValue("left"));

    if (catBottom <= 90 && boxesLeft >= 20 && boxesLeft <= 105) {
        playerScore = 0;

        clearInterval(interval);

        gameOver.style.display = "block";
        boxes.classList.remove("boxesActive");

        gameOver.innerText = `Game Over! 
        ${score.innerHTML}`
    }
}, 10);
