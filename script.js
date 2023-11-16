const playerOptionsList = document.querySelectorAll(".jogador .option");

playerOptionsList.forEach((opcao)=>{
    opcao.onclick = ()=> {
        console.log(opcao.getAttribute("data-value"));

        Opcao.style.opacity = "1"
    }
}


)
