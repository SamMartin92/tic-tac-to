# Tic Tac To

**Pic with all the screens

[Link to live site.](https://sammartin92.github.io/tic-tac-to/)

* ## Objective
<p> My objective in this project is to build an interactive front-end site. It should respond to the users' actions, allowing them to enagage with the data and alter the way the site displays the information, allowing them to achieve the goals of the site and experience it in a straight-forward and enjoyable manner.</p>

<p> This encapsulates the brief as laid out Portfolio Project 2 Assessment Guide. This site has been built as my second portfolio project as part of my Diploma in Software Development with the [Code Institute](https://codeinstitute.net/ie/). For my project, I have decided to build a math's based variation on the classic game tic tac toe, hence the title. The game is aimed at children from ages 4-7 who are beginnning to learn and understand addition for the first time.</p>

<p> The game sets a new target score between 12-20, which is displayed above the tic-tac-toe board and users input a randomly generated number from 1-9 on each turn by clicking a tile on the board. A round is won if three numbers across a row, column or diagonal sum up to the target score for that round. The game can be played with another user or verses 'the computer'.</p>
* ### Strategy

* ### Scope

* ### Structure

* ### Skeleton

* ### Surface

* ## User Stories:

* ## Features:

* ### Existing features:

* ### Features to implement:

* ### Font & Color Scheme

* ## Testing:

* ### Bugs

* #### Unfixed bugs

* ### Deployment

* ## Credits

* ### Content

* ### Technologies Used

* ### Media

* ### Acknowledgements

https://www.youtube.com/watch?v=B3pmT7Cpi24&ab_channel=JavaScriptAcademy

https://www.color-hex.com/color-palette/1007780





bug:
 for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].textContent == '') {
      availableMoves.push(tiles[i]);
    }/*https://codepen.io/lando464/pen/BPGEKO*/

    let randomMove= Math.floor(Math.random()*availableMoves.length);
    let computerMove=availableMoves[randomMove];
    computerMove.innerText=tileValue;

  }
   <img src ='assets/images/testing_and_bugs/multiple-tiles-2.png'>generateRandomInteger(min, max)


   a bug:
   userAction can be called twice before computerAction timeout is over:
   could maybe put a faceade over board


   acknowledge Ed in tutor support


  this is putting the tileValue in a random number of tiles rather than a random tile
  <img href='assets/images/testing_and_bugs/multiple-tiles-1.png'>
    <img src ='assets/images/testing_and_bugs/multiple-tiles-2.png'>


   modal https://www.youtube.com/watch?v=XH5OW46yO8I


   bunnys https://pixabay.com/illustrations/rabbit-easter-pastel-bunny-hare-4120085/ https://www.remove.bg/
=======
