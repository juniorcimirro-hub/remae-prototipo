(function () {
  const pre = document.getElementById("preloader");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const minTime = reduce ? 0 : 1100;
  const start = performance.now();

  function ready() {
    document.body.classList.add("is-ready");
    document.body.style.overflow = "";
  }

  function hidePreloader() {
    if (!pre) {
      ready();
      return;
    }
    const wait = Math.max(0, minTime - (performance.now() - start));
    setTimeout(function () {
      pre.classList.add("is-done");
      ready();
      setTimeout(function () {
        if (pre.parentNode) pre.remove();
      }, 600);
    }, wait);
  }

  if (pre) document.body.style.overflow = "hidden";

  if (document.readyState === "complete") hidePreloader();
  else window.addEventListener("load", hidePreloader);
})();
