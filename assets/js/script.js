const startButton = document.getElementById('start-button');
const mainContainer = document.getElementById('instructions');
const game = document.getElementsByTagName('section')[0];
const numbers = document.getElementById('numbers');
const modal = document.getElementById('modal-container');
const imageSpace = document.getElementById('image-holder');
const modalReset = document.getElementById('reset-modal');
const displayer = document.getElementById('displayer');
const happyImages = ['assets/images/score-images/happy-1.png', 'assets/images/score-images/happy-2.png',
    'assets/images/score-images/happy-3.png', 'assets/images/score-images/happy-4.png'
];
const sadImages = ['assets/images/score-images/sad-1.png', 'assets/images/score-images/sad-2.png',
    'assets/images/score-images/sad-3.png', 'assets/images/score-images/sad-4.png'
];
let reset, announcer;
let target = document.getElementById('target-value');
let vsComputerBtn, vsPlayerBtn;
let tileValue;
let tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let board = ['', '', '', '', '', '', '', '', ''];
/*
Indexes within the board
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]
*/
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//generates random number
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function generateTileValue() {
    const randomIndex = Math.floor(Math.random() * tileValues.length);
    tileValue = tileValues[randomIndex];
    if (!board.includes(tileValue)) {
        // Remove that tileValue from tileValues and setting to ''
        tileValues.splice(tileValue - 1, 1, '');
        displayer.innerHTML = `Next move: ${tileValue}`;
    } else {
        generateTileValue();
    }
}

function generateHappyImage() {
    let randomInteger = generateRandomInteger(0, 3);
    let imageDiv = document.createElement('div');
    imageDiv.innerHTML = `<img alt='A happy dog' src='${happyImages[randomInteger]}'>`;
    imageSpace.appendChild(imageDiv);
}

function generateSadImage() {
    let randomInteger = generateRandomInteger(0, 3);
    let imageDiv = document.createElement('div');
    imageDiv.innerHTML = `<img alt='A happy dog' src='${sadImages[randomInteger]}'>`;
    imageSpace.appendChild(imageDiv);
}

function checkIfWon() {
    for (let i = 0; i < 8; i++) {
        const winCondition = winningConditions[i];
        const firstPositionNumber = board[winCondition[0]];
        const secondPositionNumber = board[winCondition[1]];
        const thirdPositionNumber = board[winCondition[2]];
        if (firstPositionNumber === '' || secondPositionNumber === '' || thirdPositionNumber === '') {
            continue;
        }
        if (firstPositionNumber + secondPositionNumber + thirdPositionNumber === parseInt(target.innerHTML)) {
            return true;
        }
    }
    return false;
}

function isValidAction(tile) {
    if (tile.innerText !== '') {
        return false;
    }
    return true;
}
startButton.addEventListener('click', onStartButtonClick);

function setGameChoicesHTML() {
    let gameChoiceHTML = `
    <div class='game-choice'>
    <button class='button' id='vs-computer'>Vs Computer</button>
    <button class='button' id='vs-player'>Two Player</button>
    </div>  `;
    mainContainer.innerHTML = gameChoiceHTML;
}

function initEventListeners() {
    let vsComputerBtn = document.getElementById('vs-computer');
    let vsPlayerBtn = document.getElementById('vs-player');
    vsComputerBtn.addEventListener('click', openComputerGame);
    vsPlayerBtn.addEventListener('click', openPlayerGame);
}

function setTilesHTML() {
    let tilesHTML = '';
    for (let i = 0; i < 9; i++) {
        tilesHTML += '<div class="tile hover"></div>';
    }
    mainContainer.innerHTML = tilesHTML;
    // TODO: Check if this is required
    mainContainer.removeAttribute('id');
    mainContainer.classList.add('container'); //removed <span></span> id=announcer from below span
}

