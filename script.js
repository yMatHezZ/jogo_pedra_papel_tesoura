const playerOptionsList = document.querySelectorAll(".jogador .option");

playerOptionsList.forEach((opcao)=>{
    opcao.onclick = ()=> {
        Opcao.style.opacity = "1"
        opcao.setAttribute("data-selectd", true)
    }
}


)
