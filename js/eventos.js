const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listaEventos = document.querySelector("#todos-eventos");
let outputEventos = "";

fetch(`${BASE_URL}/events`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    value.forEach((evento) => {
      outputEventos += `<article class="evento card p-5 m-3 card-evento">
      <h2>${evento.name} - ${evento.scheduled}</h2>
      <h4>${evento.attractions}</h4>
      <p>
      ${evento.description}
      </p>
      <a href="#" id="botao-reservar" class="btn btn-primary" event-name="${evento.name}" event-id="${evento._id}">reservar ingresso</a>
    </article>`;
    });
    listaEventos.innerHTML = outputEventos;
    click();
  })
  .catch((error) => {
    console.log(error);
    alert("Não foi possível carregar dados da página.");
  });
