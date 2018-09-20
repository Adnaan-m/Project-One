document.addEventListener('DOMContentLoaded', () => {

  const game = new Object();
  const cards = new Object();
  game.cardTotUser = Number([]);
  game.cardTotComp = Number([]);
  game.playerScore = 0;
  game.compScore = 0;

  cards.cardName = [['A',11],['2',2],['3',3],['4',4],['5',5],['6',6],['7',7],['8',8],
  ['9',9],['10',10],['J',10],['Q',10],['K',10]];
  cards.cardSuit = ['H','D','S','C'];

  game.startButn = document.getElementsByClassName('Start');
  game.dealButn = document.getElementsByClassName('Deal');
  game.stayButn = document.getElementsByClassName('Stand');
  game.resetButn = document.getElementsByClassName('gameRestart');
  game.showScoreP = document.getElementsByClassName('playerScore');
  game.showScoreC = document.getElementsByClassName('compScore');
  game.playerCardSec = document.getElementsByClassName('card1');
  game.compCardSec = document.getElementsByClassName('card2');

  //////CREATE ALL CARD IMAGE ELEMENTS AND STORE IN ARRAY ////////
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
  ////Restart function in the DealUser function
  game.DealUser = () =>{
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Suit;

    ////////
    for (var i = 0; i < cardElementArray.length; i++) {
      if (card === cardElementArray[i].id) {
        game.playerCardSec[0].appendChild(cardElementArray[i]);
        console.log(card);
        console.log(game.playerCardSec[0]);
        console.log(cardElementArray[i].id);
      }
    }
    ////////
    game.cardTotUser += Val;


    game.restart = () => {
      game.cardTotUser = Number([]);
      game.cardTotComp = Number([]);

      // for (var i = 0; i <= cardElementArray.length; i++) {
        if (card === cardElementArray.id) {
          game.playerCardSec[0].removeChild(cardElementArray.id);
          console.log(game.playerCardSec[0]);
          console.log(cardElementArray);
        // }
      }
    }

  }

  game.DealComp = () =>{
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    let CardArray = [Name[0]];

    game.cardTotComp += Val;
  }
  game.resetGame = () => {
    game.cardTotUser = Number([]);
    game.cardTotComp = Number([]);
    game.playerScore = 0;
    game.compScore = 0;
  }
  game.scores = () => {
    game.showScoreP[0].innerHTML = `Player Score : ${game.playerScore}`;
    game.showScoreC[0].innerHTML = `Computer Score : ${game.compScore}`;
  }

  game.resetButn[0].addEventListener('click', () => {
    game.resetGame();
  })
  game.startButn[0].addEventListener('click', () => {
    game.scores();
    game.DealUser();
    game.DealUser();

    game.DealComp();
    game.DealComp();
  })
  game.dealButn[0].addEventListener('click', () => {
    game.DealUser();
    game.DealComp();

    if (game.cardTotUser > 21 && game.cardTotComp > 21) {
      alert('Both Players Bust, It\'s A Draw!');
      game.restart();
    }else if (game.cardTotUser > 21 && game.cardTotComp <= 21) {
      alert('Player Bust, Computer wins.');
      game.restart();
      game.compScore += 1;
    }else if (game.cardTotComp > 21 && game.cardTotUser <= 21) {
      alert('Computer Bust, Player wins.');
      game.restart();
      game.playerScore =+ 1;
    }
    game.scores();
  });
  game.stayButn[0].addEventListener('click', () => {
    if (game.cardTotUser === 0 && game.cardTotComp === 0) {
      game.restart();
    }else if (game.cardTotUser === game.cardTotComp) {
      alert('It\'s A Draw!');
      game.restart();
    }else if (game.cardTotUser > game.cardTotComp) {
      alert('User wins.');
      game.playerScore += 1;
      game.restart();
    }else if (game.cardTotUser < game.cardTotComp) {
      alert('Computer wins.');
      game.compScore += 1;
      game.restart();
    }
    game.scores();
  });

});
