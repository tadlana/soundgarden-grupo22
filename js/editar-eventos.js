const nomeInput = document.querySelector("#nome");
const linkImgInput = document.querySelector("#banner");
const atracoesInput = document.querySelector("#atracoes");
const descricaoInput = document.querySelector("#descricao");
const dataInput = document.querySelector("#data");
const lotacaoInput = document.querySelector("#lotacao");
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const formEditar = document.querySelector("form");
let output = "";

const urlParams = new URLSearchParams(window.location.search);
const nomeParam = urlParams.get("_id");

fetch(`${BASE_URL}/events/${nomeParam}`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    output = `<label for="nome" class="form-label">Nome</label>
      <input type="text" class="form-control" id="nome" aria-describedby="nome" value="${value.name}">
    </div>
    <div class="mb-3">
      <label for="banner" class="form-label">Banner</label>
      <input type="text" class="form-control" id="banner" aria-describedby="banner"
          value="${value.poster}">
      <small>adicione o link da imagem</small>
    </div>
    <div class="mb-3">
      <label for="atracoes" class="form-label">Atrações</label>
      <input type="text" class="form-control" id="atracoes" aria-describedby="atracoes"
          value="${value.attractions}">
      <small>insira o nome dos artistas separados por vírgula</small>
    </div>
    <div class="mb-3">
      <label for="descricao" class="form-label">Descrição</label>
      <textarea name="descricao" id="descricao" class="form-control" rows="5" >${value.description}
      </textarea>
    </div>
    <div class="mb-3">
      <label for="data" class="form-label">Data</label>
      <input type="datetime" name="data" id="data" class="form-control"
          placeholder="00/00/00 00:00" value="${value.scheduled}">
    </div>
    <div class="mb-3">
      <label for="lotacao" class="form-label">Lotação (número de ingressos disponiveis)</label>
      <input type="number" class="form-control" id="lotacao" aria-describedby="lotacao"
          value="${value.number_tickets}">
    </div>
    <button type="submit" class="btn btn-danger">salvar</button>`;

    formEditar.innerHTML = output;
  });

const editarEvento = async (evento) => {
  const opcoes = {
    method: "PUT",
    body: JSON.stringify(evento),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const resposta = await fetch(`${BASE_URL}/events`, opcoes);
  const conteudoResposta = await resposta.json();
  return conteudoResposta;
};

formEditar.onsubmit = async (evento) => {
  try {
    evento.preventDefault();

    const novoEvento = {
      name: nomeInput.value,
      poster: linkImgInput.value,
      attractions: atracoesInput.value.split(","),
      description: descricaoInput.value,
      scheduled: new Date(dataInput.value).toISOString(),
      number_tickets: lotacaoInput.value,
    };

    const conteudoResposta = await editarEvento(novoEvento);
    console.log(conteudoResposta);

    alert("Evento atualizado com sucesso!");
    window.location.pathname = "admin.html";
  } catch {
    console.log("error");
    alert("Erro ao atualizar evento!");
  }
};

const eventoAtualizado = async () => {
  const conteudoResposta = await listaEventos();

  (nomeInput.value = conteudoResposta.name),
    (linkImgInput.value = conteudoResposta.poster),
    (atracoesInput.value = conteudoResposta.attractions),
    (descricaoInput.value = conteudoResposta.description),
    (dataInput.value = scheduled.toLocaleString()),
    (lotacaoInput.value = conteudoResposta.number_tickets),
    eventoAtualizado();
};

// formEditar.onsubmit = async (evento) => {
//   evento.preventDefault();

//   const novoEvento = {
//     name: nomeInput.value,
//     poster: linkImgInput.value,
//     attractions: atracoesInput.value.split(","),
//     description: descricaoInput.value,
//     scheduled: new Date(dataInput.value).toISOString(),
//     number_tickets: lotacaoInput.value,
//   };

//   const opcoes = {
//     method: "PUT",
//     body: JSON.stringify(novoEvento),
//     headers: {
//       "content-type": "application/json",
//     },
//     redirect: "follow",
//   };

//   //montar o fetch
//   const resposta = await fetch(`${BASE_URL}/events/${nomeParam}`, opcoes);
//   const conteudoResposta = await resposta.json();
//   console.log(conteudoResposta);

//   alert("Evento atualizado com sucesso");
// };
