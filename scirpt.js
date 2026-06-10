```javascript
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

            if (op.correta) {
                input.dataset.correct = "true";
            }

            label.appendChild(input);
            label.appendChild(document.createTextNode(op.texto));
            opts.appendChild(label);
        });

        block.appendChild(opts);
        quizContainer.appendChild(block);
    });
}

// Resultado do quiz
if (submitQuiz) {
    submitQuiz.addEventListener("click", () => {
        let score = 0;

        quizData.forEach((q, qi) => {
            const selected = document.querySelector(`input[name="q${qi}"]:checked`);
            const allInputs = document.querySelectorAll(`input[name="q${qi}"]`);

            allInputs.forEach(inp => {
                inp.disabled = true;

                if (inp.dataset.correct === "true") {
                    inp.parentElement.classList.add("correta");
                }
            });

            if (selected) {
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
        let msg = "Continue aprendendo sobre sustentabilidade.";

        if (percent === 100) {
            emoji = "🏆";
            msg = "Parabéns! Você acertou a pergunta!";
        } else {
            emoji = "📚";
            msg = "Resposta incorreta. Revise o conteúdo do projeto.";
        }

        quizResult.style.display = "block";
        quizResult.innerHTML = `
            <div class="result-emoji">${emoji}</div>
            <h3>Você acertou ${score} de ${quizData.length} pergunta (${percent}%)</h3>
            <p>${msg}</p>
        `;

        submitQuiz.style.display = "none";
    });
}
```
