console.log("Hallo, ich bin Wilhelmina")
const katze = document.querySelector(".katze");
const herz = document.querySelector(".herz");
const zaehler = document.querySelector(".zaehler");

let anzahl = 0;

function aktualisiereAnzahl(){
    document.querySelector(".zaehler").textContent = anzahl;


}

aktualisiereAnzahl();

function miau () {
    new Audio("cats-meow-81221.mp3").play();
}


function zeigeHerz(){
    console.log("zeigeHerz");
    herz.style.display = "block";
    anzahl++;
    aktualisiereAnzahl();

}

function verschwindeHerz(e){
    console.log("verschwindeHerz");
    e.stopPropagation();
    herz.sytle.display = "none";
}

katze.addEventListener("click", zeigeHerz);
herz.addEventListener("click", verschwindeHerz);

const besen = document.querySelector(".besen");

function bewegeBesen(){
   const rect = besen.getBoundingClientRect();
   console.log(rect);
   besen.style.left = `$(rect.left + 10)px`;
}

bewegeBesen()