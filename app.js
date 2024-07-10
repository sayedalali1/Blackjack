// Pseudo code for Blackjack 
// Found the following online
// 1. Add additional HTML elements for player and dealer hands.
// 2. Add event listeners for "Hit" and "Stand" buttons.
// 3. Implement dealing cards to player and dealer during game.
// 4. Implement function to calculate hand values.
// 5. Implement function to handle "Hit" action for player.
// 6. Implement function to handle "Hold" action and dealer's turn.
// 7. Determine win/loss conditions and display results.

// Declare variables
let deck = [];
let playerHand = [];
let dealerHand = [];
let isGameOver = false;
let playerValue = 0;

// Cached element references
let playerHandEl = document.getElementById('player-hand');
let dealerHandEl = document.getElementById('dealer-hand');
let hitButton = document.getElementById('hit');
let standButton = document.getElementById('stand');
let newGameButton = document.getElementById('new-game');
let playerTotalEl = document.getElementById('player-total');
let messageEl = document.getElementById('message');
let dealerCardEl = document.querySelector('h2');
let dealerTotalEl = document.getElementById('-total');



// Event Listeners
hitButton.addEventListener('click', handleHit);
standButton.addEventListener('click', handleStand);
newGameButton.addEventListener('click', startNewGame);

// Initialize deck with array of 52 cards using provided CSS class names
function init() {
    deck = ["dA", "dQ", "dK", "dJ", "d10", "d09", "d08", "d07", "d06", "d05", "d04", "d03", "d02",
            "hA", "hQ", "hK", "hJ", "h10", "h09", "h08", "h07", "h06", "h05", "h04", "h03", "h02",
            "cA", "cQ", "cK", "cJ", "c10", "c09", "c08", "c07", "c06", "c05", "c04", "c03", "c02",
            "sA", "sQ", "sK", "sJ", "s10", "s09", "s08", "s07", "s06", "s05", "s04", "s03", "s02"];
    shuffle(deck);
}

// Shuffle the deck make random
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Deal cards
function dealInitialCards() {
    playerHand = [];
    dealerHand = [];
    for (let i = 0; i < 2; i++) {
        playerHand.push(deck.pop());
        dealerHand.push(deck.pop());
    }
    render();
}

// Calculate cards values nested condtion checks and loops (boolean)
function calculateHandValue(hand) {
    let value = 0;
    let aceCount = 0;
    for (let card of hand) {
        let cardValue = card.slice(1);
        if (isNaN(cardValue)) {
            if (cardValue === 'A') {
                aceCount++;
                cardValue = 11;
            } else {
                cardValue = 10;
            }
        }
        value += parseInt(cardValue);
    }
    while (value > 21 && aceCount > 0) {
        value -= 10;
        aceCount--;
    }
    return value;
}

// Request a card
function handleHit() {
    if (!isGameOver) {
        playerHand.push(deck.pop());
        if (calculateHandValue(playerHand) > 21) {
            isGameOver = true;
            messageEl.textContent = " Dealer wins!";
        }
        render();
        checkGameOver();
    }
}

// Hold and let it be dealers turn
function handleStand() {
  if (!isGameOver) {
      // For loop for dealer hand value min 17
      for (let handValue = calculateHandValue(dealerHand); handValue < 17; handValue = calculateHandValue(dealerHand)) {
          dealerHand.push(deck.pop());
      }

      // make gameover true
      isGameOver = true;

      // Render the hands
      render();

      // Check the game over state
      checkGameOver();
  }
}


// Display game result
function checkGameOver() {
  playerValue = calculateHandValue(playerHand);
  let dealerValue = calculateHandValue(dealerHand);
  if (isGameOver) {
      if (playerValue > 21 || (dealerValue <= 21 && dealerValue > playerValue)) {
          messageEl.textContent = "Dealer wins!";
      } else if (dealerValue > 21 || playerValue > dealerValue) {
          messageEl.textContent = "You win!";
      } else {
          messageEl.textContent = "It's a tie!";
      }
      hitButton.disabled = true;
      standButton.disabled = true;
      // Update dealer hand total value
      document.getElementById('dealer-total').textContent = dealerValue; 
  } else {
      playerTotalEl.textContent = playerValue;
  }
}

// render the hands and deck (for loop didnt work .map somehow worked)
function render() {
    playerHandEl.innerHTML = playerHand.map(card => `<div class="card ${card}"></div>`).join('');
    dealerHandEl.innerHTML = `
        <div class="card ${dealerHand[0]}"></div>
        <div class="card back"></div>
    `;
    if (isGameOver) {
        dealerHandEl.innerHTML = dealerHand.map(card => `<div class="card ${card}"></div>`).join('');
    }
}

// Start a new game
function startNewGame() {
  isGameOver = false;
  hitButton.disabled = false;
  standButton.disabled = false;
  messageEl.textContent = '';
  dealerHandEl.innerHTML = '';
  playerHandEl.innerHTML = ''; 
  playerTotalEl.innerText = ''; 
  document.getElementById('dealer-total').innerText = '0'; 
  
  init();
  dealInitialCards();
  playerTotalEl.innerText = calculateHandValue(playerHand);
  dealerCardEl.innerText = `Dealer's cards`;
}

init();
