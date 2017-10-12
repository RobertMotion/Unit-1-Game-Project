// create Card constructor
let deck_for_game;
const Card = function (suit, number) {
    const card_suit = suit;
    const card_number = number;

    this.getSuit = function () {
        return card_suit;
    };
    this.getNumber = function () {
        return card_number;
    };

    // create function to return "string" value of face cards from integer(number)
    this.getStringValue = function () {
        switch (card_number) {
            case 1:
                return "Ace";
            case 11:
                return "Jack";
            case 12:
                return "Queen";
            case 13:
                return "King";
            default:
                return "" + card_number;
        }
    };
    // create function that returns suit assignment from integer
    this.getSuitStr = function () {
        switch (card_suit) {
            case 1:
                return "Diamonds";
            case 2:
                return "Hearts";
            case 3:
                return "Spades";
            case 4:
                return "Clubs";
            default:
                return "[unknown suit value: " + card_suit + "]";
        }
    };
    // Create function to return card's value as card's score, based on:
    // A. Ace value (1) ==> Ace score: 1 or 11
    // B. Other card values (2-10) ==> other cards' score : 2-10
    //  C. Face cards value (11,12,13)  ==>  face cards' score: 10
    this.getCardValue = function () {
        // if Ace
        if (card_number === 1) {
            return 11;
        }
        // if face card
        else if (card_number >= 10) {
            return 10;
        } else {
            // all other cards return same
            return card_number;
        }
    };
};
// create function to add cards to array
const Deck = function () {
    const deck_ready = [];
    for (let i = 1; i <= 52; i++) {
        deck_ready.push(i);
    }

    // create function that shuffles cards
    // Sourced code from http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
    this.shuffle = function () {
        let i;
        let j;
        let x;
        // Iterate over array by decrement
        for (let i = deck_ready.length - 1; i > 0; i--) {
            // Select random position based on remainder in array.
            j = Math.floor(Math.random() * i);
            // Exchange a[j] with a[i]
            x = deck_ready[i];
            deck_ready[i] = deck_ready[j];
            deck_ready[j] = x;
        }
    };
    // create function that removes card from deck and returns next card
    this.getNextCard = function () {
        const card_num = deck_ready.pop();
        const val = card_num % 13 + 1;
        const suit = Math.ceil(card_num / 13);
        return new Card(suit, val);
    };
};

function dealCards() {
    return deck_for_game.getNextCard();
}

const Hand = function () {
    const player_hand = [];

    // Give two cards to player
    player_hand.push(dealCards());
    player_hand.push(dealCards());

    this.getHand = function () {
        return player_hand;
    };

    this.score = function () {
        let i, x;
        let sum = 0;
        let aces = 0;
        for (let i = 0; i < player_hand.length; i++) {
            x = player_hand[i].getCardValue();
            if (x === 11) {
                aces++;
                sum++; // Ace as value 1
            } else {
                sum += x;
            }
        }
        while (sum < 21 && aces > 0) {
            // Value 1 already added above as Ace minimum,
            // Calculation now based on 10;
            if (sum + 10 <= 21) {
                sum += 10;
                aces--;
            } else {
                break;
            }
        }
        return sum;
    };

    this.showHand = function () {
        const showHand_output = [];
        for (let i = 0; i < player_hand.length; i++) {
            showHand_output.push(player_hand[i].getStringValue() + " of " + player_hand[i].getSuitStr());
        }
        return showHand_output.join(", ");
    };

    this.hitMe = function () {
        player_hand.push(dealCards());
    };

    this.busted = function () {
        return (this.score() > 21);
    };
};

function dealer_Hit() {
    const dealer_hitHand = new Hand();
    while (dealer_hitHand.score() < 17) {
        dealer_hitHand.hitMe();
    }
    return dealer_hitHand;
}

function player_hit_orStay() {
    const player_hand = new Hand();
    let player_Hit = true;
    while (player_Hit && !player_hand.busted()) {
        player_Hit = confirm(
            "You have: " + player_hand.showHand() +
            "\nSCORE: " + player_hand.score() +
            "\n\nHIT (press OK) or HOLD (press Cancel)?"
        );
        if (player_Hit) {
            player_hand.hitMe();
        }
    }
    return player_hand;
}

function declareWinner(player_cards, dealer_cards) {
    const s = {
        win: "$$$...you WIN!",
        lose: "Sheesh...you LOST a lot of money!",
        tie: "We don't pay for TIE games!"
    };
    const dealer_score = dealer_cards.score();
    const player_score = player_cards.score();
    if (player_score > 21) {
        if (dealer_score > 21) {
            return s.tie;
        } else {
            return s.lose;
        }
    } else if (dealer_score > 21) {
        return s.win;
    } else if (player_score > dealer_score) {
        return s.win;
    } else if (player_score < dealer_score) {
        return s.lose;
    } else {
        return s.tie;
    }
}

function start_Game() {

    deck_for_game = new Deck();
    // Shuffle the deck
    deck_for_game.shuffle();

    let player = player_hit_orStay();
    let dealer = dealer_Hit();

    let winner = "";
    let player_prompt = (player.busted()) ? " You BUSTED! Score" : "Your SCORE";
    let dealer_prompt = (dealer.busted()) ? "Dealer BUSTED! Score" : "Dealer's SCORE";

    winner += "\n" + player_prompt + ": " + player.score();
    winner += " (" + player.showHand() + ")\n";
    winner += dealer_prompt + ": " + dealer.score();
    winner += " (" + dealer.showHand() + ")\n";
    winner += "\n" + declareWinner(player, dealer);

    alert(winner);
}

setTimeout(function () {
    start_Game();
}, 1500);
