document.addEventListener('DOMContentLoaded', () => {

  const game = new Object();
  const cards = new Object();
  let cardTotUser = Number([]);
  let cardTotComp = Number([]);

  cards.cardName = [['A',11],['2',2],['3',3],['4',4],['5',5],['6',6],['7',7],['8',8],
  ['9',9],['10',10],['J',10],['Q',10],['K',10]];
  cards.cardSuit = ['Hearts','Diamonds','Spades','Clubs'];

  game.startButn = document.getElementsByClassName('Start');
  game.dealButn = document.getElementsByClassName('Deal');
  game.stayButn = document.getElementsByClassName('Stand');

  game.DealUser = () =>
  {
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    console.log(card);

    cardTotUser += Val;
    console.log(cardTotUser);

  } ///END OF DEAL USER
  game.DealComp = () =>
  {
    let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
    let Val = Name[1];
    let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card = Name[0] + Number(Val) + Suit;
    console.log(card);

    cardTotComp += Val;
    console.log(cardTotComp);

    /////IF STATEMENT FOR GOING BUST
    if (cardTotUser > 21 && cardTotComp > 21) {
      alert('Both Players Bust, It\'s A Draw!');
    }else if (cardTotUser > 21 && cardTotComp <=21) {
      alert('Player Bust, Computer wins');
    }else if (cardTotComp > 21 && cardTotUser <= 21) {
      alert('Computer Bust, Player Wins');
    }else if (cardTotComp === cardTotUser) {
      alert('It\'s a Draw!');
    }

  } ///END OF DEALCOMP

  game.startButn[0].addEventListener('click', () => {
    game.DealUser();
    game.DealUser();

    game.DealComp();
    game.DealComp();
  });
  game.dealButn[0].addEventListener('click', () => {
    game.DealUser();

    game.DealComp();
  });
  game.stayButn[0].addEventListener('click', () => {
    if (cardTotUser === cardTotComp) {
      alert('Both Players Bust, It\'s A Draw!')
    }else if (cardTotUser > cardTotComp) {
      alert('User wins.')
    }else {
      alert('Computer wins.')
    }
  });

}); //End of DOCUMENT Listener
