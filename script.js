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


// Oppdaterer karakterenes navn og HP, hentet fra arrayet
function updateCharacterDisplay() {
  heroesArray.forEach(hero => {
    const heroClass = hero.name.split(" ")[1].toLowerCase(); // heroClass blir f.eks. "healer" eller "archer" eller "warrior" basert på navnet til helten.
    document.getElementById(`${heroClass}-name-txt`).textContent = hero.name; // navnet på helten blir oppdatert
    document.getElementById(`${heroClass}-health-txt`).textContent = `${hero.currentHP} / ${hero.maxHP} HP`; // HP på helten blir oppdatert

    if (!hero.alive) {
      document.querySelector(`.${heroClass}`).style.display = 'none'; //Denne tok lang tid å finne ut av. Her fjernes helten fra skjermen når den dør.
    }
  });

  // Oppdaterer dragens navn og HP, hentet fra objektet
  document.getElementById('dragon-name-txt').textContent = dragonObject.name; // navnet på dragen blir oppdatert. Dette skjer fordi det er en id i HTML.
  let dragonHealthElements = document.getElementsByClassName('dragon-health-txt'); //Antok at dette var Id i HTML og måtte grave enormt dypt for å finne ut av dette.
  if (dragonHealthElements.length > 0) {
    dragonHealthElements[0].textContent = `${dragonObject.currentHP} / ${dragonObject.maxHP} HP`; // Oppdarerer i forhold til første element som matcher klassenavnet "Dragon-health-txt"
  }

  if (!dragonObject.alive) {
    document.querySelector('.dragon-container').style.display = 'none';// fjerner om daragon er død
    alert("Spillet er vunnet!");
  }
}


//Funksjonen hvor helten angriper dragen
function heroAttack(heroId) {
  let hero = heroesArray.find(h => h.id === heroId);
  dragonObject.currentHP -= hero.damage; //Knotet lenge med kun - her.

  if (dragonObject.currentHP <= 0) { //hvis dragen dør så skal den ikke kunne angripe igjen og spillet er vunnet.
    dragonObject.currentHP = 0;
    dragonObject.alive = false;
    updateCharacterDisplay();
    return;
  }

  alert(`${hero.name} har gjort ${hero.damage} skade på ${dragonObject.name}!`);
  dragonAttack();
  updateCharacterDisplay();
}

//Funksjonen hvor dragen angriper helten
function dragonAttack() {
  let aliveHeroes = heroesArray.filter(hero => hero.alive);
  if (aliveHeroes.length === 0) {
    alert("Spillet er tapt!");
    return;
  }

  let randomHero = aliveHeroes[Math.floor(Math.random() * aliveHeroes.length)];
  randomHero.currentHP -= dragonObject.damage;

  if (randomHero.currentHP <= 0) {
    randomHero.currentHP = 0;
    randomHero.alive = false;
    updateCharacterDisplay();
    alert(`${randomHero.name} er død!`);
    return;
  }

  alert(`${dragonObject.name} har angrepet ${randomHero.name} og gjort ${dragonObject.damage} skade!`);
  updateCharacterDisplay();
}

// Legger til event listeners for heltebilder
document.querySelectorAll('.hero').forEach((element, index) => {
  element.addEventListener('click', () => heroAttack(index)); // Kun heltene skal klikkes på, så her la jeg eventlistener på klassen hero.
});

// Oppdatering av karakterenes navn og HP
updateCharacterDisplay();