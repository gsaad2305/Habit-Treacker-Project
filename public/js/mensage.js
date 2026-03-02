
let day = document.getElementById("day");
const data = new Date();

// 2. Pega os componentes da data
const dia = String(data.getDate()).padStart(2, "0"); 
const mes = String(data.getMonth() + 1).padStart(2, "0"); 
const ano = data.getFullYear(); 

// 3. Formata a data
day.innerText = `${dia}/${mes}/${ano}`;
