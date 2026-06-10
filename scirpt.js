// ============================
// Botão Explorar Projeto
// ============================
const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.getElementById("praticas").scrollIntoView({ behavior: "smooth" });
    });
}

// ============================
// Botão Saiba Mais
// ============================
const infoBtn = document.getElementById("infoBtn");
if (infoBtn) {
    infoBtn.addEventListener("click", () => {
        document.getElementById("sobre").scrollIntoView({ behavior: "smooth" });
    });
}

// ============================
// Menu mobile toggle
// ============================
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("nav");
if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

// ============================
// Barra de progresso
// ============================
window.addEventListener("scroll", () => {
    const progress = document.querySelector(".progress");
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const percentage = (scrollTop / docHeight) * 100;
    if (progress) progress.style.width = percentage + "%";
});

// ============================
// Quiz
// ============================
const quizData = [
    {
        pergunta: "1. A compostagem é uma prática sustentável que ajuda a:",
        opcoes: [
            { texto: "Reduzir lixo orgânico e fertilizar a terra naturalmente", correta: true },
            { texto: "Aumentar o uso de fertilizantes químicos", correta: false },
            { texto: "Contaminar o solo com resíduos", correta: false }
        ]
    },
    {
        pergunta: "2. Qual das seguintes fontes de energia é renovável e muito usada em fazendas?",
        opcoes: [
            { texto: "Carvão mineral", correta: false },
            { texto: "Energia solar fotovoltaica", correta: true },
            { texto: "Energia nuclear", correta: false }
        ]
    },
    {
        pergunta: "3. O plantio direto é vantajoso porque:",
        opcoes: [
            { texto: "Remove toda vegetação do solo antes do plantio", correta: false },
            { texto: "Usa mais agrotóxicos para proteger a terra", correta: false },
            { texto: "Preserva a estrutura do solo e reduz a erosão", correta: true }
        ]
    },
    {
        pergunta: "4. O sistema de irrigação por gotejamento reduz o consumo de água em até:",
        opcoes: [
            { texto: "10%", correta: false },
            { texto: "50%", correta: true },
            { texto: "5%", correta: false }
        ]
    },
    {
        pergunta: "5. O que é controle biológico de pragas?",
        opcoes: [
            { texto: "Uso de pesticidas químicos em grande quantidade", correta: false },
            { texto: "Queima das lavouras infectadas para eliminar pragas", correta: false },
            { texto: "Uso de inimigos naturais das pragas para proteger a lavoura", correta: true }
        ]
    },
    {
        pergunta: "6. Por que a preservação de polinizadores como abelhas é importante para a agricultura?",
        opcoes: [
            { texto: "Porque produzem mel que fertiliza o solo diretamente", correta: false },
            { texto: "Porque são essenciais para a reprodução de plantas e produção de alimentos", correta: true },
            { texto: "Porque eliminam pragas naturalmente sem ajuda humana", correta: false }
        ]
    }
];

const quizContainer = document.getElementById("quizContainer");
const submitQuiz = document.getElementById("submitQuiz");
const quizResult = document.getElementById("quiz-result");

// Renderizar quiz
if (quizContainer) {
    quizData.forEach((q, qi) => {
        const block = document.createElement("div");
        block.classList.add("quiz-block");

        const perg = document.createElement("p");
        perg.classList.add("quiz-pergunta");
        perg.textContent = q.pergunta;
        block.appendChild(perg);

        const opts = document.createElement("div");
        opts.classList.add("quiz-opcoes");

        q.opcoes.forEach((op, oi) => {
            const label = document.createElement("label");
            label.classList.add("quiz-opcao");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `q${qi}`;
            input.value = oi;
            if (op.correta) input.dataset.correct = "true";

            label.appendChild(input);
            label.appendChild(document.createTextNode(op.texto));
            opts.appendChild(label);
        });

        block.appendChild(opts);
        quizContainer.appendChild(block);
    });
}

// Submeter quiz
if (submitQuiz) {
    submitQuiz.addEventListener("click", () => {
        let score = 0;
        let answered = 0;

        quizData.forEach((q, qi) => {
            const selected = document.querySelector(`input[name="q${qi}"]:checked`);
            const allLabels = document.querySelectorAll(`input[name="q${qi}"]`);

            allLabels.forEach(inp => {
                inp.disabled = true;
                if (inp.dataset.correct === "true") {
                    inp.parentElement.classList.add("correta");
                }
            });

            if (selected) {
                answered++;
                if (selected.dataset.correct === "true") {
                    score++;
                    selected.parentElement.classList.add("acertou");
                } else {
                    selected.parentElement.classList.add("errou");
                }
            }
        });

        const percent = Math.round((score / quizData.length) * 100);
        let emoji = "🌱";
        let msg = "";

        if (percent === 100) {
            emoji = "🏆"; msg = "Parabéns! Você é um especialista em sustentabilidade!";
        } else if (percent >= 70) {
            emoji = "🌿"; msg = "Muito bem! Você sabe bastante sobre o assunto!";
        } else if (percent >= 40) {
            emoji = "💡"; msg = "Bom começo! Continue aprendendo sobre sustentabilidade.";
        } else {
            emoji = "📚"; msg = "Hora de estudar mais! Releia o projeto e tente de novo.";
        }

        quizResult.style.display = "block";
        quizResult.innerHTML = `
            <div class="result-emoji">${emoji}</div>
            <h3>Você acertou ${score} de ${quizData.length} perguntas (${percent}%)</h3>
            <p>${msg}</p>
        `;

        submitQuiz.style.display = "none";
        quizResult.scrollIntoView({ behavior: "smooth", block: "center" });
    });
}

// ============================
// Animação ao aparecer na tela
// ============================
const animTargets = document.querySelectorAll(".card, .futuro-card, .counter-card, .ref-card, .gallery-item");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

animTargets.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
});

// ============================
// Contadores animados
// ============================
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.dataset.target;
            let count = 0;
            const increment = target / 80;
            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.innerText = target;
                    clearInterval(timer);
                } else {
                    counter.innerText = Math.floor(count);
                }
            }, 20);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));