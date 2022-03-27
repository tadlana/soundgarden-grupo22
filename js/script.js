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
