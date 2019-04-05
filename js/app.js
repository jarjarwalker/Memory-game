/*
 * Create a list that holds all of your cards
 */
let _array = ["diamond", "paper-plane-o", "anchor", "bolt", "cube", "leaf", "bicycle", "bomb"];

_array = _array.concat(_array);




/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */



function do_shuffle() {
    console.log(_array);
    _array = shuffle(_array);
    const $deck = document.querySelector("ul.deck");
    const $cards = $deck.querySelectorAll("li");
    let i = 0;
    for (let key in $cards) {
        const card = $cards[key];
        card.innerHTML = `<i class="fa fa-${_array[i]}"></i>`;
        i++;
    }

    console.log(_array);
}

function do_action(e){
   let card = e.target;
   card.setAttribute("class","card open show");
}


window.onload = function () {
    //<li class="card">
    const $deck = document.querySelector("ul.deck");
    for (let i = 0; i < 16; i++) {
        const card = document.createElement("li");
        card.setAttribute("class", "card");
        card.addEventListener("click", do_action);
        $deck.append(card);
    }
    do_shuffle();

    

    document.querySelector('.restart').addEventListener("click", do_shuffle);

};