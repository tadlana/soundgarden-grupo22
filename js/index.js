const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listaEventos = document.querySelector("#todos-eventos");
let outputEventos = "";

fetch(`${BASE_URL}/events`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    for (let i = 0; i < 3; i++) {
      outputEventos += `<article class="evento card p-5 m-3 card-evento">
      <h2>${value[i].name} - ${value[i].scheduled}</h2>
      <h4>${value[i].attractions}</h4>
      <p>
      ${value[i].description}
      </p>
      <a href="#" id="botao-reservar" class="btn btn-primary" event-name="${value[i].name}">reservar ingresso</a>
    </article>`;

      listaEventos.innerHTML = outputEventos;
      click();
    }
  })
  .catch((error) => {
    console.log(error);
    alert("Não foi possível carregar dados da página.");
  });
