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

function updateCharacterDisplay() {
  heroesArray.forEach(hero => {
    // Oppdaterer navn og helse for hver helt
    document.getElementById(`${hero.name.split(" ")[0].toLowerCase()}-name-txt`).textContent = hero.name;
    document.getElementById(`${hero.name.split(" ")[0].toLowerCase()}-health-txt`).textContent = `${hero.currentHP} / ${hero.maxHP} HP`;
    
    // Skjuler helten hvis de er døde
    if (!hero.alive) {
      document.querySelector(`.${hero.name.split(" ")[0].toLowerCase()}`).style.display = 'none';
    }
  });

  document.getElementById('dragon-name-txt').textContent = dragonObject.name;
  document.getElementById('dragon-health-txt').textContent = `${dragonObject.currentHP} / ${dragonObject.maxHP} HP`;
}

function heroAttack(heroId) {
  let hero = heroesArray.find(h => h.id === heroId);
  dragonObject.currentHP -= hero.damage;
  alert(`${hero.name} har gjort ${hero.damage} skade på ${dragonObject.name}!`);

  if (dragonObject.currentHP <= 0) {
    dragonObject.alive = false;
    alert("Spillet er vunnet!");
  } else {
    dragonAttack();
  }

}

function dragonAttack() {
  let aliveHeroes = heroesArray.filter(hero => hero.alive);
  if (aliveHeroes.length === 0) {
    alert("Spillet er tapt!");
    return;
  }

  let randomHero = aliveHeroes[Math.floor(Math.random() * aliveHeroes.length)];
  randomHero.currentHP -= dragonObject.damage;
  if (randomHero.currentHP <= 0) {
    randomHero.alive = false;
    alert(`${randomHero.name} er død!`);
  } else {
    alert(`${dragonObject.name} har angrepet ${randomHero.name}!`);
  }
}

// Legger til event listeners for heltebilder
document.querySelectorAll('.hero').forEach((element, index) => {
  element.addEventListener('click', () => heroAttack(index));
});

