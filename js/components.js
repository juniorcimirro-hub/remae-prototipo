/**
 * components.js
 * Carrega o rodapé compartilhado (footer.html) em todas as páginas.
 * Para alterar o rodapé do site inteiro, edite apenas footer.html.
 */
(function () {
  const placeholder = document.getElementById('footer-placeholder');
  if (!placeholder) return;

  fetch('footer.html')
    .then(function (res) {
      if (!res.ok) throw new Error('footer.html não encontrado');
      return res.text();
    })
    .then(function (html) {
      placeholder.outerHTML = html;
    })
    .catch(function (err) {
      console.warn('[components.js]', err.message);
    });
})();
