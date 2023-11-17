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

const iaEnemy = () => {
    const optionRandom = Math.floor(Math.random() * enemyOptionsList.length);
    const optionSelected = enemyOptionsList[optionRandom];
  
    clearOptions(enemyOptionsList);
  
    optionSelected.style.opacity = "1";
    optionSelected.setAttribute("data-selected", "true");
  
    return optionSelected.getAttribute("data-value");
  };
