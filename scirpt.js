// ============================
// Quiz
// ============================

const quizData = [
{
    pergunta: "Qual prática sustentável apresentada no projeto pode reduzir o consumo de água em até 50% nas fazendas?",
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

// Criar perguntas
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
                        <input
                            type="radio"
                            name="q${qi}"
                            value="${oi}"
                            ${op.correta ? 'data-correct="true"' : ""}
                        >
                        ${op.texto}
                    </label>
                `).join("")}
            </div>
        `;

        quizContainer.appendChild(block);
    });
}

// Corrigir botão resultado
if (submitQuiz && quizResult) {

    submitQuiz.addEventListener("click", () => {

        let score = 0;

        quizData.forEach((q, qi) => {

            const selected = document.querySelector(
                `input[name="q${qi}"]:checked`
            );

            if (
                selected &&
                selected.dataset.correct === "true"
            ) {
                score++;
            }
        });

        const percent = Math.round(
            (score / quizData.length) * 100
        );

        let emoji = "📚";
        let msg = "Resposta incorreta. Revise o conteúdo.";

        if (percent === 100) {
            emoji = "🏆";
            msg = "Parabéns! Você acertou tudo!";
        }

        quizResult.style.display = "block";

        quizResult.innerHTML = `
            <div class="result-emoji">${emoji}</div>
            <h3>Você acertou ${score} de ${quizData.length} pergunta(s)</h3>
            <p>${msg}</p>
        `;
    });

}