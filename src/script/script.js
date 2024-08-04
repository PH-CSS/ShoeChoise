const over = document.querySelector(".overlay");
const lista = document.querySelector(".elemento");
const selecaolista = document.querySelectorAll(".ball");
const selecaoTn = document.querySelectorAll("li");
const image = document.querySelector("img");

const bgShoe = document.querySelector(".shoe");
// console.dir(bgShoe);
// efeito de aparição de botões para seleção de cor
let clique = false;
const layup = () => {


    if (clique == false) {
       
               lista.classList.add("a");
      
            lista.classList.remove("b");
     
     
        clique = true;

        console.log("y");

        over.textContent = "Recolher opções. ";
    }
    else{
      
            lista.classList.remove("a");
       
            lista.classList.add("b");
        



        clique = false;
        console.log("n")
        over.textContent = "Ver mais opções. ";
    }
    

}

over.addEventListener( 'click', () => layup()); 

lista.children[0].addEventListener( "click" , () =>{
    image.src = "src/img/pngegg0.png"

})
lista.children[1].addEventListener( "click" , () =>{
    image.src = "src/img/pngegg1.png"

})
lista.children[2].addEventListener( "click" , () =>{
    image.src = "src/img/pngegg2.png"

})
// efeito para mudança de cor

