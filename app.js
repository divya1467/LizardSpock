let userScore=0;
let compScore=0;
const userScore_div=document.querySelector("#user-score");
const compScore_div=document.querySelector("#comp-score");
const rule_div=document.querySelector(".rule");
const rock_div=document.querySelector("#rock");
const paper_div=document.querySelector("#paper");
const scissors_div=document.querySelector("#scissors");
const lizard_div=document.querySelector("#lizard");
const spock_div=document.querySelector("#spock");
function compchoice(){
    const choices=['rock','paper','scissors','lizard','spock'];
    const randomno=Math.floor(Math.random()*5);
    return choices[randomno];
}
//scissors cuts paper
//paper covers rock
//rock crushes lizard
//lizard poisons spock
//spock smashes scissors
//scissors decapitates lizard
//lizard eats paper
//paper disproves spock
//spock vapourises rock
//rock crushes scissors

function win(user, comp){
    userScore++;
    userScore_div.innerHTML=userScore;
    switch(user+comp){
        case 'scissorspaper':
            rule_div.innerHTML=`Scissors cuts Paper! you win🔥`
            break;
        case 'paperrock':
            rule_div.innerHTML=`paper covers rock! you win🔥`
            break;
        case 'rocklizard':
            rule_div.innerHTML=`rock crushes lizard! you win🔥`
            break;
        case 'lizardspock':
            rule_div.innerHTML=`lizard poisons spock! you win🔥`
            break;
        case 'spockscissors':
            rule_div.innerHTML=`spock smashes scissors! you win🔥`
            break;
        case 'scissorslizard':
            rule_div.innerHTML=`scissors decapitates lizard! you win🔥`
            break;
        case 'lizardpaper':
            rule_div.innerHTML=`lizard eats paper! you win🔥`
            break;
        case 'paperspock':
            rule_div.innerHTML=`paper disproves spock! you win🔥`
            break;
        case 'spockrock':
            rule_div.innerHTML=`spock vapourizes rock! you win🔥`
            break;
        case 'rockscissors':
            rule_div.innerHTML=`rock crushes scissors! you win🔥`
            break;
    
    } 
    
    console.log(rule_div.innerHTML)    
}
function loose(user, comp){
    compScore++;
    compScore_div.innerHTML=compScore;
    switch(user+comp){
        case 'paperscissors':
            rule_div.innerHTML=`scissors cuts paper! you loose😐`
            break;
        case 'rockpaper':
            rule_div.innerHTML=`paper covers rock! you loose😐`
            break;
        case 'lizardrock':
            rule_div.innerHTML=`rock crushes lizard! you loose😐`
            break;
        case 'spocklizard':
            rule_div.innerHTML=`lizard poisons spock! you loose😐`
            break;
        case 'scissorsspock':
            rule_div.innerHTML=`spock smashes scissors! you loose😐`
            break;
        case 'lizardscissors':
            rule_div.innerHTML=`scissors decapitates lizard! you loose😐`
            break;
        case 'paperlizard':
            rule_div.innerHTML=`lizard eats paper! you loose😐`
            break;
        case 'spockpaper':
            rule_div.innerHTML=`paper disproves spock! you loose😐`
            break;
        case 'rockspock':
            rule_div.innerHTML=`spock vapourizes rock! you loose😐`
            break;
        case 'scissorsrock':
            rule_div.innerHTML=`rock crushes scissors! you loose😐`
            break;
        
    }
    console.log(rule_div.innerHTML)       
}
function draw(){
    rule_div.innerHTML=`it's a draw!🎈`;
}
function game(userchoice){
const compchoose=compchoice();
switch(userchoice+compchoose){
    case 'scissorspaper':
    case 'paperrock':
    case 'rocklizard':
    case 'lizardspock':
    case 'spockscissors':
    case 'scissorslizard':
    case 'lizardpaper':
    case 'paperspock':
    case 'spockrock':
    case 'rockscissors':
        win(userchoice, compchoose);
        break;
    case 'paperscissors':
    case 'rockpaper':
    case 'lizardrock':
    case 'spockliard':
    case 'scissorsspock':
    case 'lizardscissors':
    case 'paperlizard':
    case 'spockpaper':
    case 'rockspock':
    case 'scissorsrock':
        loose(userchoice, compchoose);
        break;
    case 'paperpaper':
    case 'rockrock':
    case 'scissorsscissors':
    case 'lizardlizard':
    case 'spockspock':
        draw();
        break;
}

}

rock_div.addEventListener('click', function(){
    game('rock');
}) 
paper_div.addEventListener('click', function(){
    game('paper');
}) 
scissors_div.addEventListener('click', function(){
    game('scissors');
}) 
lizard_div.addEventListener('click', function(){
    game('lizard');
}) 
spock_div.addEventListener('click', function(){
    game('spock');
}) 