function setScoreAndResetHTML(htmlToSet) {
    let scoreAndResetDiv = document.createElement('div');
    scoreAndResetDiv.innerHTML = htmlToSet;
    scoreAndResetDiv.classList.add('below-container'); //changed reset to class above
    game.appendChild(scoreAndResetDiv);
    reset = document.getElementById('reset');
    announcer = document.getElementById('announcer');
}
//initiates game vs player
function openPlayerGame() {
    setTilesHTML();
    let scoreAndResetHTML = `
    <div>
        <div id='which-player'></div>
        <div id='scores'>
            Player One <span id='player-one'></span>
            Player Two <span id='player-two'></span>
        </div>
        <button class='button' id='reset'>Reset</button>
        <div id='returner'>
            <button class='button' id='return-button'>One Player</button>
        </div>
    <div>`;
    setScoreAndResetHTML(scoreAndResetHTML);
    let tiles = Array.from(document.getElementsByClassName('tile'));
    numbers.innerHTML = tileValues.join(' ');
    let isGameActive = true;
    let playerOneWinner = false;
    let playerTwoWinner = false;
    let whichPlayer = document.getElementById('which-player');
    let returnButton = document.getElementById('return-button');
    whichPlayer.innerHTML = `Player One's Turn`;
    let playerOneScoreDiv = document.getElementById('player-one');
    let playerTwoScoreDiv = document.getElementById('player-two');
    // Init scores to 0
    playerOneScoreDiv.innerHTML = 0;
    playerTwoScoreDiv.innerHTML = 0;
    let playerOneScore = parseInt(playerOneScoreDiv.innerHTML);
    let playerTwoScore = parseInt(playerTwoScoreDiv.innerHTML);
    target.innerHTML = generateRandomInteger(12, 20);
    let playerOneTurn = true;
    
    generateTileValue();
    tiles.forEach(function (tile, index) {
        tile.addEventListener('click', () => onTwoPlayerGameTileClick(tile, index));
    });

    function checkForWinner() {
        const hasWon = checkIfWon();
        if(hasWon && playerOneTurn) {
            playerTwoWinner = true;
        } else if (hasWon && !playerOneTurn){
            playerOneWinner= true;
        } else{
            playerOneWinner=false;
            playerTwoWinner=false;
        }
        if (playerOneWinner) {
            modal.classList.remove('hide');
            announcer.innerHTML = `Player One Wins`;
            generateHappyImage();
            playerOneScoreDiv.innerHTML = playerOneScore += 1;
            isGameActive = false;
        }
        if (playerTwoWinner) {
            modal.classList.remove('hide');
            announcer.innerHTML = `Player Two Wins`;
            generateHappyImage();
            playerTwoScoreDiv.innerHTML = playerTwoScore += 1;
            isGameActive = false;
        }
        if (!board.includes('') && !playerOneWinner && !playerTwoWinner) {
            modal.classList.remove('hide');
            announcer.innerHTML = `TIE GAME! HIT RESET!`;
            generateSadImage();
        }
    }


    function changePlayer() {
        if (playerOneTurn) {
            playerOneTurn = false;
            whichPlayer.innerHTML = `Player Two's turn`;
        } else {
            playerOneTurn = true;
            whichPlayer.innerHTML = `Player One's Turn`;
        }
    }

    function onTwoPlayerGameTileClick(tile, index) {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = tileValue;
            numbers.innerHTML = tileValues.join(' ');
            board[index] = parseInt(tileValue);

            changePlayer();
            checkForWinner();
            generateTileValue();
        }
    }

    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        isGameActive = true;
        tiles.forEach(function (tile) {
            tile.innerText = '';
        });
        // tileValue = 1;
        numbers.innerHTML = tileValues.join(' ');
        playerOneWinner = false;
        playerTwoWinner = false;
        announcer.innerHTML = ``;
        modal.classList.add('hide');
        target.innerHTML = generateRandomInteger(12, 20);
        generateTileValue();
    }

    function resetFromModal() {
        resetBoard();
        imageSpace.removeChild(imageSpace.firstChild);
    }

    function returnToComputerGame(){
        let belowContainerDiv= document.querySelector('.below-container');
        belowContainerDiv.remove();
        tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        openComputerGame();
    }

    returnButton.addEventListener('click', returnToComputerGame);
    reset.addEventListener('click', resetBoard);
    modalReset.addEventListener('click', resetFromModal);
}
//initiates game vs computer
function openComputerGame() {
    setTilesHTML();
    let scoreAndResetHTML = `
    </div>
        <div id='scores'>
            Player <span id='player'></span>
            Computer <span id='computer'></span>
        </div>
        <button class='button' id='reset'>Reset</button>
        <div id='returner'>
        <button class='button' id='return-button'>
           Two Player
        </button>
    </div>`;
    setScoreAndResetHTML(scoreAndResetHTML);
    let tiles = Array.from(document.getElementsByClassName('tile'));
    numbers.innerHTML = tileValues.join(' ');
    let availableMoves = [];
    let isGameActive = true;
    let playerWinner = false;
    let computerWinner = false;
    let returnButton = document.getElementById('return-button');
    let playerScoreDiv = document.getElementById('player');
    let computerScoreDiv = document.getElementById('computer');
    // Init scores to 0
    playerScoreDiv.innerHTML = 0;
    computerScoreDiv.innerHTML = 0;
    let playerScore = parseInt(playerScoreDiv.innerHTML);
    let computerScore = parseInt(computerScoreDiv.innerHTML);
    target.innerHTML = generateRandomInteger(12, 20);
    generateTileValue();
    tiles.forEach(function (tile, index) {
        tile.addEventListener('click', () => onSinglePlayerGameTileClick(tile, index));
    });


    function checkPlayerWinner() {
        playerWinner = checkIfWon();
        if (playerWinner) {
            modal.classList.remove('hide');
            announcer.innerHTML = `Player Wins`;
            generateHappyImage();
            playerScoreDiv.innerHTML = playerScore += 1;
            isGameActive = false;
        }
        if (!board.includes('') && !playerWinner && !computerWinner) {
            modal.classList.remove('hide');
            generateSadImage();
            announcer.innerHTML = `Tie! Click to Reset!`;
            isGameActive = false;
        }
    }

    function checkComputerWinner() {
        computerWinner = checkIfWon();
        if (computerWinner) {
            modal.classList.remove('hide');
            announcer.innerHTML = `Computer Wins`;
            generateSadImage();
            computerScoreDiv.innerHTML = computerScore += 1;
            isGameActive = false;
        }
    }

    function onSinglePlayerGameTileClick(tile, index) {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = tileValue;
            board[index] = parseInt(tileValue);
            checkPlayerWinner();
            numbers.innerHTML = tileValues.join(' ');
            if (isGameActive) {
                generateTileValue();
                if (board.includes('') && !playerWinner) {
                    setTimeout(computerAction, 500);
                }
            }
        }
    }
    //gets available moves for computer
    function getAvailableMoves() {
        tiles.forEach(function (tile) {
            if (tile.innerText == '') {
                availableMoves.push(tile);
            }
            return availableMoves;
        });
    } //https://codepen.io/lando464/pen/BPGEKO
    //resets array of available moves
    function emptyAvailableMoves() {
        availableMoves.splice(0, availableMoves.length);
        return availableMoves;
    }
    //computer takes a random move
    function computerAction() {
        getAvailableMoves();
        let randomMove = Math.floor(Math.random() * availableMoves.length);
        let newTile = availableMoves[randomMove];
        newTile.innerText = tileValue; 
        board[tiles.indexOf(newTile)] = parseInt(tileValue);
        numbers.innerHTML = tileValues.join(' ');
        checkComputerWinner();
        emptyAvailableMoves();
        generateTileValue();
    }

    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        isGameActive = true;
        tiles.forEach(function (tile) {
            tile.innerText = '';
        });
        numbers.innerHTML = tileValues.join(' ');
        playerWinner = false;
        computerWinner = false;
        announcer.innerHTML = ``;
        modal.classList.add('hide');
        target.innerHTML = generateRandomInteger(12, 20);
        generateTileValue();
    }

    function resetFromModal() {
        resetBoard();
        imageSpace.removeChild(imageSpace.firstChild);
    }

    function returnToPlayerGame(){
        let belowContainerDiv= document.querySelector('.below-container');
        tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        belowContainerDiv.remove();
        openPlayerGame();
    }

    returnButton.addEventListener('click', returnToPlayerGame);
    reset.addEventListener('click', resetBoard);
    modalReset.addEventListener('click', resetFromModal);
}

function onStartButtonClick() {
    setGameChoicesHTML();
    initEventListeners();
}