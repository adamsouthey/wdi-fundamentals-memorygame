/*
console.log("User flipped " + cardOne + " card");
console.log("User flipped " + cardThree + " card");
*/



var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User Flipped " + cardOne );

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User Flipped " + cardTwo );

/*
var cardThree = cards[2];
cardsInPlay.push(cardThree);
console.log("User Flipped " + cardThree );

var cardFour = cards[3];
cardsInPlay.push(cardFour);
console.log("User Flipped " + cardFour );

*/




if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}


/*var checkForMatch = function () {

	
}
*/