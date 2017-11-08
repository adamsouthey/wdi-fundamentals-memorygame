  
  // Keep track of score vars
  
  var score = 0;
  var winningScore = 2;
  

  //Create object array
  //global variable

  var cards = [
  {
    rank: 'Queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png',	
  },

  {
    rank: "Queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png",	
  },

  {
    rank: 'King',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png',	
  },

  {
    rank: 'King',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png',	
  }
];

//cardsInPlay array

var cardsInPlay = [];

//  Check for two matching pairs + score
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a matching pair! You receive 1 point!");
    score += 1;
    alert("You have a score total of" + score);
      if (score === winningScore){
        alert("We have a winner! You scored maximum points!");
      }
   } else {
    alert("No match this time! You receive 0 points!");
  }
};

// flipCard function

var flipCard = function () {
    cardId = this.getAttribute('data-id');
    console.log(cardId);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
    checkForMatch();
  } else if (cardsInPlay.length === 4){
    checkForMatch();
  }
};

// createBoard function

var createBoard = function (){
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click", flipCard);
	document.getElementById("game-board").appendChild(cardElement);
}
};

createBoard();



// Refresh Page Function

function refreshPage(){
    window.location.reload();
} 









	









