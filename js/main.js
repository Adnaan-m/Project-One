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

  //GATHERS THE START BUTTON
  game.startButn = document.getElementsByClassName('Start');
  //GATHERS THE DEAL BUTTON
  game.dealButn = document.getElementsByClassName('Deal');
  //GATHERS THE DEAL BUTTON
  game.stayButn = document.getElementsByClassName('Stand');
  //GATHERS THE RESTART BUTTON
  game.resetButn = document.getElementsByClassName('gameRestart');


  // DEAL RANDOM CARDS FUNCTION
  game.DealUser = () =>
  {
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    console.log(card);

    game.cardTotUser += Val;
    console.log(game.cardTotUser);

  } ///END OF DEAL USER

  game.DealComp = () =>
  {
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    console.log(card);

    game.cardTotComp += Val;
    console.log(game.cardTotComp);

    /////IF STATEMENT FOR GOING BUST
    if (game.cardTotUser > 21 && game.cardTotComp > 21) {
      game.restart();
      alert('Both Players Bust, It\'s A Draw!');
    }else if (game.cardTotUser > 21 && game.cardTotComp <=21) {
      game.compScore += 1;
      game.restart();
      alert('Player Bust, Computer wins');
    }else if (game.cardTotComp > 21 && game.cardTotUser <= 21) {
      game.playerScore =+ 1;
      game.restart();
      alert('Computer Bust, Player Wins');
    }
  } ///END OF DEALCOMP

  //RESTART WITHOUT REMOVING SCORE FUNCTION
  game.restart = () => {
    game.cardTotUser = Number([]);
    game.cardTotComp = Number([]);
  }

///RESTART GAME COMPLETELY FUNCTION
  game.resetGame = () => {
    game.cardTotUser = Number([]);
    game.cardTotComp = Number([]);
    game.playerScore = 0;
    game.compScore = 0;
  }

  ///GAME RESET BUTTON INCLUDING SCORE RESET
  game.resetButn[0].addEventListener('click', () => {
    game.resetGame();
  })

  //WHEN START BUTTON IS CLICKED, TWO RANDOM CARDS ARE PRESENTED
  game.startButn[0].addEventListener('click', () => {
    game.DealUser();
    game.DealUser();
    console.log('Player first two cards^');
    game.DealComp();
    game.DealComp();
    console.log('Computer first two cards^');
  });

  //WHEN DEAL BUTTON IS CLICKED, A RANDOM CARDS IS PRESENTED
  game.dealButn[0].addEventListener('click', () => {
    game.DealUser();

    game.DealComp();
  });

  ////STAY BUTTON FUNCTIONAL
  game.stayButn[0].addEventListener('click', () => {
    if (game.cardTotUser === 0 && game.cardTotComp === 0) {
      game.restart();
    }else if (game.cardTotUser === game.cardTotComp) {
      game.restart();
      alert('Both Players Bust, It\'s A Draw!');
    }else if (game.cardTotUser > game.cardTotComp) {
      game.playerScore += 1;
      game.restart();
      alert('User wins.');
    }else {
      game.compScore += 1;
      game.restart();
      alert('Computer wins.');
    }
    ///SCORE TAG
    console.log(`Player score is : ${game.playerScore}`);
    console.log(`Computer score is : ${game.compScore}`);
  });


}); //End of DOCUMENT Listener
