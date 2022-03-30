//AINDA SEM PEGAR
const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const ingressosInput = document.querySelector("#ingressos");
const botaoReservar = document.querySelector(".finalizar-reserva");

const BASE_URL2 = "https://xp41-soundgarden-api.herokuapp.com";

botaoReservar.onClick = async (evento) => {
  evento.preventDefault();
  try {
    const novoEvento = {
      owner_name: nomeInput.value,
      owner_email: emailInput.value,
      number_tickets: ingressosInput.value,
      event_id: evento.target.getAttribute("event-id"),
    };

    const opcoes = {
      method: "POST",
      body: JSON.stringify(novoEvento),
      headers: {
        "content-type": "application/json",
      },
      redirect: "follow",
    };

    const resposta = await fetch(`${BASE_URL2}/bookings`, opcoes);
    const conteudoResposta = await resposta.json();
    console.log(conteudoResposta);

    alert("Ingresso reservado com sucesso");
  } catch (error) {
    console.log(error);
    alert("Reserva negada. Preencha os campos corretamente.");
  }
};
