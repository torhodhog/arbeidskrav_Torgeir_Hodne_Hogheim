 //Denne JS-koden er laget klar for deg. Den trenger du ikke endre på.

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

       //Spillfunksjoner 
       function heroAttacks(){
         if(heroAttacks.alive && dragonObject.alive){
            dragonObject.currentHP -= hero.damage;
            updateHelthBar(dragonObject);
            checkDragonHelth();
            dragonAttacks();
         }
       } 



       
       function updateHelthBar(character){
         //Oppdaterer helsen til karakteren
       }
         //Funksjon for hvis dragen dør.
       function checkDragonHelth(){
         if(dragonObject.currentHP <= 0){
            dragonObject.alive = false;
         }
       }

       //Dragens motangrep
       function dragonAttacks(){
         let livingHeroes = heroesArray.filter(hero => hero.alive);
         if(livingHeroes.length > 0){
            let randomIndex = Math.floor(Math.random() * livingHeroes.length);
            let targetHero = livingHeroes[randomIndex];
            targetHero.currentHP -= dragonObject.damage;
            updateHelthBar(targetHero);
            checkHeroHelth(targetHero);
         }
       }

       function checkHeroHelth(hero){
         if(hero.currentHP <= 0){
            hero.alive = false;
            heroDies(hero);
            checkGameOver();
         }
       }

       function checkGameOver(){
         if(heroesArray.every(hero => !hero.alive)){
            alert("Spillet er over, dragen vant!")
         }
       }