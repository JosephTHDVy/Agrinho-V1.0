const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você se depara com algumas dificuldades na sua fazenda, e então...",
        alternativas: [
            {
                texto: "Decide usar da técnologia para auxiliar no desenvolvimento de sua fazenda.",
                afirmacao: "Você percebeu que a técnologia pode ser uma forte aliada para o agronegócio. "
            },
            {
                texto: "Você prefere usar de técnicas diferentes de plantio e gerenciamento, sem a necessidade de novas técnologias.",
                afirmacao: "Você fica receoso com as inovações da área e não se da bem com as novas técnologias."
            }
        ]
    },

    {
        enunciado: "Ao notar um aumento na demanda de seus produtos, que são vendidos através que um programa de apoio as escolas publicas, você...",
        alternativas: [
            {
                texto: "Usa um novo software para o monitoramento de estoque e plantio.",
                afirmacao: "Mas, como toda técnologia, deve ser usada de maneira consciente, pois é apenas uma ferramenta, que pode ajudar a humanidade assim como muitas outras."
            },
            {
                texto: "faz planilhas manualmente para organizar seu estoque, e também faz o monitoramento do plantio de maneira manual.",
                afirmacao: "Acreditando também que nenhuma técnologia pode substituir o trabalho e esforço humano."
            }
        ]
    },

    {
        enunciado: "Então, ao se deparar com o aumento do uso de técnologias na sua região, você...",
        alternativas: [
            {
                texto: "Aprecia a inovação, e acredita que estas mudanças pode trazer consigo um bem muito valioso para o agronegócio e a humanidade.",
                afirmacao: "Então confia que a humanidade fará bom uso das inovações da área, e que o futuro do agronegócio esta cada vez mais promissor."
            },
            {
                texto: "Entende aqueles que usam da técnologia, porém, não pretende aderir ao uso por não se adaptar.",
                afirmacao: "Não optando pelo uso de Softwares e outras inovações, e assim mantendo a pratica de técnicas antigas e que são usadas a gerações."
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
    caixaPerguntas.textContent = "Você decide começar na agricultura familiar e";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
