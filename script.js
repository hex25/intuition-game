const starPath = './star.png';
const circlePath = './circle.png';
const wavePath = './wave.png';
const squarePath = './square.png';
const crossPath = './cross.png';

const images = [starPath,circlePath,wavePath,squarePath,crossPath];

const currentImage = document.getElementById('current-image');

const circle = document.getElementById('circle');
const cross = document.getElementById('cross');
const star = document.getElementById('star');
const square = document.getElementById('square');
const wave = document.getElementById('wave');

let roundNumber = 0;
let win = 0;
let stillPlaying = true;


const randomImage = () => {
    currentImage.src = images[Math.floor(Math.random()*(images.length))];
}

const winChecker = (itemPath) => {
    if (stillPlaying === true) {
    if (currentImage.src === itemPath) {
        win ++;
        document.getElementById('win-message').innerHTML = `You guessed!`;
        document.getElementById('status').innerHTML = `Your score: <strong>${win}</strong> out of <strong>${roundNumber}</strong>`;
        currentImage.style.boxShadow = '0 2px 4px 0 green, 0 3px 10px 0 green';
    } else {
        document.getElementById('win-message').innerHTML = `Try again!`;
        document.getElementById('status').innerHTML = `Your score: <strong>${win}</strong> out of <strong>${roundNumber}</strong>`;
        currentImage.style.boxShadow = '0 2px 4px 0 tomato, 0 3px 10px 0 tomato';
    }
}
}

const playRound = () => {
    roundNumber ++;
    document.getElementById('round-number').innerHTML = `Round ${roundNumber}`;
    // game over
    if (roundNumber === 25) {
    stillPlaying = false;
    document.getElementById('round-number').innerHTML = `Thank you for taking this test!`;
    document.getElementById('win-message').innerHTML = 'Nice effort!';
    document.getElementById('status').innerHTML = ` 
    <p>Game status:</p> 
    <p>You guessed ${win} times out of ${roundNumber}</p>
    <p>Your intuition is ${win/roundNumber*100} percent.</p>
    <p>Since there are only 5 different symbols, the chance of guessing any one card is 1/5 (20%).
    If you guessed anything more than this, it proves that you have developed intuition!</p>`;
    }
}

circle.onclick = () => {if (stillPlaying === true) {randomImage(); playRound(); winChecker(circle.src); ; setTimeout(function(){currentImage.src = './back.png'; currentImage.style.boxShadow = 'none';}, 3000)}};
cross.onclick = () => {if (stillPlaying === true) {randomImage(); playRound(); winChecker(cross.src)}; setTimeout(function(){currentImage.src = './back.png'; currentImage.style.boxShadow = 'none';}, 3000)};
star.onclick = () => {if (stillPlaying === true) {randomImage(); playRound(); winChecker(star.src)}; setTimeout(function(){currentImage.src = './back.png'; currentImage.style.boxShadow = 'none';}, 3000)};
wave.onclick = () => {if (stillPlaying === true) {randomImage(); playRound(); winChecker(wave.src)}; setTimeout(function(){currentImage.src = './back.png'; currentImage.style.boxShadow = 'none';}, 3000)};
square.onclick = () => {if (stillPlaying === true) {randomImage(); playRound(); winChecker(square.src)}; setTimeout(function(){currentImage.src = './back.png'; currentImage.style.boxShadow = 'none';}, 3000)};