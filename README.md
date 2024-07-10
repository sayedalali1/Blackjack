# Blackjack

![Blackjack game, Dealer wins, card values are displayed, new game option](https://i.postimg.cc/j5NRTCmb/Blackjack-2024-07-10-215609.png)

Blackjack is a cards game where a player tries to beat the *Dealer* also known as the *House* by having a hand value closer to 21 and not going above that value.



## 1. Blackjack User Story

* As a player, when the game begins, I would like to see the cards I'm dealt. Based on my cards' combined value, I can decide if I should ask for another card or hold.

* As a player, I should be able to see the value of one card out of the two cards the *House* holds.

* As a player, I expect the *House* to be logical, able to figure out the value of the cards in play, and declare if it is a tie, win, or lose.

* As a player, I should be able to request another card,hold the current card and start a new game.

## 2. Start Game

```javascript
When the game loads i expect to see a button to start the game.
```

## 3. Deck of Cards

```javascript
When the game begins the deck of cards should be facing down.
```
## 4. Shuffle Cards

```javascript
Shuffling the cards before dealing them (organizing the values at random) everytime a new game has started.
```
## 5. Deal Cards

```javascript
I expect to receive two cards facing up & the House should receive two cards and only one card will be facing up and the other facing down.
```
## 6. Flip Cards

```javascript
 The House cards that is facing down should be flipped to face up when both players decide to Hold exposing the values of the cards in hand.
```

## 7. Cards Value

```javascript
The House should be able to determine when to Hold based on the values of the cards it has in hand.
It should also determine which player has the closest value to 21 and declare the outcome of the game.
```
## 8. Player ask for another card

```javascript
There has to be a button allowing the player to request another card when attempting to get the combined cards value closer to or at 21.
```
## 9. Player Hold

```javascript
A button allowing the player to hold and no longer be dealt cards.
```
## 10. Tie, Win & Lose

```javascript
A declaration of the outcome of the game notifing the player if it is a tie, win or lose.
```

### How to Play

1. Click the "New Game" button to start the game.
2. The dealer and player will each be dealt two cards.
3. You can choose to "Hit" to receive another card or "Hold" to keep your current hand.
4. The dealer will then reveal their hidden card and draw additional cards if necessary.
5. The game will declare a winner, draw, or loss based on the hand values.

## Attributions

* [Postimg](https://i.postimg.cc/j5NRTCmb/Blackjack-2024-07-10-215609.png) for the game image.

## Technologies Used

* HTML
* CSS (Flexbox for layout)
* JavaScript
* DOM Manipulation

## Next Steps

* Add animations for card dealing and shuffling.

* Implement a scoring system to keep track of multiple rounds.

* Add sound effects for a more immersive experience.