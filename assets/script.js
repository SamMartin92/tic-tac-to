window.addEventListener('DOMContentLoaded', function() {
const start = document.getElementById('start-button');
const instructions = document.getElementById('instructions');
const game = document.getElementsByTagName('section')[0];

start.addEventListener('click', openGame);
start.addEventListener('click', createBoard);

function openGame() {
    let containerHTML = `   
                     <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>
                    <div class="tile"></div>`
                    ;
    let scoreAndReset= document.createElement('div');
    instructions.innerHTML=containerHTML;
    instructions.removeAttribute('id');
    instructions.classList.add('container');
    scoreAndReset.innerHTML=`<div id='scores'>
    Player <span>0</span> Computer <span>0</span>
    </div>
    <button class='button' id='reset'>Reset</button>`;
    scoreAndReset.classList.add('below-container');
    game.appendChild(scoreAndReset);
    
    
}

});