//LISTA DE EVENTOS EXISTENTES

// const listaEventos = [
//   {
//     id: 1,
//     nome: "Festival Coala",
//     poster: "#",
//     atracoes: ["Miley Cyrus", "Liniker", "Smashing Pumpkins"],
//     descricao:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique, dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus nobis in inventore tenetur asperiores.",
//     data: "05/03/2022 20:00",
//     locacao: 100,
//   },
//   {
//     id: 2,
//     nome: "Indie Fest",
//     poster: "#",
//     atracoes: ["Arctic Monkeys", "The Kooks", "Hiatus Kaiyote"],
//     descricao:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique, dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus nobis in inventore tenetur asperiores.",
//     data: "05/03/2022 20:00",
//     locacao: 100,
//   },
//   {
//     id: 3,
//     nome: "Bourbon Jazz Festival",
//     poster: "#",
//     atracoes: ["Esperanza Spalding", "Zimbo Trio", "Serial Funkers"],
//     descricao:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aperiam sunt quo similique, dolorum consectetur inventore ipsam, officiis neque natus eius harum alias quidem. Possimus nobis in inventore tenetur asperiores.",
//     data: "05/03/2022 20:00",
//     locacao: 100,
//   },
// ];

const nomeInput = document.querySelector("#nome");
const atracoesInput = document.querySelector("#atracoes");
const descricaoInput = document.querySelector("#descricao");
const dataInput = document.querySelector("#data");
const lotacaoInput = document.querySelector("#lotacao");
const linkImgInput = document.querySelector("#poster");
const form = document.querySelector("form");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com";

form.onsubmit = async (evento) => {
  evento.preventDefault();

  const novoEvento = {
    name: nomeInput.value,
    poster: linkImgInput.value,
    attractions: atracoesInput.value.split(","),
    description: descricaoInput.value,
    scheduled: new Date(dataInput.value).toISOString(),
    number_tickets: lotacaoInput.value,
  };

  //TENTANDO CORRIGIR BUG DATA/HORA

  // const dataHora = inDate.value;

  // const [dia, mes, ano] = dataHora.split("/");

  // let dataConvertida = [mes, dia, ano].join("/");

  const opcoes = {
    method: "POST",
    body: JSON.stringify(novoEvento),
    headers: {
      "content-type": "application/json",
    },
    redirect: "follow",
  };

  //montar o fetch
  const resposta = await fetch(`${BASE_URL}/events`, opcoes);
  const conteudoResposta = await resposta.json();
  console.log(conteudoResposta);

  alert("Evento cadastrado");
};
