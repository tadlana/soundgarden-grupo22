//lista de eventos admin.html
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listaEventos = document.querySelector(".table-body");
let output = "";

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
          <a href="reservas.html" class="btn btn-dark" id="${
            evento._id
          }"> ver reservas</a>
          <a href="editar-evento.html?_id=${
            evento._id
          }" class="btn btn-secondary" id="${evento._id}">editar</a>
          <a href="excluir-evento.html?_id=${
            evento._id
          }" class="btn btn-danger" id="${evento._id}">excluir</a>
        </td>
      </tr>`;
    });
    listaEventos.innerHTML = output;
    console.log(value);
  });
