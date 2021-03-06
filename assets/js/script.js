//sets global variables
const startButton = document.getElementById('start-button');
const mainContainer = document.getElementById('instructions');
const game = document.getElementsByTagName('section')[0];
const numbers = document.getElementById('numbers');
const modal = document.getElementById('modal-container');
const imageSpace = document.getElementById('image-holder');
const modalReset = document.getElementById('reset-modal');
const closeButton = document.getElementById('close');
const seeBoardButton = document.getElementById('see-board');
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
let tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //array of values to be input into game
let board = ['', '', '', '', '', '', '', '', '']; //updates as moves are made by player or game
let instructionsHTML = `
                        <ul>
                        <li>Each turn, you get a number.</li>
                        <li>Click on a square to place the number.</li>
                        <li>Make a full row, column or diagonal add up to the score for that round.</li>
                        <li>Play against the computer or another player.</li>
                        <li>If all squares are filled with no winner, its a tie game.</li>
                        </ul>
                        `;
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

//generates random number
//credit: https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}
//randomly generates value for the next move
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
//sets happy image into end of round announcer
function generateHappyImage() {
    let randomInteger = generateRandomInteger(0, 3);
    let imageDiv = document.createElement('div');
    imageDiv.innerHTML = `<img alt='A happy dog' src='${happyImages[randomInteger]}'>`;
    imageSpace.appendChild(imageDiv);
}
//sets happy image into end of round announcer
function generateSadImage() {
    let randomInteger = generateRandomInteger(0, 3);
    let imageDiv = document.createElement('div');
    imageDiv.innerHTML = `<img alt='A happy dog' src='${sadImages[randomInteger]}'>`;
    imageSpace.appendChild(imageDiv);
}
//disables display of modal
function hideModal() {
    modal.classList.add('hide');
    closeButton.classList.add('hide');
}
//enables display of modal
function showModal() {
    modal.classList.remove('hide');
    closeButton.classList.remove('hide');
}
//hides modal without restarting game 
function letSeeBoard() {
    modal.classList.add('hide');
    imageSpace.innerHTML = ``;
}
//displays modal with rules of game
function showInstructions() {
    showModal();
    seeBoardButton.classList.add('hide');
    announcer.innerHTML = instructionsHTML;
    modalReset.classList.add('hide');
}
//closes modal
function closeInstructions() {
    hideModal();
    announcer.innerHTML = ``;
    seeBoardButton.classList.remove('hide');
    modalReset.classList.remove('hide');
}
//checks if winning conditions of game have been met
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
//checks if value can be placed in specific tile
function isValidAction(tile) {
    if (tile.innerText !== '') {
        return false;
    }
    return true;
}
//adds event listener to start button
startButton.addEventListener('click', onStartButtonClick);

