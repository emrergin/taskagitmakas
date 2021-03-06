const mesaj = document.querySelector('#message');
const faniler = document.querySelector('#fani');
const arka = document.querySelector('body');
const dugmeListesi = document.querySelector('#dugmeler');
let kayipsayisi=0;
let kazancsayisi=0;
let klik=0;
let kactaBiter=5;
const finalklik=3;
const kayLimit=2;
const oyPuan=document.querySelector('#oyuncuSkoru');
const bilPuan=document.querySelector('#bilgisayarSkoru');



const tabancaDugme = document.createElement('button');
const tabancaResim = document.createElement('img');

tabancaDugme.setAttribute('id', 'Tabanca');
tabancaResim.setAttribute('src', 'images/gun-g3071f3cb7_640.png');
tabancaDugme.appendChild(tabancaResim);
tabancaResim.classList.add('resim'); 
tabancaDugme.classList.add('dugme'); 

const audiobam = document.querySelector("#bam");
const audioklik = document.querySelector("#klik");

const sonEkran = document.createElement('p');
sonEkran.classList.add('win'); 
sonEkran.textContent="KAZANDIN!"


function computerPlay(){
    let zar=Math.floor(Math.random()*3)+1;
    let sonuc="";
    switch (zar) {
        case 1:
            sonuc="Taş";
            break;
        case 2:
            sonuc="Kâğıt";
            break;
        case 3:
            sonuc="Makas";
            break;            
    }
    return sonuc;
}

function singleRound(hamle1,hamle2)
{
    const mevcut = document.createElement('p');
    if (hamle1===hamle2){
        mevcut.textContent="Berabere! İkiniz de "+ hamle1 + " seçtiniz.";
    }
    else if ((hamle1==="Taş" && hamle2==="Makas")||(hamle1==="Makas" && hamle2==="Kâğıt")||(hamle1==="Kâğıt" && hamle2==="Taş")){
        mevcut.textContent="Zafer! Bilgisayarın "+ hamle2 +" seçimine karşılık " + hamle1+ " hamlesini seçtin!";
        kazancsayisi++;
    }
    else{
        mevcut.textContent="Yenilgi! Senin "+ hamle1 +" seçimine karşılık bilgisayar " + hamle2+ " oynadı!";
        kayipsayisi++;
    }
    mesaj.insertBefore(mevcut, mesaj.firstChild);
    if (kayipsayisi>kayLimit){
        dugmeListesi.appendChild(tabancaDugme);
        const btn4 = document.querySelector('#Tabanca');
        btn4.addEventListener('click', Silah);
    }
    if (kazancsayisi>=kactaBiter){
        gameEnd(`#008000`,"KAZANDIN!");
    }
    if (kayipsayisi>=kactaBiter){
        gameEnd(`#008000`,"KAYBETTİN!");
    }
    oyPuan.textContent=kazancsayisi;
    bilPuan.textContent=kayipsayisi;
}

function gameEnd(renk,mesaj){
    faniler.style.cssText = "display:none";
    arka.style.cssText=`background-color:${renk}; height:100vh; overflow: hidden`;
    sonEkran.textContent=mesaj;
    arka.appendChild(sonEkran);
}


const btn1 = document.querySelector('#Tas');
btn1.addEventListener('click', function(){
    singleRound("Taş",computerPlay());
});

const btn2 = document.querySelector('#Kagit');
btn2.addEventListener('click', function(){
    singleRound("Kâğıt",computerPlay());
});

const btn3 = document.querySelector('#Makas');
btn3.addEventListener('click', function(){
    singleRound("Makas",computerPlay());
});

function Silah() {
    klik++;
    audioklik.currentTime = 0;
    audioklik.play();

    tabancaResim.classList.add('titre');
    tabancaResim.addEventListener( "animationend",  function() {
        tabancaResim.classList.remove("titre");
    });
    

    if (klik>finalklik){
        audioklik.pause();
        audiobam.play();
        gameEnd(`#8b0000`,"KAZANDIN!");
   }
}

