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


//Gjør klar sånn at heltene kan klikkes på og henter de fra HTML
document.querySelector('.healer').addEventListener('click', function{
  attackDragon(heroesArray[0];)
});
document.querySelector('.archer').addEventListener('click', function{
  attackDragon(heroesArray[1];)
});
document.querySelector('.warrior').addEventListener('click', function{
  attackDragon(heroesArray[2];)
});

//Lager funksjon som skal ha som oppgave at heltene angriper dragen
function attackDragon(hero){
  if(dragonObject.alive && hero.alive){
    dragonObject.currentHP -= hero.damage;
    alert(`${hero.name} har gjort ${hero.damage} skade på ${dragonObject.name}!`);
    updateCurrentHP(dragonObject);

    if(dragonObject.currentHP <= 0){
      dragonObject.alive = false;
      alert(`${dragonObject.name} er død!. Gratulerer du har vunnet spillet!`);
    } else {
      dragonAttacks();
    }
  }
}

//Funksjon som skal ha som oppgave at dragen angriper heltene


