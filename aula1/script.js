//alert("Hello World!!");
/*console.log("Hello World!!");
let elementos = document.getElementsByTagName("p");
let elementos = document.getElementsByClassName("paragrafo");
let elementos = document.getElementsById("#caixa");
let elementos = document.querySelector(".conteiner .conteudo"); é o mais usado.
let elementos = document.querySelectorAll(". conteiner .conteudo"); retorna uma lista de tudo que tem dentro do conteiner/conteúdo
elementos[1].innerText = "Novo Texto";
console.log(elementos[1].innerText);*/


//Desafio 2 (Próxima Aula)
//let elemento = document.getElementById("paragrafo");
//elemento.innerText = "Olá Mundo!";

//let elementos = document.getElementsByClassName("texto");
//texto.style.backgroundColor = "blue";


/*novaFuncionalidade();

function novaFuncionalidade(){
    let titulo = document.querySelector("h1");
    titulo.innerText = "Seu título foi hackeado!!!";
    titulo.style.fontSize = "100px"; 
    titulo.style.color = "green";*/
}


//Desafio 3

let respostaWaddles = document.querySelector("#resposta-waddles");

let waddles = document.querySelector("img");

waddles.onmouseenter = mouseEnter;
waddles.onmousemove = mouseMove;
waddles.onmouseleave = mouseLeave;
waddles.ondrag = dragWaddles;


/*
function mouseEnter(){
    respostaWaddles.innerText = "Isso faz cócegas";
}

function mouseLeave(){
    respostaWaddles.innerText = "Obrigado por Parar.";
}

function mouseMove(){
    respostaWaddles.innerText = "Pare com isso!!!!";
}

function dragWaddles(){
    respostaWaddles.innerText = "Para onde você pensa q está me levando?";
}*/
