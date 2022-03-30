const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const ingressosInput = document.querySelector("#ingressos");
const botaoReservar = document.querySelector(".finalizar-reserva");

const BASE_URL2 = "https://xp41-soundgarden-api.herokuapp.com";

function click2() {
  const botaoReservar = document.querySelectorAll(".finalizar-reserva");
  botaoReservar.forEach((botao) => {
    botao.addEventListener("mousedown", async (evento) => {
      const novoEvento = {
        owner_name: nomeInput.value,
        owner_email: emailInput.value,
        number_tickets: ingressosInput.value,
        event_id: evento.target.getAttribute("event-id"),
      };
      console.log(novoEvento);

      const opcoes = {
        method: "POST",
        body: JSON.stringify(novoEvento),
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };

      const resposta = await fetch(`${BASE_URL2}/bookings`, opcoes);
      const conteudoResposta = await resposta.json();
      console.log(conteudoResposta);

      alert("Ingresso reservado com sucesso");
    });
  });
}