const botaoMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-links");

const ICONE_ABRIR =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
const ICONE_FECHAR =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';

if (botaoMenu) {
  botaoMenu.innerHTML = ICONE_ABRIR;
}

if (botaoMenu && menu) {
  botaoMenu.addEventListener("click", function () {
    const aberto = menu.classList.toggle("aberto");

    botaoMenu.innerHTML = aberto ? ICONE_FECHAR : ICONE_ABRIR;
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");

    document.body.style.overflow = aberto ? "hidden" : "";
  });
}
