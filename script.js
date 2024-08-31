const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Certo dia, enquanto você procurava um aplicativo na Play Store, aparece a recomendação de um jogo de simulação e RPG que possui um design pixelado. Nesse primeiro contato como você se sente?  ",
        alternativas: [
            {
                texto: "Fico interessado em jogar.",
                afirmacao: "Tenho vontade de jogar um novo. . "
            },
            {
                texto: "Fico curioso em saber do que se trata.",
                afirmacao: "Quero saber como o jogo funciona para então decidir se vale a pena joga-lo."
            }
        ]
    },
    {
        enunciado: "Então, você decide procurar a respeito do jogo. O que você procura primeiro?",
        alternativas: [
            {
                texto: " Procuro a história do jogo e dicas de como inicia-lo.",
                afirmacao: "Quero entender a história e descobrir como jogar Stardew Valley."
            },
            {
                texto: "Procuro vídeos de outras pessoas jogando e críticas.",
                afirmacao: "Quero saber se Stardew Valley é bom ."
            }
        ]
    },
    {
        enunciado: "Com isso, você ainda está confuso com tantas informações, pois você percebe que o jogo é mais complicado do que parecia. Por conta disso ...",
        alternativas: [
            {
                texto: "Você se anima.",
                afirmacao: "Pelo visto não é mais um simples jogo de fazendinha."
            },
            {
                texto: "Você se pergunta se vale a pena.",
                afirmacao: "Acho que isso vai consumir muito o meu tempo."
            }
        ]
    },
    {
        enunciado: "Depois disso, você finalmente decide se vai jogar ou não. Qual foi a sua decisão?",
        alternativas: [
            {
                texto: "Acho que vale a pena dar uma chance.",
                afirmacao: "Parece uma forma divertida de passar o tempo, além de ter um design muito encantador."
            },
            {
                texto: "Não tenho tempo pra isso.",
                afirmacao: "Acredito que tenho coisas mais interessantes para fazer."
            }
        ]
    },
    {
        enunciado: "Para concluir, independentemente da sua decisão, você acha Stardew Valley um jogo empolgante? ",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Quando se tem tempo Stardew Valley pode ser uma boa distração."
            },
            {
                texto: "Não.",
                afirmacao: "É só mais um jogo. "
            }
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
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
