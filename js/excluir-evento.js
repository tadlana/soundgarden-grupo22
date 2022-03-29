//pagina excluir

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const formExcluir = document.querySelector("form");
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
          disabled>
    </div>
    <div class="mb-3">
      <label for="banner" class="form-label">Banner</label>
      <input type="text" class="form-control" id="banner" aria-describedby="banner"
          value="${value.poster}" disabled>
      <small>adicione o link da imagem</small>
    </div>
    <div class="mb-3">
      <label for="atracoes" class="form-label">Atrações</label>
      <input type="text" class="form-control" id="atracoes" aria-describedby="atracoes"
          value="${value.attractions}" disabled>
      <small>insira o nome dos artistas separados por vírgula</small>
    </div>
    <div class="mb-3">
      <label for="descricao" class="form-label">Descrição</label>
      <textarea name="descricao" id="descricao" class="form-control" rows="5" disabled>${value.description}
      </textarea>
    </div>
    <div class="mb-3">
      <label for="data" class="form-label">Data</label>
      <input type="datetime" name="data" id="data" class="form-control"
          placeholder="00/00/00 00:00" value="${value.scheduled}" disabled>
    </div>
    <div class="mb-3">
      <label for="lotacao" class="form-label">Lotação (número de ingressos disponiveis)</label>
      <input type="number" class="form-control" id="lotacao" aria-describedby="lotacao"
          value="${value.number_tickets}" disabled>
    </div>
    <button type="submit" class="btn btn-danger">excluir pra sempre</button>`;

    formExcluir.innerHTML = output;
  })
  .catch((error) => {
    console.log(error);
    alert("Não foi possível carregar dados da página.");
  });

formExcluir.onsubmit = async (evento) => {
  evento.preventDefault();
  try {
    const opcoes = {
      method: "DELETE",
      redirect: "follow",
    };

    const resposta = await fetch(`${BASE_URL}/events/${nomeParam}`, opcoes);

    alert("Evento excluído com sucesso");
    window.location.replace("./admin.html");
  } catch (error) {
    console.log(error);
    alert("Não foi possível deletar evento.");
  }
};
