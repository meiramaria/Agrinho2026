document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // BOTÕES
    // ============================
    const exploreBtn = document.getElementById("exploreBtn");
    const infoBtn = document.getElementById("infoBtn");

    exploreBtn?.addEventListener("click", () => {
        document.getElementById("praticas")?.scrollIntoView({ behavior: "smooth" });
    });

    infoBtn?.addEventListener("click", () => {
        document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" });
    });

    // ============================
    // MENU MOBILE
    // ============================
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");

    menuToggle?.addEventListener("click", () => {
        nav?.classList.toggle("open");
    });

    // ============================
    // PROGRESS BAR
    // ============================
    window.addEventListener("scroll", () => {
        const progress = document.querySelector(".progress");
        if (!progress) return;

        const docHeight = document.body.scrollHeight - window.innerHeight;
        const percent = (window.scrollY / docHeight) * 100;

        progress.style.width = percent + "%";
    });

    // ============================
    // QUIZ (ÚNICO E FUNCIONANDO)
    // ============================
    const quizData = [
        {
            pergunta: "Qual prática reduz o consumo de água em até 50%?",
            opcoes: [
                { texto: "Irrigação por gotejamento", correta: true },
                { texto: "Plantio direto", correta: false },
                { texto: "Controle biológico", correta: false }
            ]
        }
    ];

    const quizContainer = document.getElementById("quizContainer");
    const submitQuiz = document.getElementById("submitQuiz");
    const quizResult = document.getElementById("quiz-result");

    // render quiz
    if (quizContainer) {
        quizContainer.innerHTML = "";

        quizData.forEach((q, qi) => {
            const block = document.createElement("div");
            block.className = "quiz-block";

            block.innerHTML = `
                <p class="quiz-pergunta">${q.pergunta}</p>
                <div class="quiz-opcoes">
                    ${q.opcoes.map((op, oi) => `
                        <label class="quiz-opcao">
                            <input type="radio" name="q${qi}" value="${oi}" ${op.correta ? "data-correct='true'" : ""}>
                            ${op.texto}
                        </label>
                    `).join("")}
                </div>
            `;

            quizContainer.appendChild(block);
        });
    }

    // resultado
    submitQuiz?.addEventListener("click", () => {

        let score = 0;

        quizData.forEach((q, qi) => {
            const selected = document.querySelector(`input[name="q${qi}"]:checked`);
            if (selected?.dataset.correct === "true") score++;
        });

        const percent = Math.round((score / quizData.length) * 100);

        quizResult.style.display = "block";
        quizResult.innerHTML = `
            <div class="result-emoji">🌱</div>
            <h3>Você acertou ${score} de ${quizData.length}</h3>
            <p>${percent === 100 ? "Parabéns!" : "Continue estudando!"}</p>
        `;

        submitQuiz.style.display = "none";
    submitQuiz?.addEventListener("click", () => {

    let score = 0;

    quizData.forEach((q, qi) => {
        const selected = document.querySelector(`input[name="q${qi}"]:checked`);
        if (selected?.dataset.correct === "true") score++;
    });

    const percent = Math.round((score / quizData.length) * 100);

    quizResult.style.display = "block";
    quizResult.innerHTML = `
        <div class="result-emoji">🌱</div>
        <h3>Você acertou ${score} de ${quizData.length}</h3>
        <p>${percent === 100 ? "Parabéns!" : "Continue estudando!"}</p>
    `;

    submitQuiz.style.display = "none";
});


// ============================
// CONTADORES
// ============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const updateCounter = () => {

        const increment = target / 100;

        if (current < target) {

            current += increment;

            counter.textContent = Math.ceil(current);

            requestAnimationFrame(updateCounter);

        } else {

            counter.textContent = target;

        }
    };

    updateCounter();
});

});
