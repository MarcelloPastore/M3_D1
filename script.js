//* esercizio extra 1 
let funzione1 = () => {
    let lista = document.querySelector(".p-4:last-child li:nth-of-type(2)");
    lista.remove()
}
Window.onload = funzione1();
//* esercizio extra 2
let divPadre = document.querySelector(".jumbotron");
let figlio = document.getElementsByClassName("font-weight-bold");
let counter = 0;

console.log(divPadre);
console.log(figlio);

figlio[0].addEventListener('click', function onClick() {
    console.log('link clicked')
    divPadre.remove();
});

//* esercizio extra 3

let autore = document.querySelectorAll('.blog-post-meta a');

console.log(autore);

for (let i = 0; i < autore.length; i++) {
    autore[i].addEventListener('mouseover', function onOver() {
        alert(autore[i].innerHTML);
        console.log(autore[i].innerText);    
   })
}


