
const botaoPrev = document.querySelector(".botao.prev");
const botaoNext = document.querySelector(".botao.next");
const carrosselInner = document.querySelector(".carrossel-inner");
const conteudos = document.querySelectorAll(".conteudo");


let indiceAtual = 0;


function atualizarCarrossel() {

    carrosselInner.style.transform = `translateX(-${indiceAtual * 100}%)`;
}


function proximoItem() {
    indiceAtual = (indiceAtual + 1) % conteudos.length;
    atualizarCarrossel();
}


function itemAnterior() {
    indiceAtual = (indiceAtual - 1 + conteudos.length) % conteudos.length;
    atualizarCarrossel();
}


botaoNext.addEventListener("click", proximoItem);
botaoPrev.addEventListener("click", itemAnterior);


atualizarCarrossel();
