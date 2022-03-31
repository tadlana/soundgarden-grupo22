//lista de eventos admin.html
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listaReservas = document.querySelector(".table-body");
let outputReservas = "";
const urlParams = new URLSearchParams(window.location.search);
const nomeParam = urlParams.get("_id");

fetch(`${BASE_URL}/bookings/event/${nomeParam}`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    console.log(value);
    let i = 1;
    value.forEach((evento) => {
      outputReservas += `<tr>
        <th scope="row">${i++}</th>
        <td>${evento.owner_name}</td>
        <td>${evento.owner_email}</td>
        <td>${evento.number_tickets}</td>
        <td class ="botoes-admin">
          <a href="excluir-reserva.html?_id=${
            evento._id
          }" class="btn btn-danger">excluir</a>
        </td>
      </tr>`;
    });
    listaReservas.innerHTML = outputReservas;
  })
  .catch((error) => {
    console.log(error);
    alert("Não foi possível carregar dados da página.");
  });
