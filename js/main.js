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

  game.DealComp = () =>
  {
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    console.log(Name[0]);

    game.cardTotComp += Val;
    console.log(game.cardTotComp);

    /////IF STATEMENT FOR GOING BUST
    if (game.cardTotUser > 21 && game.cardTotComp > 21) {
      alert('Both Players Bust, It\'s A Draw!');
      game.restart();
    }else if (game.cardTotUser > 21 && game.cardTotComp < 22) {
      game.compScore += 1;
      game.restart();
      alert('Player Bust, Computer wins');
    }else if (game.cardTotComp > 21 && game.cardTotUser < 22) {
      game.playerScore =+ 1;
      game.restart();
      alert('Computer Bust, Player Wins');
    }
  } ///END OF DEALCOMP

  game.DealUser = () =>
  {
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    let CardArray = [Name[0]];
    console.log(CardArray);
//







//
    game.cardTotUser += Val;
    console.log(game.cardTotUser);

  } ///END OF DEAL USER

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

  game.resetButn[0].addEventListener('click', () => {
    game.resetGame();
  })
  game.startButn[0].addEventListener('click', () => {
    game.DealUser();
    game.DealUser();

    game.DealComp();
    game.DealComp();
    game.showScoreP[0].innerHTML = `Player Score : ${game.playerScore}`;
    game.showScoreC[0].innerHTML = `Computer Score : ${game.compScore}`;
  })
  game.dealButn[0].addEventListener('click', () => {
    game.DealUser();
    game.DealComp();
  });
  game.stayButn[0].addEventListener('click', () => {
    if (game.cardTotUser === 0 && game.cardTotComp === 0) {
      game.restart();
    }else if (game.cardTotUser === game.cardTotComp) {
      alert('It\'s A Draw!');
      game.restart();
    }else if (game.cardTotUser > game.cardTotComp) {
      game.playerScore += 1;
      alert('User wins.');
      game.restart();
    }else {
      game.compScore += 1;
      alert('Computer wins.');
      game.restart();
    }
    ///SCORE TAG
    game.showScoreP[0].innerHTML = `Player Score : ${game.playerScore}`;
    game.showScoreC[0].innerHTML = `Computer Score : ${game.compScore}`;

  });

});