// opens game choice screen and sets up buttons
function onStartButtonClick() {
    setGameChoicesHTML();
    initEventListeners();
}
//displays game choice buttons
function setGameChoicesHTML() {
    let gameChoiceHTML = `
    <div class='game-choice'>
    <button class='button' id='vs-computer'>Vs Computer</button>
    <button class='button' id='vs-player'>Two Player</button>
    </div>  `;
    mainContainer.innerHTML = gameChoiceHTML;
}
//adds event listeners to game choice buttons
function initEventListeners() {
    let vsComputerBtn = document.getElementById('vs-computer');
    let vsPlayerBtn = document.getElementById('vs-player');
    vsComputerBtn.addEventListener('click', openComputerGame);
    vsPlayerBtn.addEventListener('click', openPlayerGame);
}
//sets up the playing board
function setTilesHTML() {
    let tilesHTML = '';
    for (let i = 0; i < 9; i++) {
        tilesHTML += '<div class="tile hover"></div>';
    }
    mainContainer.innerHTML = tilesHTML;
    mainContainer.removeAttribute('id');
    mainContainer.classList.add('container');
}
//sets up div containing scores and buttons
function setScoreAndResetHTML(htmlToSet) {
    let scoreAndResetDiv = document.createElement('div');
    scoreAndResetDiv.innerHTML = htmlToSet;
    scoreAndResetDiv.classList.add('below-container');
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
        <div id='scores' class='larger-font'>
            Player One <span id='player-one' class='score-holder'></span>
            Player Two <span id='player-two' class='score-holder'></span>
        </div>
        <button class='button' id='reset'>Reset</button>
        <div id='returner'>
            <button class='button' id='return-button'>
            One Player
            </button>
            <button class='button' id='instructions-button'>
            Instructions
            </button>
        </div>
    <div>`;
    setScoreAndResetHTML(scoreAndResetHTML);
    numbers.innerHTML = tileValues.join(' '); //displays unused values above board
    let tiles = Array.from(document.getElementsByClassName('tile')); //generates array of tiles on the board
    let isGameActive = true;
    let playerOneWinner = false;
    let playerTwoWinner = false;
    let whichPlayer = document.getElementById('which-player');
    let returnButton = document.getElementById('return-button');
    let instructionsButton = document.getElementById('instructions-button');
    whichPlayer.innerHTML = `Player One's Turn`;
    let playerOneScoreDiv = document.getElementById('player-one');
    let playerTwoScoreDiv = document.getElementById('player-two');
    // Init scores to 0
    playerOneScoreDiv.innerHTML = 0;
    playerTwoScoreDiv.innerHTML = 0;
    let playerOneScore = parseInt(playerOneScoreDiv.innerHTML);
    let playerTwoScore = parseInt(playerTwoScoreDiv.innerHTML);
    target.innerHTML = generateRandomInteger(12, 20); //sets target score for first round
    let playerOneTurn = true;
    generateTileValue(); //sets random value for first move

    //adds event listeners to each tile on playing board
    tiles.forEach(function (tile, index) {
        tile.addEventListener('click', () => onTwoPlayerGameTileClick(tile, index));
    });
    //sets actions for if winning conditions have been met
    function checkForWinner() {
        const hasWon = checkIfWon();
        if (hasWon && playerOneTurn) {
            playerTwoWinner = true;
        } else if (hasWon && !playerOneTurn) {
            playerOneWinner = true;
        } else {
            playerOneWinner = false;
            playerTwoWinner = false;
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
    //swtches value of playerOneTurn boolean
    function changePlayer() {
        if (playerOneTurn) {
            playerOneTurn = false;
            whichPlayer.innerHTML = `Player Two's turn`;
        } else {
            playerOneTurn = true;
            whichPlayer.innerHTML = `Player One's Turn`;
        }
    }
    //inserts value into tile on playing board, updates board array and sets up next move
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
    //sets up new round
    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        isGameActive = true;
        tiles.forEach(function (tile) {
            tile.innerText = '';
        });
        numbers.innerHTML = tileValues.join(' ');
        playerOneWinner = false;
        playerTwoWinner = false;
        announcer.innerHTML = ``;
        modal.classList.add('hide');
        target.innerHTML = generateRandomInteger(12, 20);
        generateTileValue();
    }
    //sets new round from modal reset button
    function resetFromModal() {
        resetBoard();
        imageSpace.innerHTML = ``;
    }
    //switches to one-player game 
    function returnToComputerGame() {
        let belowContainerDiv = document.querySelector('.below-container');
        belowContainerDiv.remove();
        board = ['', '', '', '', '', '', '', '', ''];
        tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        openComputerGame();
    }
    //assigning event listeners to in-game buttons
    returnButton.addEventListener('click', returnToComputerGame);
    instructionsButton.addEventListener('click', showInstructions);
    closeButton.addEventListener('click', closeInstructions);
    reset.addEventListener('click', resetBoard);
    modalReset.addEventListener('click', resetFromModal);
    seeBoardButton.addEventListener('click', letSeeBoard);
}
//initiates game vs computer
function openComputerGame() {
    setTilesHTML();
    let scoreAndResetHTML = `
    </div>
        <div id='scores' class='larger-font'>
            Player <span id='player' class='score-holder'></span>
            Computer <span id='computer' class='score-holder'></span>
        </div>
        <button class='button' id='reset'>Reset</button>
        <div id='returner'>
        <button class='button' id='return-button'>
           Two Player
        </button>
        <button class='button' id='instructions-button'>
        Instructions
        </button>
    </div>`;
    setScoreAndResetHTML(scoreAndResetHTML);
    let tiles = Array.from(document.getElementsByClassName('tile')); //generates array of tiles on the board
    numbers.innerHTML = tileValues.join(' '); //displays unused values above board
    let availableMoves = []; //empty array to be filled with potential moves for 'computer'
    let isGameActive = true;
    let playerWinner = false;
    let computerWinner = false;
    let returnButton = document.getElementById('return-button');
    let instructionsButton = document.getElementById('instructions-button');
    let playerScoreDiv = document.getElementById('player');
    let computerScoreDiv = document.getElementById('computer');
    // Init scores to 0
    playerScoreDiv.innerHTML = 0;
    computerScoreDiv.innerHTML = 0;
    let playerScore = parseInt(playerScoreDiv.innerHTML);
    let computerScore = parseInt(computerScoreDiv.innerHTML);
    target.innerHTML = generateRandomInteger(12, 20); //sets target score for first round
    generateTileValue(); //sets random value for first move
    //adds event listeners to each tile on playing board
    tiles.forEach(function (tile, index) {
        tile.addEventListener('click', () => onSinglePlayerGameTileClick(tile, index));
    });
    //adds and removes class which prevents adding value to tiles during the computer's turn
    function toggleclick() {
        tiles.forEach(function (tile) {
            tile.classList.toggle('remove-click');
        });
    }
    //sets actions in case that winning conditions met after player's turn
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
    //sets actions in case that winning conditons met after computer's turn
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
    //adds value to tile on player's click and initiates computer's turn if game has not been won or drawn
    function onSinglePlayerGameTileClick(tile, index) {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = tileValue;
            board[index] = parseInt(tileValue);
            checkPlayerWinner();
            numbers.innerHTML = tileValues.join(' ');
            toggleclick();
            if (isGameActive) {
                generateTileValue();
                if (board.includes('') && !playerWinner) {
                    setTimeout(computerAction, 500);
                }
            }
        }
    }
    //gets available moves for computer
    //credit: //https://codepen.io/lando464/pen/BPGEKO
    function getAvailableMoves() {
        tiles.forEach(function (tile) {
            if (tile.innerText == '') {
                availableMoves.push(tile);
            }
            return availableMoves;
        });
    }
    //resets array of available moves
    function emptyAvailableMoves() {
        availableMoves.splice(0, availableMoves.length);
        return availableMoves;
    }
    //computer takes a random move and conditions for next move are set
    function computerAction() {
        getAvailableMoves();
        let randomMove = Math.floor(Math.random() * availableMoves.length);
        let newTile = availableMoves[randomMove];
        newTile.innerText = tileValue;
        board[tiles.indexOf(newTile)] = parseInt(tileValue);
        numbers.innerHTML = tileValues.join(' ');
        toggleclick();
        checkComputerWinner();
        emptyAvailableMoves();
        generateTileValue();
    }
    //sets up new round
    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        isGameActive = true;
        tiles.forEach(function (tile) {
            tile.innerText = '';
            tile.classList.remove('remove-click');
        });
        numbers.innerHTML = tileValues.join(' ');
        playerWinner = false;
        computerWinner = false;
        announcer.innerHTML = ``;
        modal.classList.add('hide');
        target.innerHTML = generateRandomInteger(12, 20);
        generateTileValue();
    }
    //sets new round from modal reset button
    function resetFromModal() {
        resetBoard();
        imageSpace.innerHTML = ``;
    }
    //switches to two-player game
    function returnToPlayerGame() {
        let belowContainerDiv = document.querySelector('.below-container');
        board = ['', '', '', '', '', '', '', '', ''];
        tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        belowContainerDiv.remove();
        openPlayerGame();
    }
    //assigning event listeners to in-game buttons
    returnButton.addEventListener('click', returnToPlayerGame);
    reset.addEventListener('click', resetBoard);
    instructionsButton.addEventListener('click', showInstructions);
    closeButton.addEventListener('click', closeInstructions);
    modalReset.addEventListener('click', resetFromModal);
    seeBoardButton.addEventListener('click', letSeeBoard);
}