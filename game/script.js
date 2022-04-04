const cat = document.createElement('div');
const boxes = document.createElement('div');

const game = document.querySelector('#game');

cat.classList.add('cat');
boxes.classList.add('boxes')

game.append(cat);
game.append(boxes);

document.addEventListener('keydown', function(event) {
    jump();
})

function jump () {
    if (cat.classList != 'jump') {
        cat.classList.add('jump')
    }
    setTimeout( function() {
        cat.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval(function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue('top'));
    let boxesLeft = parseInt(window.getComputedStyle(boxes).getPropertyValue('left'));

    if (boxesLeft < 45 && boxesLeft > 0 && catTop >= 20) {
        alert('GAME OVER');
    }
}, 10)