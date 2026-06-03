```javascript
// Botão "Explorar Projeto"
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
  alert("Bem-vindo ao Agrinho 2026! O futuro do agro começa agora.");
  window.open("https://www.agrinho.org.br/", "_blank");
});

// Botão "Saiba Mais"
const infoBtn = document.getElementById("infoBtn");

infoBtn.addEventListener("click", () => {
  alert("A agricultura sustentável busca reduzir impactos ambientais utilizando tecnologias modernas, bioinsumos e produção responsável.");
  window.open("https://www.embrapa.br/", "_blank");
});

// Botão "Descobrir Futuro"
const futureBtn = document.getElementById("futureBtn");

futureBtn.addEventListener("click", () => {
  document.querySelector(".future").scrollIntoView({
    behavior: "smooth"
  });

  setTimeout(() => {
    alert("Agro 2050: inteligência artificial, energia limpa e agricultura sustentável serão os pilares do futuro.");
    window.open("https://www.agencia.cnptia.embrapa.br/", "_blank");
  }, 500);
});

// Animação da barra de progresso
window.addEventListener("scroll", () => {
  const progress = document.querySelector(".progress");
  let scroll = window.scrollY;
  let width = 87 + scroll / 50;

  if (width > 100) {
    width = 100;
  }

  progress.style.width = width + "%";
});
```