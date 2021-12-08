function computerPlay(){
    let zar=Math.floor(Math.random()*3)+1;
    let sonuc="";
    switch (zar) {
        case 1:
            sonuc="Rock";
            break;
        case 2:
            sonuc="Paper";
            break;
        case 3:
            sonuc="Scıssors";
            break;            
    }
    // console.log(sonuc);
    return sonuc;
}

function singleRound(hamle1,hamle2)
{
    if (hamle1===hamle2){
        console.log("Draw! You both picked "+hamle1);
    }
    else if ((hamle1==="Rock" && hamle2==="Scıssors")||(hamle1==="Scıssors" && hamle2==="Paper")||(hamle1==="Paper" && hamle2==="Rock")){
        console.log("Victory! You win by choosing " + hamle1+ " over computer's " + hamle2 );
    }
    else{
        console.log("Defeat! The computer wins by choosing " + hamle2+ " over your " + hamle1 );
    }
}

function normalizeText(str)
{
    return str.charAt(0).toLocaleUpperCase()+oyuncu.slice(1).toLocaleLowerCase();
}

function game(num){
    for (let i = 0; i < num; i++) {
        console.log("Round : " + (i+1).toString());
        let oyuncu = prompt("Write rock, papers or scissors","Rock");
        oyuncu=normalizeText(oyuncu);
        singleRound(oyuncu,computerPlay());
      }
}

game(5);


