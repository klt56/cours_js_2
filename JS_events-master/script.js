var p1 = document.querySelector("footer");
p1.addEventListener('click',changeTexte);

function changeTexte(){
    "i = ++"
console.log('clique');
}


menuBtn = document.getElementById("navbarHeader");
menu = document.querySelector("button", ".navbar-toggler");
menu.addEventListener("click", function() {
   menuBtn.classList.toggle("collapse")
})



/*
card = document.getElementById("card-1");
card.addEventListener('click',changeTexte);
function changeTexte(){
  this.style.color = 'red';
}

cardEdit = document.getElementById("card1");
cardEdit.addEventListener('edit',changeTexte);

function changeTexte(){
    "i = ++"

this.style.color = prompt('quel couleur voulez-vous ?');
}
*/

  let secondcard = document.getElementsByClassName("card")[1];
let editsecondcard = secondcard.getElementsByClassName("btn")[1];

function green() {

  if (secondcard.style.color === 'green') {
  secondcard.style.color = '' ;
  } else {
    secondcard.style.color = 'green'
};}

editsecondcard.addEventListener("click",green);
 



let nav = document.querySelector('.navbar')
let link = document.querySelector('link')

nav.addEventListener("dblclick", function (){
if (link.disabled===true){
    link.disabled=false;
}
else{
    document.querySelector('link').disabled=true;
}
});

