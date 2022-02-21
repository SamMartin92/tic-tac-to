const start = document.getElementById('start-button');
const instructions = document.getElementById('instructions');
const game = document.getElementsByTagName('section')[0];




start.addEventListener('click', openComputerGame);


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
    scoreAndReset.innerHTML = `<div id='scores'>
    Player <span>0</span> Computer <span>0</span>
    </div>
    <button class='button' id='reset'>Reset</button>`;
    scoreAndReset.classList.add('below-container');
    game.appendChild(scoreAndReset);


    let tiles = Array.from(document.getElementsByClassName('tile'));
    let reset= document.getElementById('reset');
    let board = ["", "", "", "", "", "", "", "", ""];
    let tileValue = 1;
    let isGameActive = true;


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

    function isValidAction(tile) {
        if (tile.textContent !== '') {
            return false;
            
        }

        return true;
    };

    function updateBoard(index) {
        board[index] = tileValue;
    }

    function userAction(tile, index) {
        if (isValidAction(tile) && isGameActive) {
            tile.innerText = tileValue;
            /*piece missing from this function re adding classes to player*/
            updateBoard(index);
            tileValue=tileValue+1;
            computerAction();
            
        }
    }
/*my attempt at getting available tiles
    function computerAction(tile, index){
        for(i=0; i<=tiles.length; i++){
            if (i.innerText!==""){
                tiles.splice(i,1);
            }
        console.log(tiles);    
        }
    }*/

    tiles.forEach(function (tile, index) {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;

        tiles.forEach(function (tile) {
            tile.innerText = '';
        })
        
        tileValue=1;
    }
    reset.addEventListener('click', resetBoard);



    
}