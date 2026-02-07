document.addEventListener("DOMContentLoaded", ()=>{
const form = document.querySelector("form");
const nomein = document.getElementById("name");
const emailin = document.getElementById("email");

 let enviamento = false;
 
    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        const nome = nomein.value.trim();
        const email = emailin.value.trim();
        

         if(enviamento){
            alert("Os dados foram enviados.");
            return;
        }

        if(nome ===""){
            alert("Digite seu nome");
            return
        }

        if(email ===""){
            alert("Digite seu email");
            return
        }

        sessionStorage.setItem("nome", nome);
        sessionStorage.setItem("email", email);

        enviamento= true;
        setTimeout(()=>{
        window.location.href = "frontend/index.html"
        }, 3000);

    })
})