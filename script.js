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

// Oppdaterer navn og HP for hver helt
heroesArray.forEach(hero => {
  document.getElementById(`${hero.name.toLowerCase().split(' ')[1]}-name-txt`).textContent = hero.name;
  document.getElementById(`${hero.name.toLowerCase().split(' ')[1]}-health-txt`).textContent = `${hero.currentHP} / ${hero.maxHP} HP`;
});

// Oppdaterer navn og HP for dragen
document.getElementById('dragon-name-txt').textContent = dragonObject.name;
document.getElementById('dragon-health-txt').textContent = `${dragonObject.currentHP} / ${dragonObject.maxHP} HP`;

function attackDragon(hero){
  dragonObject.currentHP -= hero.damage;
  if(dragonObject.currentHP <= 0){
    dragonObject.alive = false;
  } else {
    alert(`${hero.name} attacked ${dragonObject.name} for ${hero.damage} damage!`);
  } dragonAttack(hero);
}