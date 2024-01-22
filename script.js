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
