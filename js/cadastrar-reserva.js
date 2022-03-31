const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const ingressosInput = document.querySelector("#ingressos");
const formModal = document.querySelector("form");
const BASE_URL2 = "https://xp41-soundgarden-api.herokuapp.com";

function click2() {
  const formModal = document.querySelectorAll("form");
  formModal.forEach((form) => {
    form.onsubmit = async (evento) => {
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
            "Content-Type": "application/json",
          },
          redirect: "follow",
        };

        const resposta = await fetch(`${BASE_URL2}/bookings`, opcoes);
        const conteudoResposta = await resposta.json();
        console.log(conteudoResposta);

        if (resposta.status != 400) {
          alert("Ingresso reservado com sucesso");
          modalCadastrar.style.display = "none";
          nomeInput.value = "";
          emailInput.value = "";
          ingressosInput.value = "";
        }
        if (resposta.status == 400) {
          alert("Reserva negada. Preencha os campos corretamente.");
        }
      } catch (error) {
        console.log(error);
      }
    };
  });
}
