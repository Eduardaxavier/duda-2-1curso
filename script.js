const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando a IA surgiu?",
        alternativas: [
            {
                texto: "A IA surgiu em 1943,quando Warren McCulloch e Walter Pitts criaram o primeiro modelo computacional para redes neurais",
                afirmacao: "No início a tecnologia não foi usada. "
            },
          ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial,a IA vem ajudando na sustentabilidade?",
        alternativas: [
            {
                texto: "Para ajudar na sustentabilidade a IA vem com fatores como:Redução de desperdicios,mais eficiência energética e soluções integradas.",
                afirmacao: "Assim ajudando a sociedade."
            },
            ]
    },
    {
        enunciado: "Qual o impacto da IA na sociedade? ",
        alternativas: [
            {
                texto: "Em muitos casos, ela está sendo usada para aumentar a eficiência e a produtividade."
                afirmacao: "Desde então a IA vem sendo usada para qualquer questão."
            },
            ]
    },
    {
        enunciado: "A ideia de que a IA pode criar novas oportunidades de emprego e melhorar as habilidades humanas?",
        alternativas: [
            {
                texto: "A IA pode criar novos empregos que exigem habilidades cognitivas mais complexas.",
                afirmacao: "Fazendo assim alguns empregos deixarem de existir na humanidade."
            },
            ]
    },
    {
        enunciado: "Qual o impacto da inteligência artificial no meio ambiente?",
        alternativas: [
            {
                texto: "O uso da IA também pode ter um impacto negativo ao meio ambiente, aumentando as emissões de gases de efeito estufa e a poluição.",
                afirmacao: "Um estudo publicado na revista Nature Climate Change, em 2022, estimou que a IA poderá representar 10% das emissões globais de gases de efeito estufa até o ano de 2040."
            },
            ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
