const nomeInput = document.querySelector("#nome");
const atracoesInput = document.querySelector("#atracoes");
const descricaoInput = document.querySelector("#descricao");
const dataInput = document.querySelector("#data");
const lotacaoInput = document.querySelector("#lotacao");
const linkImgInput = document.querySelector("#poster");
const form = document.querySelector("form");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

form.onsubmit = async (evento) => {
  evento.preventDefault();
  try {
    const novoEvento = {
      name: nomeInput.value,
      poster: linkImgInput.value,
      attractions: atracoesInput.value.split(","),
      description: descricaoInput.value,
      scheduled: new Date(dataInput.value).toISOString(),
      number_tickets: lotacaoInput.value,
    };

    //TENTANDO CORRIGIR BUG DATA/HORA

    // const dataHora = inDate.value;

    // const [dia, mes, ano] = dataHora.split("/");

    // let dataConvertida = [mes, dia, ano].join("/");

    const opcoes = {
      method: "POST",
      body: JSON.stringify(novoEvento),
      headers: {
        "content-type": "application/json",
      },
      redirect: "follow",
    };

    //montar o fetch
    const resposta = await fetch(`${BASE_URL}/events`, opcoes);
    const conteudoResposta = await resposta.json();
    console.log(conteudoResposta);

    alert("Evento cadastrado com sucesso");
    window.location.replace("./admin.html");
  } catch (error) {
    console.log(error);
    alert("Cadastro negado. Preencha os campos corretamente.");
  }
};
