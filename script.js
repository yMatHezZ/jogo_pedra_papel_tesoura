const playerOptionsList = document.querySelectorAll(".jogador .option");
const enemyOptionsList = document.querySelectorAll(".enemy .option");

playerOptionsList.forEach((option) => {
    option.onclick = () => {
      clearOptions(playerOptionsList);
  
      option.style.opacity = "1";
      option.setAttribute("data-selected", true);
  
      iaEnemy();
  
      const movePlayer = option.getAttribute("data-value");
      const moveEnemy = iaEnemy();
      result(movePlayer, moveEnemy);
  };
});
