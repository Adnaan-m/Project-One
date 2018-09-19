document.addEventListener('DOMContentLoaded', () => {

  const game = new Object();
  const cards = new Object();
  game.cardTotUser = Number([]);
  game.cardTotComp = Number([]);
  game.playerScore = 0;
  game.compScore = 0;

  cards.cardName = [['A',11],['2',2],['3',3],['4',4],['5',5],['6',6],['7',7],['8',8],
  ['9',9],['10',10],['J',10],['Q',10],['K',10]];
  cards.cardSuit = ['Hearts','Diamonds','Spades','Clubs'];

  game.startButn = document.getElementsByClassName('Start');
  game.dealButn = document.getElementsByClassName('Deal');
  game.stayButn = document.getElementsByClassName('Stand');
  game.resetButn = document.getElementsByClassName('gameRestart');
  game.showScoreP = document.getElementsByClassName('playerScore');
  game.showScoreC = document.getElementsByClassName('compScore');
  game.playerCardSec = document.getElementsByClassName('card1');

  game.DealComp = () =>{
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    let CardArray = [Name[0]];
    console.log(CardArray);

    game.cardTotComp += Val;
    console.log(game.cardTotComp);
  }
  game.DealUser = () =>{
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    let CardArray = [Name[0]];
    console.log(CardArray);

    game.cardTotUser += Val;
    console.log(game.cardTotUser);
  }
  game.restart = () => {
    game.cardTotUser = Number([]);
    game.cardTotComp = Number([]);
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
    }else if (game.cardTotUser > 21 && game.cardTotComp < 22) {
      alert('Player Bust, Computer wins.');
      game.restart();
      game.compScore += 1;
    }else if (game.cardTotComp > 21 && game.cardTotUser < 22) {
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
