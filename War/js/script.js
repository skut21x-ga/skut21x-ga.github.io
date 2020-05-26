console.log("Welcome to WAR");

var cardRank = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

var cardSuit = ["Hearts", "Spades", "Clubs", "Diamonds"];
var maximumCardValue = 12;
var player1 = [];
player1.hand = [];
var player2 = [];
player2.hand = [];
var playground = [];
playground.player1card = [];
playground.player2card = [];
round = 0;
let i = 0;

// I'm starting at 2 as Index=0, so it's value will be 0
// and the Ace value will be highest at 12.

class Card {
  constructor(suit, rank, score, name) {
    (this.suit = suit),
      (this.rank = rank),
      (this.score = score),
      (this.name = name);
  }
}

class Deck {
  constructor() {
    this.cards = [];
    this.cards.length = 0;
    //generate deck using 0-12 as the values for ranks 2-Ace
    //with it going through suit by suit, with ranks in each suit
    for (let suitValue in cardSuit) {
      for (let i = -1; i < maximumCardValue; i++) {
        let score = i + 1;
        let rank = cardRank[i + 1];
        let suit = cardSuit[suitValue];
        let name = rank + " of " + suit;
        let card = new Card(suit, rank, score, name);
        this.cards.push(card);
      }
    }
  }
}

let newDeck = new Deck();
fullDeck = newDeck.cards;

//shuffle deck with fisher-yates algorithm
//used started code from https://www.frankmitchell.org/2015/01/fisher-yates/

function shuffleDeck(x) {
  var i = 0,
    j = 0,
    temp = null;
  for (let i = x.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = x[i];
    x[i] = x[j];
    x[j] = temp;
  }
}
let shuffledDeck = shuffleDeck(fullDeck);
shuffledDeck;

//console.log("Deck generated and shuffled:")

//split deck in half
function pullCard() {
  while (i < 26) {
    player1.hand.push(newDeck.cards.shift());
    player2.hand.push(newDeck.cards.shift());
    i++;
  }
}

pullCard();

///execution of pulling the top card from each player //

function startGame() {
  if (player1.hand.length > 0 && player1.hand.length < 52) {
    comparedCards();
  } else if (player1.hand.length == 0) {
    console.log("Player One is out of cards.");
    console.log("%c Player Two Wins!", "color: #2bc0f9");
  } else {
    console.log("Player Two is out of cards.");
    console.log("%c Player One Wins!", "color: #f92b2b");
  }

  function comparedCards() {
    {
      playground.player1card = [];
      playground.player2card = [];
      playground.player1card.unshift(player1.hand.shift());
      playground.player2card.unshift(player2.hand.shift());
      //announcing cards drawn:
      round = round + 1;
      console.log(
        "Round #" +
          round +
          ". Player One draws a " +
          playground.player1card[0].name +
          " & Player Two draws a " +
          playground.player2card[0].name
      );

      //if Player One wins:
      if (playground.player1card[0].score > playground.player2card[0].score) {
        console.log("%c Player One wins the round", "color: #f92b2b");
        player1.hand.push(playground.player1card[0]);
        player1.hand.push(playground.player2card[0]);
        console.log(
          "# of Cards Left for Player One(" +
            player1.hand.length +
            ") & Player Two(" +
            player2.hand.length +
            ")"
        );
        playground.player1card.splice(0, playground.player1card.length);
        playground.player2card.splice(0, playground.player2card.length);
        startGame();
      }

      //if Player Two wins:
      else if (
        playground.player1card[0].score < playground.player2card[0].score
      ) {
        console.log("%c Player Two wins the round", "color: #2bc0f9");
        player2.hand.push(playground.player1card[0]);
        player2.hand.push(playground.player2card[0]);
        console.log(
          "# of Cards Left for Player One(" +
            player1.hand.length +
            ") & Player Two(" +
            player2.hand.length +
            ")"
        );
        playground.player1card.splice(0, playground.player1card.length);
        playground.player2card.splice(0, playground.player2card.length);
        startGame();
      } else goToWar();
    }
  }
  //if war/tie:
  function goToWar() {
    console.log("%c It's a Tie! It's Time for WAR!", "color: #bada55");
    if (player1.hand.length < 4) {
      console.log(
        "%c  But Player 1 is out of cards. Player Two WINS!",
        "color: #2bc0f9"
      );
    } else if (player2.hand.length < 4) {
      console.log(
        "%c But Player 2 is out of cards. Player One WINS!",
        "color: #f92b2b"
      );
    } else if (player2.hand.length < 4 && player1.hand.length < 4) {
      console.log(
        "%c Both Sides lose. Not enough cards for war  ",
        "color: #bada55"
      );
    } else {
      //move 4 cards from player 1's hand to battlefield
      playground.player1card.unshift(player1.hand.shift());
      playground.player1card.unshift(player1.hand.shift());
      playground.player1card.unshift(player1.hand.shift());
      playground.player1card.unshift(player1.hand.shift());
      // move 4 cards from player 2's hand to battlefield
      playground.player2card.unshift(player2.hand.shift());
      playground.player2card.unshift(player2.hand.shift());
      playground.player2card.unshift(player2.hand.shift());
      playground.player2card.unshift(player2.hand.shift());
      console.log("Player One Warcard: " + playground.player1card[0].name);
      console.log("Player Two Warcard: " + playground.player2card[0].name);
      console.log("%c  War Results:", "color: #bada55");
      warCheck();
    }

    function warCheck() {
      //if Player One wins WAR:
      if (playground.player1card[0].score > playground.player2card[0].score) {
        console.log("%c Player One wins WAR", "color: #f92b2b");
        console.log(
          "Player One wins " + playground.player1card.length + " new cards!"
        );
        for (let k = 0; k < playground.player1card.length; k++) {
          player1.hand.push(playground.player1card[k]);
          player1.hand.push(playground.player2card[k]);
        }
        console.log(
          "Cards Left for Player One(" +
            player1.hand.length +
            ") & Player Two(" +
            player2.hand.length +
            ")"
        );

        playground.player1card = [];
        playground.player2card = [];
        playground.player1card.splice(0, playground.player1card.length);
        playground.player2card.splice(0, playground.player2card.length);
        startGame();
      }

      //if Player Two wins WAR:
      else if (
        playground.player1card[0].score < playground.player2card[0].score
      ) {
        console.log(" %c Player Two wins WAR", "color: #2bc0f9");
        console.log(
          "Player Two wins " + playground.player1card.length + " new cards!"
        );
        for (let l = 0; l < playground.player1card.length; l++) {
          player2.hand.push(playground.player1card[l]);
          player2.hand.push(playground.player2card[l]);
        }
        console.log(
          "Cards Left for Player One(" +
            player1.hand.length +
            ") & Player Two(" +
            player2.hand.length +
            ")"
        );
        playground.player1card.length = 0;
        playground.player1card = [];
        playground.player2card.length = 0;
        playground.player2card = [];
        playground.player1card.splice(0, playground.player1card.length);
        playground.player2card.splice(0, playground.player2card.length);
        startGame();
      } else {
        console.log("Another WAR!");
        goToWar();
      }
    }
  }
}
startGame();
