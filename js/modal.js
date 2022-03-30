//MODAL
let botaoAbrirModal = document.querySelectorAll("#botao-reservar");
const modalCadastrar = document.querySelector(".modal-cadastrar");
const eventosDiv = document.querySelector("#div-eventos");

function click() {
  botaoAbrirModal = document.querySelectorAll("#botao-reservar");
  botaoAbrirModal.forEach((botao) => {
    botao.addEventListener("mousedown", (e) => {
      modalCadastrar.style.display = "block";
      let output = `<label for="eventos">Evento</label>
      <input
        type="text"
        id="eventos"
        aria-describedby="eventos"
        value= "${e.target.getAttribute("event-name")}"
        disabled
      />`;
      eventosDiv.innerHTML = output;
    });
  });
}

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("mousedown", (e) => {
  modalCadastrar.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modalCadastrar.style.display = "none";
  }
});
