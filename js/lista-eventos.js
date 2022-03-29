//lista de eventos admin.html
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listaAdmin = document.querySelector(".table-body");
const listaEventos = document.querySelector("#todos-eventos");
let outputAdmin = "";
let outputEventos = "";

fetch(`${BASE_URL}/events`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    let i = 1;
    value.forEach((evento) => {
      outputAdmin += `<tr>
        <th scope="row">${i++}</th>
        <td>${evento.scheduled}</td>
        <td>${evento.name}</td>
        <td>${evento.attractions}</td>
        <td class ="botoes-admin">
          <a href="reservas.html?_id=${
            evento._id
          }" class="btn btn-dark"> ver reservas</a>
          <a href="editar-evento.html?_id=${
            evento._id
          }" class="btn btn-secondary" >editar</a>
          <a href="excluir-evento.html?_id=${
            evento._id
          }" class="btn btn-danger">excluir</a>
        </td>
      </tr>`;
    });
    listaAdmin.innerHTML = outputAdmin;
  })
  .catch((error) => {
    console.log(error);
    alert("Não foi possível carregar dados da página.");
  });
