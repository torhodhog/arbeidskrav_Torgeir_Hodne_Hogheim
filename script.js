// Fikser event listeners syntaks
document.querySelector('.healer').addEventListener('click', function() {
  attackDragon(heroesArray[0]);
});
document.querySelector('.archer').addEventListener('click', function() {
  attackDragon(heroesArray[1]);
});
document.querySelector('.warrior').addEventListener('click', function() {
  attackDragon(heroesArray[2]);
});


let heroesArray = [
  {
    id: 0,
    name: "Henriette Healer",
    maxHP: 400,
    currentHP: 400,
    damage: 100,
    alive: true,
  },
  {
    id: 1,
    name: "Ariana Archer",
    maxHP: 500,
    currentHP: 500,
    damage: 400,
    alive: true,
  },
  {
    id: 2,
    name: "Wyona Warrior",
    maxHP: 600,
    currentHP: 600,
    damage: 400,
    alive: true,
  },
];

let dragonObject = {
  name: "Daar Dragon",
  maxHP: 2000,
  currentHP: 2000,
  damage: 200,
  alive: true,
};


// Definerer variabler for hver helts helsestatus-element
const healerHealthText = document.getElementById('healer-health-txt');
const archerHealthText = document.getElementById('archer-health-txt');
const warriorHealthText = document.getElementById('warrior-health-txt');

// Variabel for dragens helsestatus-element
const dragonHealthText = document.getElementById('dragon-health-txt');

function updateCurrentHP(character) {
  let healthTextElement;
  
  if (character === dragonObject) {
    healthTextElement = dragonHealthText;
  } else {
    switch (character.id) {
      case 0:
        healthTextElement = healerHealthText;
        break;
      case 1:
        healthTextElement = archerHealthText;
        break;
      case 2:
        healthTextElement = warriorHealthText;
        break;
    }
  }

  if (healthTextElement) {
    healthTextElement.textContent = `${character.currentHP} / ${character.maxHP} HP`;
  }
} 


function attackDragon(hero) {
  if (dragonObject.alive && hero.alive) {
    dragonObject.currentHP = Math.max(0, dragonObject.currentHP - hero.damage);
    alert(`${hero.name} har gjort ${hero.damage} skade på ${dragonObject.name}!`);
    updateCurrentHP(dragonObject);
    dragonAttacks()

    if (dragonObject.currentHP <= 0) {
      dragonObject.alive = false;
      alert(`${dragonObject.name} er død! Gratulerer, du har vunnet spillet!`);
    }
  }
}

