const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");
const form = document.querySelector("form");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const urlParams = new URLSearchParams(window.location.search);
const nomeParam = urlParams.get("_id");
const formExcluir = document.querySelector("form");

const formatNumber = (numero) => {
  if (numero < 10) {
    return "0" + numero;
  }
  return numero;
};

const resposta = async () => {
  const resposta = await fetch(`${BASE_URL}/events/${nomeParam}`);
  const conteudoResposta = await resposta.json();
  const newDate = new Date(conteudoResposta.scheduled);
  const dataFormatada = `${newDate.getFullYear()}-${formatNumber(
    newDate.getMonth()
  )}-${newDate.getDate()}T${formatNumber(newDate.getHours())}:${formatNumber(
    newDate.getMinutes()
  )}`;

  inputNome.value = conteudoResposta.name;
  inputBanner.value = conteudoResposta.poster;
  inputAtracoes.value = conteudoResposta.attractions;
  inputDescricao.value = conteudoResposta.description;
  inputData.value = dataFormatada;
  inputLotacao.value = conteudoResposta.number_tickets;
};

resposta().catch((error) => {
  console.log(error);
  alert("Não foi possível carregar dados da página.");
});

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const novoEvento = {
    name: inputNome.value,
    poster: inputBanner.value,
    attractions: [inputAtracoes.value.split(",")],
    description: inputDescricao.value,
    scheduled: inputData.value,
    number_tickets: inputLotacao.value,
  };

  console.log(novoEvento);
  const opcoes = {
    method: "PUT",
    body: JSON.stringify(novoEvento),
    headers: {
      "content-type": "application/json",
    },
    redirect: "follow",
  };

  const resposta = await fetch(`${BASE_URL}/events/${nomeParam}`, opcoes);
  const conteudoResposta = await resposta.json();
  console.log(conteudoResposta);

  alert("Evento editado com sucesso");
  window.location.replace("./admin.html");
};
