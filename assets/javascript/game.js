// I had ambitious ideas for this project and when I started to follow through with the code I think I got myself in over my head. I didn't want to abandon the work I already did, so I am doing as much as I know how and hope you will accept this as the effort that I put into it. 

var clicks = 0;

//wanted to incorporate objects within object
var characters = {
    harry: { hp: 12, ap: 8, cap: 2 },
    albus: { hp: 2, ap: 12, cap: 3 },
    severus: { hp: 3, ap: 4, cap: 6 },
    voldy: { hp: 4, ap: 3, cap: 12 },
}
var fighter;
var opponent;

//in order for rest if game to work I need to separate these functions 
//however this is the only way I could actully get it to work
$(".card").on('click', function chooseCharacters() {
    if (clicks == 0) {
        fighter = $(this).closest('.card').clone(true);
        $("#fighter").append(fighter);
        //want to css style card to show fighter
    } else {
        opponent = $(this).closest('.card').clone(true);
        $("#opponent").prepend(opponent);
    }
    ++clicks;
})

//cast spells button 
$("button").on('click', function () {
    //increment SPECIFIC fighter ap by base 
    // show nunber in html
    //decrement SPECIFIC opponent hp by 1 
    // show number in html
})

// if (opponent hp <= 0){
    //delete clone and/or
    //css style original card to show defeated 
    //function chooseOpponent 
//}

// IF all enemies are defeated "you win" and reset/play again button.