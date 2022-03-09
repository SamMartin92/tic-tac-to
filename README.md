# Tic Tac To

**Pic with all the screens

[Link to live site.](https://sammartin92.github.io/tic-tac-to/)

* ## Objective
My objective in this project is to build an interactive front-end site. It should respond to the users' actions, allowing them to enagage with the data and alter the way the site displays the information, allowing them to achieve the goals of the site and experience it in a straight-forward and enjoyable manner.

This encapsulates the brief as laid out Portfolio Project 2 Assessment Guide. This site has been built as my second portfolio project as part of my Diploma in Software Development with the [Code Institute](https://codeinstitute.net/ie/) . For my project, I have decided to build a math's based variation on the classic game tic tac toe, hence the title. The game is aimed at children from ages 4-8 who are learning and understanding addition for the first time.

The game sets a new target score between 12-20, which is displayed above the tic-tac-toe board and users input a randomly generated number from 1-9 on each turn by clicking a tile on the board. A round is won if three numbers across a row, column or diagonal sum up to the target score for that round. The game can be played with another user or verses 'the computer'.

I have laid out the user experience process below:

 ### Strategy
- Build a fun mobile first online game for young children, aged roughly 4-8 years old.
- Make a game with a simple goal which will help educate the young user.
- Design a visually pleasing site for a young user.

 ### Scope
- Build the entire game on a single page site with a landing page explaining the rules for parents/guardians of the user.
- Build a game with very straight forward rules that will not cause a steep learning curve.
- Design a site which intuitively allows the user to access the game without any difficulty.
 ### Structure
- Present the game on one signle page with interactive design built with javascript.
- Present the user with intuitive and consistent buttons to interact with and navigate through the site with ease.
- Initiate the game within 2 clicks upon entering the site.
 ### Skeleton
- Single site with different windows which pop up and replace one another on button clicks.
- Before proceeding with any coding, I made some simple wireframes to act as a guide for the design of the site. The simplicity of the wireframes was something I wanted to reflect in the finished site to keep it single minded and non-distracting for yound users.
- I then spoke with my mentor and decided how to lay out the site, such as the landing page and game choice sections.
 ### Surface
- Present a cute design for the site to appeal to child users.
- Use cute images and playful font throughout the site.
- Use a soft colour scheme and use a black font for certain non-game elements to contrast against the general theme.
* ## User Stories:

 ### First time users:
- should immediately understand the purpose of the site from instructions section on the landing page.
- should be able to intuitively navigate to the game of their choice.
- should be able to understand the rules and how to play the game almost immediately having entered the game.

 ### Returning users:
- can expect to pass the time playing the same game they have previously.
- can expect to see designs and images (such as the sad & happy images generated at the end of rounds).

 ## Features:

*I have left the screenshots of the mobile screens uncropped so that the navigation and notification bars and how they look with the site show on the device unedited.*

 ### Existing features:

 #### Landing Page:
 - The landing page is the first thing a user will see upon opening the site in their browser.
 - It displays the name of the page/game and displays a lists the rules of the game.
 - The colour scheme of the landing page is consistent throughout the site and is what users will see at each stage of their experience.
 - The colours, theme and font of the game heading make it apparent that this site is targeted at child users.
 - The instructions of the game are laid out in simple and concise terms. 

#### Game choice:
- Upon selecting the only button available to the user, they will be brought to the game choice screen.
- Here there are two buttons which will initiate either the One Player game vs the 'computer' or the Two Player game, meant to be played with another user.

#### One player game:
- Users are taken to this screen if they choose the 'Vs Computer' option.
- In this game, users play against the 'computer'.
- The tic-tac-toe board displays and the target value for the round is displayed in the heading above.
- The game commences when a user clicks on a tile which inserts the number generated for them under the heading next to 'Next move:'
- When the player decides where to place the number, a new number is generated in the beside 'Next Move:' and the 'computer' randomly inputs this number on the board.
- As the numbers are input on the board, they are removed from the remaining numbers which are laid out below 'Next move'.
- As per the instructions, if the target value in the heading is achieved by summing up three numbers in a full row, column or diagonal, the round is won.
- The score counters below the board keep track of the users' and computers' scores after each round.
- The reset button when pressed, will empty the board of all numbers, generate a new target value in the heading, a new 'Next move' number and refill the remaining numbers to be used until they are input onto the board.
- The 'Two player' button below reset will open the two-player game.

#### Two player game:
- The two-player game keeps the same design as the one-player game. Users are brought here if they choose the 'Two Player' button on the game choice screen or the 'Two Player' button in the one=player game.
- The rules of the game remain the same, however, when a user inputs a number on the board, there is no randomly generated computer action after this. 
- Instead the text below the board changes to 'Player Two's Turn' and the second user inputs their choice until there is a winner or the board fills up resulting in a tie.
- The 'One Player' button below reset brings you to the one=player game.

#### End of round announcer:
- The end of round announcer is a modal which pops up and covers the screen in the event of a round winner, or a tie game.
- This announces the winner of the round, or a tie in the event that there is no winner.
- Below that, is a randomly generated picture of a bunny, either happy or sad.
- With the child user in mind, in a one-player game, a happy bunny will present in the event that the player beats the computer. A sad bunny will present if the computer wins the round or in the event of a tie.
- In the two-player game, a happy bunny will present if either player wins and a sad bunny presents in the event of a tie.
- The bunny images are taken from the same collection credited below and match the existing colour scheme of the site.
- Below the image, is a reset button which serves the same function as the reset button in the game modes.

 ### Features to implement:
- As mentioned below in the credits, I have made a tic-tac-toe game previously as some general practice while learning javascript. I would like to introduce that as an option in the game choice screen. In this instance, to keep the project single minded, I did not add that feature.
 ### Font & Color Scheme
- The main font used for the theme of this site is 'Bubblegum Sans' from Google Fonts. This was chosen as it is a cute, playful font and appealling to a child user target audience.
- It is used in the heading, on all buttons and in each game element.
- To contrast with 'Bubblegum Sans', 'Varela Round', also from Google Fonts, was chosen for the instrcutions on the landing page. As this may need to be comprehended by a parent or guardian for the child user, a more standard font was chosen.
- With the concise nature of the rules, a straight forward font was also chosen to contrast against the playful font used elsehwere.
- In that regard, a black font was chosen to contrast strongly against the pastel pink background.
- The same was used with the remoaing numbers and 'Next Move' which display above the board. The goal being to contrast against the numbers being input into the board.
- The basis of the colour scheme was taken from the below:
- A pastel colour cheme was chosen, to keep the site light and playful. These colours are often referred to as 'baby-pink', 'baby-blue' etc and I believe this theme is in keeping with the younger target audience of the game.
- In the end, as to not confuse the site background, the green shade and purple shade were excluded. Although, they show up in the images displayed at the end of a round.
- Some of these colours are darkened, for example, a darker shade of blue was chosen for contrast. A darker shade of the pink and yellow are also used when hovering over a tile on the board or one of the buttons, respectively.
 ## Testing:
- As this project revolved mainly around the use of javascript and how it was used to interact with the CSS and HTML elements of the page, Dev Tools was the main tool when testing throughout the project:
    - The console was used to test the results of functions wihout having to run them over and over again before committing them into the code. This was especially necessary with rehards to the functions that randomly generated values and objects.
    - The console also gave indications through error messages as to why the site was not responding as expected while code was being written.
 - I tested the site in edge, chrome, & firefox & mobile to ensure it was functional across the most prominent browsers, ensuring it acted as it did with dev tools after deployment.
 - I used lighthouse to generate reports for mobile and desktop. My main concern for this project was the accessability. Results shown below. Mobile and desktop reports respectively:
 - The js code was passed through JSHint to ensure there were no errors.
 - The site was passed through the html validator https://validator.w3.org/ to ensure there were no errors.
 - style.css was passed through https://jigsaw.w3.org/css-validator/ to ensure there were no errors.
 ### Bugs
- There were numerous bugs that had to be fixed when building the site. I will lay out some examples of bugs I encountered here.
- When building the function for the computer's move in the one player game, I encountered a bug in which, rather than  entering a random value into a single tile, the computer was inputting a value into a random number of tiles on the board. The original function that caused this was as follows:
 - ```javascript
      let availableMoves=[];
       for (let i = 0; i < tiles.length; i++) {  //iterating through all tiles on the board
       if (tiles[i].textContent == '') {      // checking if tile is empty
      availableMoves.push(tiles[i]);       // adding all empty tiles to availableMoves
    }
    let randomMove= Math.floor(Math.random()*availableMoves.length);
    let computerMove=availableMoves[randomMove];
    computerMove.innerText=tileValue;
    }  
  
  - The fix for this bug was to break up the function into two seperate functions, one to find the available moves and then one to select a tile from that array.
  - ```javascript
      function getAvailableMoves() {
        tiles.forEach(function (tile) {
            if (tile.innerText == '') {
                availableMoves.push(tile);
            }
            return availableMoves;
        });
        
        function computerAction() {
        getAvailableMoves();
        let randomMove = Math.floor(Math.random() * availableMoves.length);
        let newTile = availableMoves[randomMove];
        newTile.innerText = tileValue; 
        .
        .
        .
        } 
 - Another bug related to choosing a random number each round. Originally I used two seperate functions, one function to generate the number and another to check whether that had been used already during that round.
   - As I was calling the second function in the first, while in theory it should not have caused an infinite loop, at times it would take too long to find a number not already used on the board and the console threw the *'Maximum call stack exceeded'* error and the site would crash.
   - The fix for this was to use one function, which was called within itself if a number which had already been used was generated. See below:
   -```javascript
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

 #### Unfixed bugs
- There is a console error which relates to the the end of round announcer.
  - If a user completes one full round in in one game mode and then switches from a one-player game to a two-player game or vice-versa and then uses the reset button on the end of round announcer modal, a console error appears.
  - This is due to the fact the removeChild in the case above is used to remove the div containing the end of round image (happy or sad bunny).
  - When the game is swicthed, a new div is placed where the div that is removed is and the original div is no longer the child.
  - This, however, has no practical effect on the user. The images still generate as they should and this does not throw any errors in JSHint, so I am happy to leave it as is, as the code still works.
 ### Deployment

#### This site was built in gitpod and deployed in github. Please see steps to deploy site below:

- Navigate to 'Your Repositories' in your Github profile.
- Ensure all commmits are pushed to 'main' branch.
- Navigate to the Settings tab above your project files.
- Navigate to 'Pages'.
- Select branch 'main' and click Save. At this point github will begin to build the live site.
- After a few moments, refresh the page and the link to the live site is displayed.


 ## Credits

 ### Content

- The idea for the site grew while doing some practice projects to familiarise myself with javascript. I made a simple tic tac to game following a youtube tutorial from [Javascript Academy](https://www.youtube.com/watch?v=B3pmT7Cpi24&ab_channel=JavaScriptAcademy) and it was from there that the basis of the project was built and the idea of a variation of tic-tac-toe was developed.
- In building the modal that displays when the end of a round is reached, I used [this](https://www.youtube.com/watch?v=XH5OW46yO8I) video on youtube to teach myself.
- Any other times I found a solution for some piece of code is attributed in the directory files.
- The basis of the original colour scheme was taken from [color-hex.com](https://www.color-hex.com/color-palette/1007780) and was modified and developed throughout the project.

 ### Technologies Used

- This site was built in [Gitpod](https://gitpod.io/workspaces) and pushed to repository in [Github](https://github.com/) and was deployed to a live site from there.
- Dev Tools was used continuously throughout the project. The console was used to build and debug functions. The styling of the page owes most of it's deveopment to dev tools allowing me to visualise the positioning and spacing of content on the site.
- The font for the site was taken from [Google Fonts](https://fonts.google.com/).
- The wireframes for this project were made with [Balsamiq](https://balsamiq.com/)
- [TinyPNG](https://tinypng.com/) was used to compress the size of the images used in the live site and README.md and [RemoveBG](https://www.remove.bg/) was used to remove the background from the bunny images used when the round is finished.
- [JSHint](https://jshint.com/), [W3C Markup Validation Service](https://validator.w3.org/) and [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) were used to validate the javascript, html & css used in this project respectively.
 
 ### Media
- The happy and sad bunnies whihc pop up at the end of each round were taken from [Pexels](https://www.pexels.com/). There is no requiremnt fro attirbution in this case but the creator of these images can be found at this [link](https://pixabay.com/illustrations/rabbit-easter-pastel-bunny-hare-4120085/).
- The favicon used was taken from [favicon.cc](https://www.favicon.cc/?action=icon&file_id=99873).

 ### Acknowledgements
I would like to acknowledge the help of Tutor Support and in particular, call out Ed, who chatted with me for over an hour one frustrating morning in finding a solution to quite an annoying technical problem I had spent a couple of days stressing over. I would also like to thank my mentor Akshat Garg for his suggestions and guidance withe the project. 





