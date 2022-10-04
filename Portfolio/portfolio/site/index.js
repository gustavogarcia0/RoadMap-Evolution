function listenerExibirCard() {
  const menuIcons = document.querySelector(".menu-barra-lateral"); // container dos icons svg
  const btnControlaExibicao = document.querySelector(".botao-abrir-fechar"); // botao de fechar/abrir
  const containerCardPrincipal = document.querySelector(".elementos-home-card-esquerda"); // container pai
  btnControlaExibicao.addEventListener("click", () => {
    //Se tem fechar ele está aberto
    if (btnControlaExibicao.classList.contains("fechar")) {
      btnControlaExibicao.classList.remove("fechar");
      btnControlaExibicao.classList.add("abrir");
      containerCardPrincipal.classList.remove("aberto");
      containerCardPrincipal.classList.add("fechado");
      menuIcons.classList.add("container-fechado");
    } else {
      // se não tem fechar ele tem abrir, se tem abrir é pq está fechado
      btnControlaExibicao.classList.add("fechar");
      btnControlaExibicao.classList.remove("abrir");
      containerCardPrincipal.classList.add("aberto");
      containerCardPrincipal.classList.remove("fechado");
      menuIcons.classList.remove("container-fechado");
    }
  });
}

function init() {
  listenerExibirCard();
} // init

init();
