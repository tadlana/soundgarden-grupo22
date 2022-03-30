//MODAL
let botaoAbrirModal = document.querySelectorAll("#botao-reservar");
const modalCadastrar = document.querySelector(".modal-cadastrar");
const eventosDiv = document.querySelector("#div-eventos");
const botaoDiv = document.querySelector("#div-finalizar-reserva");

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

      let output2 = `<button class="finalizar-reserva" type="submit" event-id ="${e.target.getAttribute(
        "event-id"
      )}">
      finalizar reserva
    </button>`;

      eventosDiv.innerHTML = output;
      botaoDiv.innerHTML = output2;
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
