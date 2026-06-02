# script.js

```javascript
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

  alert(
    "Bem-vindo ao Agrinho 2026! O futuro do agro começa agora."
  );

});

const infoBtn = document.getElementById("infoBtn");

infoBtn.addEventListener("click", () => {

  alert(
    "A agricultura sustentável busca reduzir impactos ambientais utilizando tecnologias modernas, bioinsumos e produção responsável."
  );

});

const futureBtn = document.getElementById("futureBtn");

futureBtn.addEventListener("click", () => {

  document.querySelector(".future").scrollIntoView({
    behavior:"smooth"
  });

  alert(
    "Agro 2050: inteligência artificial, energia limpa e agricultura sustentável serão os pilares do futuro."
  );

});

window.addEventListener("scroll", () => {

  const progress = document.querySelector(".progress");

  let scroll = window.scrollY;

  let width = 87 + (scroll / 50);

  if(width > 100){
    width = 100;
  }

  progress.style.width = width + "%";

});
```
// Seleciona os botões pelo ID
const exploreBtn = document.getElementById('exploreBtn');
const infoBtn = document.getElementById('infoBtn');
const futureBtn = document.getElementById('futureBtn');

// Evento para o botão "Explorar Projeto"
exploreBtn.addEventListener('click', () => {
  window.open('https://www.agrinho.org.br', '_blank'); // Exemplo de site do Agrinho
});

// Evento para o botão "Saiba Mais" (Uso responsável de agroquímicos)
infoBtn.addEventListener('click', () => {
  window.open('https://www.fao.org/agrochemicals/en/', '_blank'); // Exemplo FAO Agroquímicos
});

// Evento para o botão "Descobrir Futuro" (Futuro do Agro)
futureBtn.addEventListener('click', () => {
  window.open('https://www.agriculture.com/technology', '_blank'); // Exemplo site sobre tecnologia no agro
});
