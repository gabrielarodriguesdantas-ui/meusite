/* ================================
GANHANDO O MUNDO
JAVASCRIPT DO SITE
================================ */

// Seleciona o botão do menu e a navegação
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


// ABRIR E FECHAR MENU NO CELULAR

menuToggle.addEventListener("click", () => {

// Alterna a classe que mostra o menu
const isOpen = mainNav.classList.toggle("open");

// Atualiza o estado do botão
menuToggle.setAttribute("aria-expanded", String(isOpen));

// Atualiza o nome acessível do botão
menuToggle.setAttribute(
"aria-label",
isOpen ? "Fechar menu" : "Abrir menu"
);

});


// FECHAR MENU AO CLICAR EM UMA SEÇÃO

mainNav.querySelectorAll("a").forEach((link) => {

link.addEventListener("click", () => {

// Esconde o menu
mainNav.classList.remove("open");

// Atualiza o botão
menuToggle.setAttribute("aria-expanded", "false");

menuToggle.setAttribute(
"aria-label",
"Abrir menu"
);

});

});
