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
      <input type="text" class="form-control" id="nome" aria-describedby="nome" value="${value.name}"
          >
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
      <textarea name="descricao" id="descricao" class="form-control" rows="5">${value.description}
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
    <button type="submit" class="btn btn-danger">Enviar</button>`;

    formEditar.innerHTML = output;
  })
  .catch((error) => {
    console.log(error);
    alert("Não foi possível carregar dados da página.");
  });

  const conteudoResposta = async () => {
    const opcoes = {
        method: "GET",
        redirect: "follow"
        };
    

    const conteudoResposta = await fetch(`${BASE_URL}/events/${nomeParam}`, opcoes)
    const resposta = await conteudoResposta.json()
    const {name, poster, description, scheduled, number_tickets} = resposta
    const newDate = new Date(scheduled)
    // const dataFormatada = ${newDate.getFullYear()}-${formatNumber(newDate.getMonth())}-${newDate.getDate()}T${formatNumber(newDate.getHours())}:${formatNumber(newDate.getMinutes())}

    console.log(newDate)
    nomeInput.value = name
    linkImgInput.value = poster
    atracoesInput.value = attractions
    descricaoInput.value = description
    dataInput.value = scheduled
    lotacaoInput.value = number_tickets
    const formatNumber = (numero) => {
      if ( numero < 10 ) {
          return "0"+numero
      }
      return numero
  }
  


  formEditar.onsubmit = async event => {
    event.preventDefault();

  try {
      const editarEvento = {
          name: nomeEditar.value,
          poster: bannerEditar.value,
          attractions: atracoesEditar.value.split(', '),
          description: descricaoEditar.value,
          scheduled: dataEditar.value,
          number_tickets: ticketsEditar.value,
      };      

      const opcoes = {
          method: "PUT",
          body: JSON.stringify(editarEvento),
          headers: {
              "Content-Type": "application/json",
          },
      };

      const resposta = await fetch(`${BASE_URL}/events/${nomeParam}` , opcoes)
      const conteudoResposta = await resposta.json()
      alert("Evento atualizado com sucesso!")

  } catch (error) {
      console.log(error);
      alert('Deu ruim');
  }
}

  const eventoAtualizado = async () => {
  const conteudoResposta = await novoEvento();

    (nomeInput.value = conteudoResposta.name),
    (linkImgInput.value = conteudoResposta.poster),
    (atracoesInput.value = conteudoResposta.attractions),
    (descricaoInput.value = conteudoResposta.description),
    (dataInput.value = scheduled.toLocaleString()),
    (lotacaoInput.value = conteudoResposta.number_tickets),
    eventoAtualizado();
}
  }
