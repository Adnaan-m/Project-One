document.addEventListener('DOMContentLoaded', () => {

  const game = new Object();
  const cards = new Object();

  cards.cardName = [['A',11],['2',2],['3',3],['4',4],['5',5],['6',6],['7',7],['8',8],
  ['9',9],['10',10],['J',10],['Q',10],['K',10]];
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

  let cardTot = Number([]);

  // DEAL RANDOM CARDS FUNCTION
  game.Deal = () =>
  {
     let Name = cards.cardName[Math.floor(Math.random() * cards.cardName.length)];
     let Val = Name[1];
     let Suit = cards.cardSuit[Math.floor(Math.random() * cards.cardSuit.length)];

     let card1 = Name[0] + Number(Val) + Suit;
     console.log(card1);

     cardTot += Val;
     console.log(cardTot);

}

















});
