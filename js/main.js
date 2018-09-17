document.addEventListener('DOMContentLoaded', () => {

  const game = new Object();
  const cards = new Object();

  cards.cardName = [['Ace',11],['Two',2],['Three',3],['Four',4],['Five',5],['Six',6],['Seven',7],['Eight',8],
  ['Nine',9],['Ten',10],['Jack',10],['Queen',10],['King',10]];
  cards.cardSuit = ['Hearts','Diamonds','Spades','Clubs'];

  //GATHERS THE START BUTTON
  game.startButn = document.getElementsByClassName('Start');
  //GATHERS THE DEAL BUTTON
  game.dealButn = document.getElementsByClassName('Deal');
  //GATHERS THE DEAL BUTTON
  game.stayButn = document.getElementsByClassName('Stand');


  //WHEN START BUTTON IS CLICKED, TWO RANDOM CARDS ARE PRESENTED
  game.startButn[0].addEventListener('click', () => {
    game.Deal();
    game.Deal();
  });

  //WHEN DEAL BUTTON IS CLICKED, A RANDOM CARDS IS PRESENTED
  game.dealButn[0].addEventListener('click', () => {
    game.Deal();
  });

  // DEAL RANDOM CARDS FUNCTION
  game.Deal = (Name,Val,Suit) =>
  {
     Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
     Val = Name[1];
     Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

    let card1 = Name[0] + Val + Suit;
    console.log(card1);
}
      // let cardTot = [];
      // const currentScore = 0;

  //     sumCardTotal
  //
  //   }
  //
  //
  // }



















});
