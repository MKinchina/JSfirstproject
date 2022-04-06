const cat = document.createElement('div');
const boxes = document.createElement('div');
const gameover = document.createElement('p');
const score = document.createElement('p');

const game = document.querySelector('#game');

cat.classList.add('cat');
boxes.classList.add('boxes');
gameover.classList.add('gameover');
score.classList.add('score');

game.append(cat);
game.append(boxes);
game.after(gameover);
game.after(score);

let interval = null;
let playerScore = 0;

let scoreCounter = () => {
    playerScore++;
    score.innerText = `Score: ${playerScore}`;
};

interval = setInterval(scoreCounter, 200);

document.addEventListener('keydown', (start) => {
    if (start.code == 'Enter') {
        gameover.style.display = 'none';
        boxes.style.animation = 'boxesRun 1s infinite linear';

        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});

document.addEventListener('keydown', (action) => {
    if (action.code === 'Space') 
    if (cat.classList != 'jump') {
        cat.classList.add('jump')
        }
        setTimeout(() => {
            cat.classList.remove('jump')
        }, 600)
});

let isAlive = setInterval(() => {
    let catTop = parseInt(getComputedStyle(cat).getPropertyValue('top'));
    let boxesLeft = parseInt(getComputedStyle(boxes).getPropertyValue('left'));
    
    if (boxesLeft < 200 && boxesLeft > 0 && catTop >= 300) {
        gameover.style.display = 'block';
        gameover.innerText = `Game Over 
        ${score.innerText}`;
        boxes.style.animation = 'none';
        clearInterval(interval);
        playerScore = 0;
    }
}, 1);