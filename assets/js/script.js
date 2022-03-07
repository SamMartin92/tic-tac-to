const start = document.getElementById('start-button');
const instructions = document.getElementById('instructions');
const game = document.getElementsByTagName('section')[0];
const numbers = document.getElementById('numbers');
const modal = document.getElementById('modal-container');
const imageSpace= document.getElementById('image-holder');
const modalReset = document.getElementById('reset-modal');
const displayer= document.getElementById('displayer');
const happyImages = ['assets/images/score-images/happy-1.png', 'assets/images/score-images/happy-2.png',
    'assets/images/score-images/happy-3.png', 'assets/images/score-images/happy-4.png'
];
const sadImages = ['assets/images/score-images/sad-1.png', 'assets/images/score-images/sad-2.png',
    'assets/images/score-images/sad-3.png', 'assets/images/score-images/sad-4.png'
];

//https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
//generates random number
function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min))
}

function generateHappyImage() {
    let image = generateRandomInteger(0, 3);
    let imageDiv= document.createElement('div');
    imageDiv.innerHTML =`<img alt='A happy dog' src='${happyImages[image]}'>`;
    imageSpace.appendChild(imageDiv);
}
function generateSadImage() {
    let image = generateRandomInteger(0, 3);
    let imageDiv= document.createElement('div');
    imageDiv.innerHTML =`<img alt='A happy dog' src='${sadImages[image]}'>`;
    imageSpace.appendChild(imageDiv);
}

start.addEventListener('click', openGameChoice);

