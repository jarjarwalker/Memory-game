/*
 * Create a list that holds all of your cards
 */
let _array = ["diamond", "paper-plane-o", "anchor", "bolt", "cube", "leaf", "bicycle", "bomb"];

_array = [..._array,..._array];






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


//Shuffle deck of cards
function do_shuffle() {
    console.log(_array);
    _array = shuffle(_array);
    const $deck = document.querySelector("ul.deck");
    const $cards = $deck.querySelectorAll("li");
    //Create card
    let i = 0;
    for (let key in $cards) {
        const card = $cards[key];      
        card.innerHTML = `<i class="fa fa-${_array[i]}"></i>`;
        i++;
    }

    console.log(_array);
}

let openCards = [];
console.log(openCards);

let moves = 0;
let movesCounter = document.querySelector('.moves');
let matchedPairs = 0;

//function to flip over cards and matches them
function do_action(e){
    let card = e.target;

    if(!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('matched')){
        openCards.push(card);
        card.classList.add('open', 'show');

        //lock matching cards and keep them in open position
        if(openCards.length == 2){
           if(openCards[0].querySelector('i').classList.item(1) == openCards[1].querySelector('i').classList.item(1)){
               openCards[0].classList.add('match');
               openCards[1].classList.add('match');
           }
            
            
            //If cards do not match flip them back over
            setTimeout(function(){
                for(let cards of openCards){
                    cards.classList.remove('open','show')
                }
        
                openCards = [];
                
            }, 1000); 
                                
            }

    

    }
    moves+= 1;
    if (moves == 1) {
        movesCounter.innerHTML = moves + " move";
    } else{
        movesCounter.innerHTML = moves + " moves";
    }
    
    rating(moves);
    

 }

 let starRating = document.querySelector('ul.stars');

 function rating(x){
    
    if (x == 20) {

        starRating.firstElementChild.remove();
        
    }
    if (x == 30) {

        starRating.firstElementChild.remove();
        
    }

 }
 

//Create deck of cards as a list and adds it to the HTML
window.onload = function () {
    
    const deck = document.querySelector("ul.deck");
    for (let i = 0; i < 16; i++) {
        const card = document.createElement("li");
        card.setAttribute("class", "card");
        card.addEventListener("click", do_action);
        deck.append(card);
        

        


        
        
    }
    do_shuffle();
    
    


    

    document.querySelector('.restart').addEventListener("click", do_shuffle);

};