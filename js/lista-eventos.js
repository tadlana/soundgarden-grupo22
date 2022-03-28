//lista de eventos admin.html
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listaEventos = document.querySelector(".table-body");
const eventosSection = document.querySelector("#eventos");
let output = "";
let output2 = "";

fetch(`${BASE_URL}/events`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    let i = 1;
    value.forEach((evento) => {
      output += `<tr>
        <th scope="row">${i++}</th>
        <td>${evento.scheduled}</td>
        <td>${evento.name}</td>
        <td>${evento.attractions}</td>
        <td class ="botoes-admin">
          <a href="reservas.html" class="btn btn-dark">ver reservas</a>
          <a href="editar.html" class="btn btn-secondary">editar</a>
          <a href="editar.html" class="btn btn-danger">excluir</a>
        </td>
      </tr>`;
    });
    listaEventos.innerHTML = output;
  });