function openGameChoice() {
    let gameChoiceHTML = `
                  <div class='game-choice'>
                  <button class='button' id='vs-computer'>Vs Computer</button>
                  <button class='button' id='vs-player'>Two Player</button>
                  </div>  `;
    instructions.innerHTML = gameChoiceHTML;

    let vsComputer = document.getElementById('vs-computer');
    vsComputer.addEventListener('click', openComputerGame);

    let vsPlayer = document.getElementById('vs-player');
    vsPlayer.addEventListener('click', openPlayerGame);

    let tileValue;
    let board = ['', '', '', '', '', '', '', '', ''];
    //initiates game vs player
    function openPlayerGame() {

        let containerHTML = `   
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>`;
        let scoreAndReset = document.createElement('div');
        instructions.innerHTML = containerHTML;
        instructions.removeAttribute('id');
        instructions.classList.add('container'); //removed <span id=announcer></span> from line 44
        scoreAndReset.innerHTML = `<div> 
        <div id='which-player'></div></div>
    <div id='scores'>
    Player One <span id='player-one'></span> Player Two <span id='player-two'></span>
    </div>
    <button class='button' id='reset'>Reset</button>
    <div id='returner'>
    <button class='button' id='return-button'>Go back <i class="fa-solid fa-arrow-left-long"></i></button></div>`;
        scoreAndReset.classList.add('below-container');
        game.appendChild(scoreAndReset);


        let tiles = Array.from(document.getElementsByClassName('tile'));
        let tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        numbers.innerHTML = tileValues.toString().replaceAll(',', ' ');
        let reset = document.getElementById('reset');
        let announcer = document.getElementById('announcer');
        let target = document.getElementById('target-value');
        //let tileValue = 1;
        let isGameActive = true;
        let playerOneWinner = false;
        let playerTwoWinner = false;
        let whichPlayer = document.getElementById('which-player');
        whichPlayer.innerHTML = `Player One's Turn`;
        let playerOne = document.getElementById('player-one');
        let playerTwo = document.getElementById('player-two');
        playerOne.innerHTML = 0;
        playerTwo.innerHTML = 0;
        let playerOneScore = parseInt(playerOne.innerHTML);
        let playerTwoScore = parseInt(playerTwo.innerHTML);
        target.innerHTML = generateRandomInteger(12, 20);
        let playerOneTurn = true;
        let value;
        let returnButton = document.getElementById('return-button');
        generateTileValue();
        displayer.innerHTML=`Next move: ${tileValue}`;

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


        function checkForWinner() {
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                const a = board[winCondition[0]];
                const b = board[winCondition[1]];
                const c = board[winCondition[2]];
                if (a === '' || b === '' || c === '') {

                    continue;

                }
                if (a + b + c === parseInt(target.innerHTML)) {
                    playerOneTurn = true ? playerTwoWinner = true : playerOneWinner = true;
                    break;
                }
            }

            if (playerOneWinner) {
                modal.classList.remove('hide');
                announcer.innerHTML = `Player One Wins`;
                generateHappyImage();
                playerOne.innerHTML = playerOneScore += 1;
                isGameActive = false;
            }

            if (playerTwoWinner) {
                modal.classList.remove('hide');
                announcer.innerHTML = `Player Two Wins`;
                generateHappyImage();
                playerTwo.innerHTML = playerTwoScore += 1;
                isGameActive = false;
            }


            if (!board.includes('') && !playerOneWinner && !playerTwoWinner) {
                modal.classList.remove('hide');
                announcer.innerHTML = `TIE GAME! HIT RESET!`
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


        function isValidAction(tile) {
            if (tile.innerText !== '') {
                return false;
            }
            return true;
        }

        function updateBoard(index) {
            board[index] = parseInt(tiles[index].innerText);
        }

        function userAction(tile, index) {
            if (isValidAction(tile) && isGameActive) {
                //piece missing from this function re adding classes to player
                tile.innerText = tileValue;
               // tileValue++;
                numbers.innerHTML = tileValues.toString().replaceAll(',', ' ');
                updateBoard(index);
                checkForWinner();
                console.log(playerOneTurn);
                changePlayer();
              generateTileValue();
            }
        }


        //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        //generates random number
        function generateRandomInteger(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min))
        }
        function generateTileValue(){
            tileValue = tileValues[Math.floor(Math.random() * tileValues.length)];
            checkTileValue();
            console.log(tileValue);
            console.log(tileValues);

        }

        function checkTileValue(){

            for (i=0; i<=board.length; i++){
                if( board[i]!==tileValue){
                  tileValues.splice(tileValue-1,1,'');
                 displayer.innerHTML=`Next move: ${tileValue}`;
                    continue;
                }
                if( board[i]==tileValue){
                    generateTileValue()
                }

            }
        }

        //sets target value for round, if same number is chosen twice, a new target value is generated
        function setTargetValue() {
            value = generateRandomInteger(12, 20);
            if (value == target.innerHTML) {
                target.innerHTML = generateRandomInteger(12, 20);
            } else {
                target.innerHTML = value;
            }
        }

        tiles.forEach(function (tile, index) {
            tile.addEventListener('click', () => userAction(tile, index));
        });

        function resetBoard() {
            board = ['', '', '', '', '', '', '', '', ''];
            isGameActive = true;

            tiles.forEach(function (tile) {
                tile.innerText = '';
            });
           // tileValue = 1;
            tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            numbers.innerHTML = tileValues.toString().replaceAll(',', ' ');
            playerOneWinner = false;
            playerTwoWinner = false;
            announcer.innerHTML = ``;
            modal.classList.add('hide');
            setTargetValue();
            generateTileValue();
        }

        function resetFromModal(){
            resetBoard();
            imageSpace.removeChild(imageSpace.firstChild);
        }

        returnButton.addEventListener('click', openGameChoice);
        reset.addEventListener('click', resetBoard);
        modalReset.addEventListener('click', resetFromModal);


    }

    //initiates game vs computer
    function openComputerGame() {

        let containerHTML = `   
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>
                    <div class="tile hover"></div>`;
        let scoreAndReset = document.createElement('div');
        instructions.innerHTML = containerHTML;
        instructions.removeAttribute('id');
        instructions.classList.add('container'); //removed <span></span> id=announcer from below span
        scoreAndReset.innerHTML = `<div></div>
    <div id='scores'>
    Player <span id='player'></span> Computer <span id='computer'></span>
    </div>
    <button class='button' id='reset'>Reset</button>
    <div id='returner'>
    <button class='button' id='return-button'>Go back<br><i class="fa-solid fa-arrow-left-long"></i></button></div>`;
        scoreAndReset.classList.add('below-container'); //changed reset to class above
        game.appendChild(scoreAndReset);


        let tiles = Array.from(document.getElementsByClassName('tile'));
        let reset = document.getElementById('reset');
        let announcer = document.getElementById('announcer');
        let target = document.getElementById('target-value');
        let board = ['', '', '', '', '', '', '', '', ''];
        let tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        numbers.innerHTML = tileValues.toString().replaceAll(',', ' ');
        let availableMoves = [];
       // let tileValue = 1;
        let isGameActive = true;
        let playerWinner = false;
        let computerWinner = false;
        let player = document.getElementById('player');
        let computer = document.getElementById('computer');
        player.innerHTML = 0;
        computer.innerHTML = 0;
        let playerScore = parseInt(player.innerHTML);
        let computerScore = parseInt(computer.innerHTML);
        target.innerHTML = generateRandomInteger(12, 20);
        generateTileValue();
        displayer.innerHTML=`Next move: ${tileValue}`;


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

        function checkPlayerWinner() {
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                const a = board[winCondition[0]];
                const b = board[winCondition[1]];
                const c = board[winCondition[2]];
                if (a === '' || b === '' || c === '') {

                    continue;

                }
                if (a + b + c === parseInt(target.innerHTML)) {
                    playerWinner = true;
                    break;
                }
            }

            if (playerWinner) {
                modal.classList.remove('hide');
                announcer.innerHTML = `Player Wins`;
                generateHappyImage();
                player.innerHTML = playerScore += 1;
                isGameActive = false;
            }


            if (!board.includes('') && !playerWinner && !computerWinner) {
                modal.classList.remove('hide');
                generateSadImage();
                announcer.innerHTML = `TIE GAME! HIT RESET!`;
            }
        }

        function checkComputerWinner() {
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                const a = board[winCondition[0]];
                const b = board[winCondition[1]];
                const c = board[winCondition[2]];
                if (a === '' || b === '' || c === '') {

                    continue;

                }
                if (a + b + c === parseInt(target.innerHTML)) {
                    computerWinner = true;
                    break;
                }
            }

            if (computerWinner) {
                modal.classList.remove('hide');
                announcer.innerHTML = `Computer Wins`;
                generateSadImage();
                computer.innerHTML = computerScore += 1;
                isGameActive = false;
            }



        }

        function isValidAction(tile) {
            if (tile.innerText !== '') {
                return false;
            }
            return true;
        }

        function updateBoard(index) {
            board[index] = parseInt(tiles[index].innerText);
        }



        function userAction(tile, index) {
            if (isValidAction(tile) && isGameActive) {
                //piece missing from this function re adding classes to player
                tile.innerText = tileValue;
               // tileValue++;
                updateBoard(index);
                checkPlayerWinner();
                numbers.innerHTML = tileValues.toString().replaceAll(',', ' ');
                generateTileValue();
                if (board.includes('') && !playerWinner) {
                    setTimeout(computerAction, 500);
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
            newTile.innerText = tileValue;//removed tileValue++
            updateBoard(tiles.indexOf(newTile));
            numbers.innerHTML = tileValues.toString().replaceAll(',', ' ');
            checkComputerWinner();
            emptyAvailableMoves();
            generateTileValue();
        }

        //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        //generates random number
        function generateRandomInteger(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        }

                function generateTileValue(){
            tileValue = tileValues[Math.floor(Math.random() * tileValues.length)];
            checkTileValue();
            console.log(tileValue);
            console.log(tileValues);

        }

        function checkTileValue(){

            for (i=0; i<=board.length; i++){
                if( board[i]!==tileValue){
                  tileValues.splice(tileValue-1,1,'');
                 displayer.innerHTML=`Next move: ${tileValue}`;
                    continue;
                }
                if( board[i]==tileValue){
                    generateTileValue()
                }

            }
        }

        tiles.forEach(function (tile, index) {
            tile.addEventListener('click', () => userAction(tile, index));
        });

        function resetBoard() {
            board = ['', '', '', '', '', '', '', '', ''];
            isGameActive = true;

            tiles.forEach(function (tile) {
                tile.innerText = '';
            })
            //tileValue = 1;
            tileValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            numbers.innerHTML = tileValues.toString().replaceAll(',', ' ');
            playerWinner = false;
            computerWinner = false;
            announcer.innerHTML = ``;
            modal.classList.add('hide');
            target.innerHTML = generateRandomInteger(12, 20);
            generateTileValue();
        }

        function resetFromModal(){
            resetBoard();
            imageSpace.removeChild(imageSpace.firstChild);
        }


        reset.addEventListener('click', resetBoard);
        modalReset.addEventListener('click', resetFromModal);


    }
}