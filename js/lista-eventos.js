//lista de eventos admin.html
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const listaAdmin = document.querySelector(".table-body");
let outputAdmin = "";
const carregando = document.querySelector(".carregando");

const formatarData = (data) => {
  const data2 = data.split("");

  const dataFormatada =
    data2.slice(8, 10).join("") +
    "/" +
    data2.slice(5, 7).join("") +
    "/" +
    data2.slice(0, 4).join("");

  return dataFormatada;
};

fetch(`${BASE_URL}/events`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    let i = 1;
    value.forEach((evento) => {
      outputAdmin += `<tr>
        <th scope="row">${i++}</th>
        <td>${formatarData(evento.scheduled)}</td>
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
    loading.style.display = "none";
  })
  .catch((error) => {
    console.log(error);
    alert("Não foi possível carregar dados da página.");
  });
