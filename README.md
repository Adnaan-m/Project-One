# Project-One
The following ReadMe provides information in relation to the creation of the game Blackjack using Html, CSS and Javascript. All three aspects of coding were critical and provided a fundamental part in creating a functional, well presented game.

### Languages used
* Javascript
* CSS
* HTML Markup

### How to download
1. Search for Adnaan-m in GitHub.
2. Search for the Project-One repository.
3. Download the files displayed.

### Live-Site
Would you like to play the game? -----un-functional until pull request acceptance----[Click Here](URL goes here)

### Challenges
1. The first challenge that was approached was the matter of starting the creation of the game from a blank screen. The skeleton of the system was created but the process of what to do after that was a little tricky. However, once the planning phase was undertaken and code was present on the screen, it soon became easier.
2. The second obstacle was the implementation and transformation of the functional output on the console log to the actual screen. The main part of the game included the visualisation of playing cards displaying on the screen. The manner of implementing the correct cards (sourced as images) onto the screen using javascript was difficult. In the end, this was resolved through the use of loops, the following code shows the loop used to iterate through the images.

```js
  let cardElementArray = [];

  for (var i = 0; i < 4; i++) {
    let suit = '';
    switch (i) {
      case 0:
      suit = 'C'
      break;
      case 1:
      suit = 'D'
      break;
      case 2:
      suit = 'H'
      break;
      case 3:
      suit = 'S'
      break;
      default:
      suit = i
    }
    for (var j = 2; j < 15; j++) {
      let number = '';
      switch (j) {
        case 11:
        number = 'A'
        break;
        case 12:
        number = 'J'
        break;
        case 13:
        number = 'Q'
        break;
        case 14:
        number = 'K'
        break;
        default:
        number = j
      }

      const imageCard = document.createElement("img");
      imageCard.setAttribute("src", `../images/${number}${suit}.png`)
      imageCard.setAttribute("id", `${number}${suit}`)
      cardElementArray.push(imageCard)
    }
  }
```
### Learning points
1. Javascript has ALOT of functionality, on the HTML and CSS side as well.
2. 7 lines of Javascript code can do the exact same thing as 30 lines of code can.
3. Planning is key!


>**Created by: Adnaan Mamaniat!**
