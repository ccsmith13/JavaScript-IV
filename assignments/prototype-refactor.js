/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(character){
        this.createdAt = character.createdAt;
        this.name = character.name;
        this.dimensions = character.dimensions;
    }

    destroy(){
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(character) {
        super(character);
        this.healthPoints = character.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats {
    constructor(character) {
        super(character);
        this.team = character.team;
        this.weapons = character.weapons;
        this.language = character.language;
    }
    greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
    }
}
  
  //STRECTH GOALS 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function. DONE 
  // * Give the Hero and Villains different methods that could be used to remove health points from objects 
  // which could result in destruction if health gets to 0 or drops below 0; DONE
  // * Create two new objects, one a villain and one a hero and fight it out with methods! DONE (console logs)

  class Villain extends Humanoid {
      constructor(character) {
          super(character);
          this.damage = character.damage;
      }

      poison(human){
        if(human.healthPoints > this.damage){
            human.healthPoints -= this.damage;
            return `${human.name} was poisoned by ${this.name}! HP is now ${human.healthPoints} .`;
            }
        else{
            human.healthPoints -= this.damage;
            return `${human.name} was poisoned by ${this.name}! HP is now ${human.healthPoints} .` + human.destroy();
            }
        }
  }
  
 class Hero extends Humanoid {
     constructor(heroattrs) {
         super(heroattrs);
     }

     heal(human) {
        if(human.healthPoints == 100){
            return `${human.name} has full health. Healing spell performed by ${this.name} was uneffective.`
          }
          else{
            human.healthPoints = 100;
            return `${human.name} has been healed by ${this.name}! They are back to full health (100HP).`
          }
     }
 } 
  
  //TEST CASES
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const tick = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 10,
        height: 2,
      },
      healthPoints: 100,
      name: 'Evil Tick',
      team: 'Wooded Lands',
      weapons: [
        'Disease Injection'
      ],
      language: 'Buglish',
      damage: 10
    });
  
    const angel = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 50,
        width: 10,
        height: 100,
      },
      healthPoints: 100,
      name: 'Venus the Angel',
      team: 'Heavenly Skies',
      weapons: [
        'Holy Book',
        'Spinning Halo',
        'Bliding Wand'
      ],
      language: 'Greek',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    //STRETCH TESTS 
  console.log(tick.poison(archer)); //Lilith is poisoned by tick, loses 10 HP and is removed from the game.
  console.log(angel.heal(swordsman)); //The swordsman is revived by an angel.
  
  