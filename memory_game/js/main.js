var cards = [
   {
       rank: 'queen',
       suit: 'hearts',
       cardImage: 'images/queen-of-hearts.png'
   },
   {
       rank: 'queen',
       suit: 'diamonds',
       cardImage: 'images/queen-of-diamonds.png'
   },
   {
       rank: 'king',
       suit: 'hearts',
       cardImage: 'images/king-of-hearts.png'
   },
   {
       rank: 'king',
       suit: 'diamonds',
       cardImage: 'images/king-of-diamonds.png'
   }
];

var cardsInPlay = [];

var wins = 0;
var losses = 0;

var checkForMatch = function() {

	if (cardsInPlay.length === 2) {

		if (cardsInPlay[0] === cardsInPlay[1]) {

			 alert("You found a match!");

			 wins += 1;

			 document.getElementById('wins').textContent = wins;

		} else {

			 alert("Sorry, try again.");

			 losses += 1;

			 document.getElementById('losses').textContent = losses;
		}
	}
};

var flipCard = function() {

	var cardId = this.getAttribute('data-id');

	//console.log("User flipped " + cards[cardId].rank);

	//console.log(cards[cardId].cardImage);

	//console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute('src', cards[cardId].cardImage);

	checkForMatch();

};

var createBoard = function() {

	for (var i = 0; i < cards.length; i++) {

		/* create card elements */

		var cardElement = document.createElement('img');
		
		cardElement.setAttribute('src', 'images/back.png');
		
		cardElement.setAttribute('data-id', i);
		
		document.getElementById('game-board').appendChild(cardElement);
		
		cardElement.addEventListener('click', flipCard);
		
		/* add reset button listener */

		document.getElementById('reset').addEventListener('click', reset);

	}
};

var reset = function() {

	var node = document.getElementById('game-board');

	/* clear game board and cards in play */

	while (node.hasChildNodes()) {
   	 node.removeChild(node.lastChild);

    }

    while(cardsInPlay.length != 0) {
    	cardsInPlay.pop();
    }

	createBoard();
}

createBoard();


