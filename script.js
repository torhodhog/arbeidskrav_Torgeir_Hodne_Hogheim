 document.querySelector('.healer').addEventListener('click', function (){
   attackDragon(heroesArray[0]);
 })
 document.querySelector('.archer').addEventListener('click', function(){
   attackDragon(heroesArray[1]);
 })
 document.querySelector('.warrior').addEventListener('click', function(){
   attackDragon(heroesArray[2]);
 })
 
 //Stats for heroes
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
     name: "Ariana archer",
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

 //Henter inn navnene til tilleggsfunksjonalitet nr.1

 const healerNameElement = document.querySelector('#healer-name-txt');
healerNameElement.textContent = heroesArray[0].name;
const archerNameElement = document.querySelector('#archer-name-txt');
archerNameElement.textContent = heroesArray[1].name;
const warriorNameElement = document.querySelector('#warrior-name-txt');
warriorNameElement.textContent = heroesArray[2].name;
const dragonNameElement = document.querySelector('#dragon-name-txt');
dragonNameElement.textContent = dragonObject.name;


function attackDragon(hero) {
   if (dragonObject.alive && hero.alive) {
     dragonObject.currentHP -= hero.damage;
     alert(`${hero.name} har gjort ${hero.damage} skade på ${dragonObject.name}!`);
     updateHealthBar(dragonObject);

     if (dragonObject.currentHP <= 0) {
       dragonObject.alive = false;
       dragonObject.currentHP = 0;
       updateHealthBar(dragonObject);
       alert(`Gratulerer! Du har beseiret dragen og vunnet spillet!`);
     } else {
       dragonAttacks(hero); // Send karakteren som argument
     }
   }
}

 function updateHealthBar(character) {
   let healthBar;
   let healthText;
   let nameText;
   
   if (character === dragonObject) {
     healthBar = document.querySelector('.dragon-health');
     healthText = document.querySelector('.dragon-health-txt');
   } else if (character.id === 0) {
     healthBar = document.querySelector('.healer-health');
     healthText = document.querySelector('.healer-health-txt');
   } else if (character.id === 1) {
     healthBar = document.querySelector('.archer-health');
     healthText = document.querySelector('.archer-health-txt');
   } else if (character.id === 2) {
     healthBar = document.querySelector('.warrior-health');
     healthText = document.querySelector('.warrior-health-txt');
   }
   
   const healthPercentage = (character.currentHP / character.maxHP) * 100;
   healthBar.style.width = healthPercentage + '%';
 
   // Oppdaterer helse-teksten
   if (healthText) {
     healthText.textContent = `${character.currentHP} / ${character.maxHP} HP`;
   }
   
   // Oppdaterer navnet
   if (nameText) {
     nameText.textContent = character.name;
   }
 }
 
 
 
 

 function dragonAttacks() {
   if (dragonObject.alive) {
     const randomHero = heroesArray[Math.floor(Math.random() * heroesArray.length)];
     if (randomHero.alive) {
       randomHero.currentHP -= 200; // Dragen gjør alltid 200 skade
       alert(`${dragonObject.name} har gjort 200 skade på ${randomHero.name}!`);
       updateHealthBar(randomHero); // Oppdater helsefeltet for karakteren

       if (randomHero.currentHP <= 0) {
         randomHero.alive = false;
         randomHero.currentHP = 0;
         alert(`${randomHero.name} har blitt beseiret av dragen!`);
       }
     }
   }
   updateHealthBar(dragonObject); // Oppdater dragens helsefelt
}




 
 

 function checkGameOver() {
   if (heroesArray.every(hero => !hero.alive) && dragonObject.currentHP > 0) {
     // Spillet er tapt
     alert(`Spillet er tapt! ${dragonObject.name} har vunnet!`);
   }
 }
