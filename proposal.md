
*** Robert Motión/ 6 October 2017 ***

# [Name of Game] Proposal

## What is Black Jack 21?

(Brief description of the game, why you're choosing to make it)
I chose this game because I think that it realistically reflects my skill level at this point and it's a game that I play.  
The CSS and JS components are not so complicated that I would lose ambition or feel defeated/

## Wireframe

(Your wireframes go here. Preferably two or more)

## Initial thoughts on game structure
Game structure is pretty simple.  
Create card and deck object
I'm gonna create a function that gives each card a value name and suit. 
Five divs evenly spaced and centered in a container div. 
Two divs with <img src>'s that represent each player. 
Player 1 clicks on a <div> (card), that number is display card and value in alert of otherwise (not sure yet)
Create function that alternates between player1 and player2 clicks, up to 2 card selections
           Player's turn is disabled until other player has selected.
create function that selects winner by player who is closest to value 21 without going over

A reset button that shuffles card on click,
resetting game.   

(Write out what challenges you expect to encounter, or ideas you want to come up with)
initial thought is that I need to create function with for-loop that randomizes number, but problem with this is that randomizer 
might return a "used" card for play again.   this won't work....research other solutions for deck shuffle

what would be nice and cool is if I could create a function that diplays cards values being "shuffled" on static <div> of card.

time management is my biggest challenges.  I feel like i never have enough time with any project that we do...and it makes me 
feel like I'm not learning as much, even tho I continue to trust the process of this program and it's intensity.

## Phases of Completion
0. Research (Sat, Oct 7)
     a. if i use card images, what kind of playing cards
     b. how to deck shuffle....javascript, jquery, or vanilla js
     c.CSS colors that I want to use for project
     d. other issues that I may think about

 1. Build/Complete Wireframe
    a. make sure each major change is highlighted
    b. mark for function use : when card has been selected, card/<div> no longer in play until winner/tie,  then reset.
    c. position of 5 cards for black jack
    d. position deck (<img> if i use deck)
    e. position of player 1/player2 <img>
    f. position of reset/new game <button>
    g.  hover effect for mouseover and on.click when selecting card
 
 

(The steps or phases you expect to go through, and the tasks that you'll need to accomplish to reach each step. These should resemble the acceptance criteria we were working through earlier.)

## Links and Resources

(Anything you've looked up so far or are thinking about using.)
