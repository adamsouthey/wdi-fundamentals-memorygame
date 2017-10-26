  
  //Create multiple objects inside array

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
    cardImage: 'images/king-of-diamonds.png'	
  }
];

//cardsInPlay array

var cardsInPlay = [];

//  Check for two matching pairs (i.e. queen, queen || king, king)

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match! Woohoo!");
	} else {
		alert("Sorry, try again.");
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









	









