const perguntas = [
  {
    texto: "O que mais te atrai em tecnologia?",
    opcoes: [
      { texto: "Resolver problemas", valor: "problemas" },
      { texto: "Criar coisas novas", valor: "criar" },
      { texto: "Entender sistemas", valor: "sistemas" }
    ]
  },
  {
    texto: "Você já tem experiência com tecnologia?",
    opcoes: [
      { texto: "Estou começando do zero", valor: "zero" },
      { texto: "Já estudei um pouco", valor: "iniciante" },
      { texto: "Já fiz projetos", valor: "projetos" }
    ]
  },
  {
    texto: "Quantas horas por semana você pode estudar?",
    opcoes: [
      { texto: "3 a 5 horas", valor: "pouco" },
      { texto: "6 a 10 horas", valor: "medio" },
      { texto: "Mais de 10 horas", valor: "muito" }
    ]
  },
  {
    texto: "Você prefere trabalhar com:",
    opcoes: [
      { texto: "Pessoas", valor: "pessoas" },
      { texto: "Dados", valor: "dados" },
      { texto: "Código", valor: "codigo" }
    ]
  },
  {
    texto: "Qual seu objetivo?",
    opcoes: [
      { texto: "Primeiro emprego", valor: "primeiro" },
      { texto: "Mudar de carreira", valor: "transicao" },
      { texto: "Crescer na área", valor: "crescer" }
    ]
  },
  {
    texto: "O que mais te interessa?",
    opcoes: [
      { texto: "Sites e aplicativos", valor: "web" },
      { texto: "Dados e gráficos", valor: "dados" },
      { texto: "Inteligência Artificial", valor: "ia" },
      { texto: "Redes e servidores", valor: "infra" }
    ]
  },
  {
    texto: "Você tem alguma experiência anterior que pode ajudar?",
    opcoes: [
      { texto: "Sim", valor: "sim" },
      { texto: "Não", valor: "nao" }
    ]
  }
];

let respostas = [];
let indice = 0;

function mostrarPergunta() {
  const perguntaEl = document.getElementById("pergunta");
  const opcoesEl = document.getElementById("opcoes");

  opcoesEl.innerHTML = "";

  if (indice < perguntas.length) {
    perguntaEl.innerText = perguntas[indice].texto;

    perguntas[indice].opcoes.forEach(opcao => {
      const botao = document.createElement("button");
      botao.innerText = opcao.texto;
      botao.onclick = () => selecionarResposta(opcao.valor);
      opcoesEl.appendChild(botao);
    });
  } else {
    calcularResultado();
  }
}

function selecionarResposta(valor) {
  respostas.push(valor);
  indice++;
  mostrarPergunta();
}

function calcularResultado() {
  const pontuacao = {
    "Desenvolvedor Frontend": 0,
    "Desenvolvedor Backend": 0,
    "Cientista de Dados": 0,
    "Especialista em IA": 0,
    "Infraestrutura/Redes": 0,
    "UX/UI Designer": 0
  };

  respostas.forEach(resp => {
    if (resp === "criar") pontuacao["Desenvolvedor Frontend"] += 2;
    if (resp === "problemas") {
      pontuacao["Cientista de Dados"] += 2;
      pontuacao["Desenvolvedor Backend"] += 1;
    }
    if (resp === "sistemas") {
      pontuacao["Desenvolvedor Backend"] += 2;
      pontuacao["Infraestrutura/Redes"] += 2;
    }
    if (resp === "pessoas") pontuacao["UX/UI Designer"] += 2;
    if (resp === "dados") pontuacao["Cientista de Dados"] += 3;
    if (resp === "codigo") pontuacao["Desenvolvedor Backend"] += 2;
    if (resp === "web") pontuacao["Desenvolvedor Frontend"] += 3;
    if (resp === "ia") pontuacao["Especialista em IA"] += 3;
    if (resp === "infra") pontuacao["Infraestrutura/Redes"] += 3;
  });

  const ranking = Object.entries(pontuacao)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  mostrarResultado(ranking);
}

function mostrarResultado(ranking) {
  const resultadoEl = document.getElementById("resultado");
  resultadoEl.innerHTML = `
    <h2>Carreiras indicadas para você:</h2>
    <p>🥇 ${ranking[0][0]}</p>
    <p>🥈 ${ranking[1][0]}</p>
    <p>🥉 ${ranking[2][0]}</p>
  `;
}

mostrarPergunta();
