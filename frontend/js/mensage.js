// let mensageday = document.getElementById("daymensage");

// let hours = new Date().getHours();

// let exibir = mensageday
// const men =()=>{
// if(hours>=5 && hours<12){
//     exibir.innerText = "Bom dia"
// }else if(hours>=12 && hours<=18){
//     exibir.innerText = "Boa tarde"
// }else{
//     exibir.innerText = "Boa noite"
// }
// };
// men();

let day = document.getElementById("day");
const data = new Date();

// 2. Pega os componentes da data
const dia = String(data.getDate()).padStart(2, "0"); // Adiciona '0' à esquerda se for um dígito (ex: 5 vira 05)
const mes = String(data.getMonth() + 1).padStart(2, "0"); // +1 porque o mês começa em 0 (Janeiro)
const ano = data.getFullYear(); // Pega o ano completo

// 3. Formata a data
day.innerText = `${dia}/${mes}/${ano}`;
