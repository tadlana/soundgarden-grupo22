//MODAL

const botaoAbrirModal = document.querySelectorAll(".btn-primary");
const modalCadastrar = document.querySelector(".modal-cadastrar");

botaoAbrirModal.forEach((botao) => {
  botao.addEventListener("mousedown", (e) => {
    modalCadastrar.style.display = "block";
  });
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("mousedown", (e) => {
  modalCadastrar.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modalCadastrar.style.display = "none";
  }
});

//adicionando eventos da api ao iput select do modal
const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";
const eventosSection = document.querySelector("#eventos");
let output2 = "";

fetch(`${BASE_URL}/events`)
  .then((value) => {
    return value.json();
  })
  .then((value) => {
    value.forEach((evento) => {
      output2 += `<option value = "${evento.attractions}">
      ${evento.attractions}
      </option>`;
    });
    eventosSection.innerHTML += output2;
  });
