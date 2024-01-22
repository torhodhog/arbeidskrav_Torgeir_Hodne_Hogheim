 document.querySelector('.healer').addEventListener('click', function (){
   attackDragon(heroesArray[0]);
   console.log("Du klikket på Henriette")
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

 function attackDragon(hero) {
   if (dragonObject.alive && hero.alive) {
     dragonObject.currentHP -= hero.damage;
     console.log(`${hero.name} har gjort ${hero.damage} skade på ${dragonObject.name}!`);
     updateHealthBar(dragonObject);
 
     if (dragonObject.currentHP <= 0) {
       dragonObject.alive = false;
       dragonObject.currentHP = 0;
       updateHealthBar(dragonObject);
       alert(`Gratulerer! Du har beseiret dragen og vunnet spillet!`);
     } else {
       dragonAttacks(); // Kall dragenAttacks for motangrep
     }
   }
 }

 function updateHealthBar(){
   
 }
 

 function dragonAttacks(){
   if(dragonObject.alive){
      let livingHeroes = heroesArray.filter(hero => hero.alive);
      if (livingHeroes.length > 0) {
         let randomIndex = Math.floor(Math.random() * livingHeroes.length);
         let targetHero = livingHeroes[randomIndex];

         //Dragen angriper tilfeldig karakter
         console.log(`${dragonObject.name} har angrepet ${targetHero}`);
         updateHealthBar(targetHero);

         if(targetHero-currentHP <= 0){
            targetHero.alive = false;
            targetHero.currentHP = 0;
            updateHealthBar(targetHero);
            checkGameOver();
         }
      }
      if(!heroesArray.some(hero => hero.alive)){
         alert(`Spillet er tapt! ${dragonObject.name} har vunnet!`)
      }
   }
 }
