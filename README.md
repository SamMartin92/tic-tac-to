# Tic Tac To

**Pic with all the screens

[Link to live site.](https://sammartin92.github.io/tic-tac-to/)

* ## Objective
<p> My objective in this project is to build an interactive front-end site. It should respond to the users' actions, allowing them to enagage with the data and alter the way the site displays the information, allowing them to achieve the goals of the site and experience it in a straight-forward and enjoyable manner.</p>

<p> This encapsulates the brief as laid out Portfolio Project 2 Assessment Guide. This site has been built as my second portfolio project as part of my Diploma in Software Development with the [Code Institute](https://codeinstitute.net/ie/). For my project, I have decided to build a math's based variation on the classic game tic tac toe, hence the title. The game is aimed at children from ages 5-8 who are beginnning to learn and understand addition for the first time.</p>

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

#### This site was built in gitpod and deployed in github. Please see steps to deploy site below:

- Navigate to 'Your Repositories' in your Github profile.
- Ensure all commmits are pushed to 'main' branch.
- Navigate to the Settings tab above your project files.
- Navigate to 'Pages'.
- Select branch 'main' and click Save. At this point github will begin to build the live site.
- After a few moments, refresh the page and the link to the live site is displayed.


* ## Credits

* ### Content

- The idea for the site grew while doing some practice projects to familiarise myself with javascript. I made a simple tic tac to game following a youtube tutorial from [Javascript Academy](https://www.youtube.com/watch?v=B3pmT7Cpi24&ab_channel=JavaScriptAcademy) and it was from there that the basis of the project was built and the idea of a variation of tic-tac-toe was developed.
- In building the modal that displays when the end of a round is reached, I used [this](https://www.youtube.com/watch?v=XH5OW46yO8I) video on youtube to teach myself.
- Any other times I found a solution for some piece of code is attributed in the directory files.
- -The basis of the original colour scheme was taken from [color-hex.com](https://www.color-hex.com/color-palette/1007780) and was modified and developed throughout the project.

* ### Technologies Used

- This site was built in [Gitpod](https://gitpod.io/workspaces) and pushed to repository in [Github](https://github.com/) and was deployed to a live site from there.
- Dev Tools was used continuously throughout the project. The console was used to build and debug functions. The styling of the page owes most of it's deveopment to dev tools allowing me to visualise the positioning and spacing of content on the site.
- The font for the site was taken from [Google Fonts](https://fonts.google.com/).
- The wireframes for this project were made with [Balsamiq](https://balsamiq.com/)
- [TinyPNG](https://tinypng.com/) was used to compress the size of the images used in the live site and README.md and [RemoveBG](https://www.remove.bg/) was used to remove the background from the bunny images used when the round is finished.
- [JSHint](https://jshint.com/), [W3C Markup Validation Service](https://validator.w3.org/) and [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) were used to validate the javascript, html & css used in this project respectively.
 
* ### Media
- The happy and sad bunnies whihc pop up at the end of each round were taken from [Pexels](https://www.pexels.com/). There is no requiremnt fro attirbution in this case but the creator of these images can be found at this [link](https://pixabay.com/illustrations/rabbit-easter-pastel-bunny-hare-4120085/).
-The favicon used was taken from [favicon.cc](https://www.favicon.cc/?action=icon&file_id=99873).

* ### Acknowledgements
<p> I would like to acknowledge the help of Tutor Support and in particular, call out Ed, who chatted with me for over an hour one frustrating morning in finding a solution to quite an annoying technical problem I had spent a couple of days stressing over. I would also like to thank my mentor Akshat Garg for his suggestions and guidance withe the project. </p>








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



