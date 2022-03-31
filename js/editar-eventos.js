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

const formatNumber = (numero) => {
  if (numero < 10) {
    return "0" + numero;
  }
  return numero;
};

const resposta = async () => {
  const resposta = await fetch(`${BASE_URL}/events/${nomeParam}`);
  const conteudoResposta = await resposta.json();

  inputNome.value = conteudoResposta.name;
  inputBanner.value = conteudoResposta.poster;
  inputAtracoes.value = conteudoResposta.attractions;
  inputDescricao.value = conteudoResposta.description;
  inputData.value = conteudoResposta.scheduled.split("").slice(0, 16).join("");
  inputLotacao.value = conteudoResposta.number_tickets;
};

resposta().catch((error) => {
  console.log(error);
  alert("Não foi possível carregar dados da página.");
});

form.onsubmit = async (evento) => {
  evento.preventDefault();
  try {
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

    if (resposta.status != 400) {
      alert("Alteração realizada com sucesso");
      window.location.replace("./admin.html");
    }
    if (resposta.status == 400) {
      alert("Alteração negada. Preencha os campos corretamente.");
    }
  } catch (error) {
    console.log(error);
  }
};
