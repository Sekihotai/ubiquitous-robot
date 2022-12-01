let deck = [] //list of cards
let current_index = 0; //index of the current card in the deck
let life = [50,50,50,50]; //player statistics
let life_text = ['health', 'wealth', 'love', 'family']; //stat labels

function setup_deck() {
    let card = {
        entry : true, //this card can be jumped to
        image: 'https://i.imgur.com/m5xBBJQ.png',
        text: "Miguel asks for your help on the website. His cards aren't displaying right, and you know why. But you're feeling really lazy today. Do you help him?",
        negative_option: 'No, figure it out <br>yourself you bum!',
        positive_option: 'Sure, why not.',
        negative_values: [0,0,-20,0],
        positive_values: [0,0,20,0],
        next_option: -1, //is the next option random (-1) or is it rigged (set to specific card like 1 or 2)
    }
     deck.push(card);
    
    card = {
        entry: true,
        image: 'IMG/blonde.webp',
        text: "It's been a bad day. Listen to Blonde?",
        negative_option: 'No, that album <br>is garbage.',
        positive_option: 'Of course, I <br>love that album.',
        negative_values: [-10,-10,-10,-10],
        positive_values: [20,20,20,20],
        next_option: -1,
    }
    deck.push(card);

    card = {
        entry: true,
        image: 'IMG/rugpull.webp',
        text: "Your friend Jacob tells you about a very lucrative opportunity to make some quick money. However, it's not exactly legally or morally correct. Do it anyway?",
        negative_option: "No, let's not do that.",
        positive_option: 'Sounds great!',
        negative_values: [5,0,15,0],
        positive_values: [-10,30,-15,0],
        next_option: -1,
    }
    deck.push(card);

    card = {
        image: 'https://i.ytimg.com/vi/zOUnO7NK3qw/maxresdefault.jpg',
        text: "You have health homework.",
        negative_option: "I hate this class, let's take a 0!",
        positive_option: "I hate this class, let's try anyway.",
        negative_values: [-20,0,0,-10],
        positive_values: [15,0,0,5],
        next_option: -1,
    }
    deck.push(card);
}

function display_card(c) {
    document.getElementById('positive').innerHTML = deck[c].positive_option;
    document.getElementById('text').innerHTML = deck[c].text;
    document.getElementById('negative').innerHTML = deck[c].negative_option;
    document.getElementById('image').src = deck[c].image;
    document.getElementById('status').innerHTML =
    life_text[0] + ': ' + life[0] + ' '+
    life_text[1] + ': ' + life[1] + '<br> '+
    life_text[2] + ': ' + life[2] + ' '+
    life_text[3] + ': ' + life[3] + ' ';
}

function choice_made(choice) {
    if (choice == true) {
        life[0] += deck[current_index].positive_values[0];
        life[1] += deck[current_index].positive_values[1];
        life[2] += deck[current_index].positive_values[2];
        life[3] += deck[current_index].positive_values[3];
    } else {
        life[0] += deck[current_index].negative_values[0];
        life[1] += deck[current_index].negative_values[1];
        life[2] += deck[current_index].negative_values[2];
        life[3] += deck[current_index].negative_values[3];
    }
    let next_index = current_index;
    while (next_index == current_index) {
        next_index = Math.floor(Math.random() * deck.length);
    }
    current_index = next_index
    display_card(current_index);
}

setup_deck();
display_card(current_index);