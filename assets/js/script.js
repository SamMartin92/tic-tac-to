const start = document.getElementById('start-button');
const instructions = document.getElementById('instructions');
const game = document.getElementsByTagName('section')[0];

start.addEventListener('click', openGameChoice);

function openGameChoice() {
    let gameChoiceHTML = `
                  <div class='game-choice'>
                  <button class='button' id='vs-computer'>Vs Computer</button>
                  <button class='button' id='vs-player'>Two Player</button>
                  </div>  `
    instructions.innerHTML = gameChoiceHTML;


    let vsComputer = document.getElementById('vs-computer');
    vsComputer.addEventListener('click', openComputerGame);

    let vsPlayer = document.getElementById('vs-player');
    vsPlayer.addEventListener('click', openPlayerGame);

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
        instructions.classList.add('container');
        scoreAndReset.innerHTML = `<div>
        <div id='which-player'></div><span id=announcer></span></div>
    <div id='scores'>
    Player One <span id='player-one'></span> Player Two <span id='player-two'></span>
    </div>
    <button class='button' id='reset'>Reset</button>`;
        scoreAndReset.classList.add('below-container');
        game.appendChild(scoreAndReset);


        let tiles = Array.from(document.getElementsByClassName('tile'));
        let reset = document.getElementById('reset');
        let announcer = document.getElementById('announcer');
        let target = document.getElementById('target-value');
        let board = ['', '', '', '', '', '', '', '', ''];
        let tileValue = 1;
        let isGameActive = true;
        let playerOneWinner = false;
        let playerTwoWinner = false;
        let whichPlayer= document.getElementById('which-player');
        whichPlayer.innerHTML=`Player One's Turn`;
        let playerOne = document.getElementById('player-one');
        let playerTwo = document.getElementById('player-two');
        playerOne.innerHTML = 0;
        playerTwo.innerHTML = 0;
        let playerOneScore = parseInt(playerOne.innerHTML);
        let playerTwoScore = parseInt(playerTwo.innerHTML);
        target.innerHTML = generateRandomInteger(12, 20);
        let playerOneTurn= true

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

        function checkForWinner(){
            for (let i = 0; i <= 7; i++) {
                const winCondition = winningConditions[i];
                const a = board[winCondition[0]];
                const b = board[winCondition[1]];
                const c = board[winCondition[2]];
                if (a === '' || b === '' || c === '') {

                    continue;

                }
                if (a + b + c === parseInt(target.innerHTML)) {
                    playerOneTurn=true ? playerTwoWinner=true : playerOneWinner=true;
                    break;
                }
            }

            if (playerOneWinner) {
                announcer.innerHTML = `Player One Wins`;
                playerOne.innerHTML = playerOneScore += 1;;
                isGameActive = false;
            }

            if(playerTwoWinner){
                announcer.innerHTML = `Player Two Wins`;
                playerTwo.innerHTML = playerTwoScore += 1;;
                isGameActive = false;
            }


            if (!board.includes('') && !playerOneWinner && !playerTwoWinner) {
                announcer.innerHTML = `TIE GAME! HIT RESET!`
            }

        }

        function changePlayer(){ 
            if(playerOneTurn){
                playerOneTurn=false;
                whichPlayer.innerHTML=`Player Two's turn`;
            }else{
                playerOneTurn=true;
                whichPlayer.innerHTML=`Player One's Turn`;
            }
        }


        function isValidAction(tile) {
            if (tile.innerText !== '') {
                return false;
            }
            return true;
        };

        function updateBoard(index) {
            board[index] = parseInt(tiles[index].innerText);
        }



        function userAction(tile, index) {
            if (isValidAction(tile) && isGameActive) {
                //piece missing from this function re adding classes to player
                tile.innerText = tileValue;
                tileValue++;
                updateBoard(index);
                checkForWinner();
                changePlayer();
            }
        }


        //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        //generates random number
        function generateRandomInteger(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min))
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
            tileValue = 1;
            playerOneWinner = false;
            playerTwoWinner = false;
            announcer.innerHTML = ``;
            target.innerHTML = generateRandomInteger(12, 20);
        }
        reset.addEventListener('click', resetBoard);


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
        instructions.classList.add('container');
        scoreAndReset.innerHTML = `<div><span id=announcer></span></div>
    <div id='scores'>
    Player <span id='player'></span> Computer <span id='computer'></span>
    </div>
    <button class='button' id='reset'>Reset</button>`;
        scoreAndReset.classList.add('below-container');
        game.appendChild(scoreAndReset);


        let tiles = Array.from(document.getElementsByClassName('tile'));
        let reset = document.getElementById('reset');
        let announcer = document.getElementById('announcer');
        let target = document.getElementById('target-value');
        let board = ['', '', '', '', '', '', '', '', ''];
        let availableMoves = [];
        let tileValue = 1;
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
                announcer.innerHTML = `Player Wins`;
                player.innerHTML = playerScore += 1;;
                isGameActive = false;
            }


            if (!board.includes('') && !playerWinner && !computerWinner) {
                announcer.innerHTML = `TIE GAME! HIT RESET!`
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
                announcer.innerHTML = `Computer Wins`;
                computer.innerHTML = computerScore += 1;
                isGameActive = false;
            }



        }

        function isValidAction(tile) {
            if (tile.innerText !== '') {
                return false;
            }
            return true;
        };

        function updateBoard(index) {
            board[index] = parseInt(tiles[index].innerText);
        }



        function userAction(tile, index) {
            if (isValidAction(tile) && isGameActive) {
                //piece missing from this function re adding classes to player
                tile.innerText = tileValue;
                tileValue++;
                updateBoard(index);
                checkPlayerWinner();
                if (tileValue !== 10 && !playerWinner) {
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
            newTile.innerText = tileValue++;
            updateBoard(tiles.indexOf(newTile));
            checkComputerWinner();
            emptyAvailableMoves();
        }

        //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        //generates random number
        function generateRandomInteger(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min))
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
            tileValue = 1;
            playerWinner = false;
            computerWinner = false;
            announcer.innerHTML = ``;
            target.innerHTML = generateRandomInteger(12, 20);
        }
        reset.addEventListener('click', resetBoard);


    }
}