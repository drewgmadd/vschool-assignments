var ask = require('readline-sync');

const charName = ask.question('What is your name? ')
var character = {
  name: charName,
  hp: 100,
  monstersDefeated: 0,
  hasSword: true,
  hasKey: false,
  hasArmor: false,
  hasSpear: false,
  isGameOver: false,
  weapons: ["knife"],
  isAlive: true
}

class MonsterCreator {
  constructor(hp, name, type, weapon, ability) {
    this.hp = hp;
    this.name = name;
    this.type = type;
    this.weapon = weapon;
    this.ability = ability
  }
}

const names = ["Mongoose", "Snake", "Wolf", "Eagle", "Pupper"];
const types = ["type1", "type2", "type3", "type4", "type5"];
const weapons = ["knife", "Bow Staff!", "Sword!!", "Spear!!", "MAGIC!!!"];
const abilities = ["ability1", "ability2", "ability3", "ability4", "ability5"];
function randomAttribute() {
  return Math.floor(Math.random() * 5);
}

function newName(){
   let randomName = names[Math.floor(Math.random() * 5)];
   return randomName;
}
let newWeapon = weapons[randomAttribute()];
let newAbility = abilities[randomAttribute()];
function randomHp(){
  let randHp = Math.ceil(Math.random() * 100);
  return randHp;
}

let newMonster = new MonsterCreator(randomHp(), newName(), null, newWeapon, newAbility);

const enemyWeapons = ["Slap!", "Bow Staff!", "Sword!!", "Spear!!", "MAGIC!!!"]

const slap = () => {
  console.log(`${newMonster.name} has slapped you!`);
  character.hp = character.hp - Math.floor(Math.random() * 10);
  console.log(`You lost up to 10hp.\n${character.name}: ${character.hp}HP`);
}
const bowStaff = () => {
  console.log(`${newMonster.name} has hit you in the shin with a bow staff! -20hp`);
  character.hp = character.hp - Math.floor(Math.random() *20);
}
const sword = () => {
  console.log("You have been pierced with a sword! - 35hp");
  character.hp = character.hp - Math.floor(Math.random() * 35);
}
const spear = () => {
  console.log(`${newMonster.name} has attacked you with a spear`);
  character.hp = character.hp - Math.floor(Math.random() * 50);
}
const enemyAttack = () => {
  let randomWeapon = enemyWeapons[randomAttribute()]
  console.log(randomWeapon);
  if (randomWeapon === "Slap!") {
    console.log(`${newMonster.name} has slapped you!`);
    slap();
    playerAttack();
  } else if (randomWeapon === "Bow Staff!") {
    console.log(`${newMonster.name} jacked you with a Bow Staff!`);
    bowStaff();
    playerAttack();
  } else if (randomWeapon === "Sword!!") {
    console.log(`${newMonster.name} has peirced you with a Sword!`);
    sword();
    playerAttack();
  } else if (randomWeapon === "Spear!!") {
    console.log(`${newMonster.name} has peirced you with a Spear`);
    spear();
    playerAttack();
  }
  if (character.hp <= 0) {
    console.log("You have been defeated!");
    newMonster = new MonsterCreator(randomHp(), newName(), null, newWeapon, newAbility);
  }
  playerAttack();
}

function knifeAttack() {
  newMonster.hp = newMonster.hp - Math.floor(Math.random() * 25);
  if (newMonster.hp <= 0) {
    console.log(`You have defeated ${newMonster.name}!`);
    newMonster = new MonsterCreator(randomHp(), newName(), null, newWeapon, newAbility);
    character.monstersDefeated++;
    character.monstersDefeated >= 3 ? bossFight(): walk();
  } else {
    battleStats();
    enemyAttack();
  }
}

function spearAttack() {
  newMonster.hp = newMonster.hp - Math.floor(Math.random() * 50);
  if (newMonster.hp <= 0) {
    console.log(newMonster);
    console.log("You have defeated the monster!");
    character.monstersDefeated++;
    character.monstersDefeated > 3 ? bossFight(): walk();
  } else {
    battleStats();
    enemyAttack();
  }
}

function bowStaffAttack() {
  newMonster.hp = newMonster.hp - Math.floor(Math.random() * 75);
  if (newMonster.hp <= 0) {
    console.log(newMonster);
    console.log("You have defeated the monster!");
    character.monstersDefeated++;
    character.monstersDefeated > 3 ? bossFight(): walk();
  } else {
    battleStats();
    enemyAttack();
  }
}

function swordAttack() {
  newMonster.hp = newMonster.hp - Math.floor(Math.random() * 60);
  if (newMonster.hp <= 0) {
    console.log(newMonster);
    console.log("You have defeated the monster!");
    character.monstersDefeated++;
    character.monstersDefeated > 3 ? bossFight(): walk();
  } else {
    battleStats();
    enemyAttack();
  }
}

function magicAttack() {
  newMonster.hp = newMonster.hp - Math.floor(Math.random() * 130);
  if (newMonster.hp <= 0) {
    console.log(newMonster);
    console.log("You have defeated the monster!");
    character.monstersDefeated++;
    character.monstersDefeated > 3 ? bossFight(): walk();
  } else {
    battleStats();
    enemyAttack();
  }
}

const battleStats = () => {
  console.log(`${newMonster.name}: \nHP: ${newMonster.hp}\n
              \n\\\\\\\\\\VS\\\\\\\\\\
              \n${character.name}: \nHP: ${character.hp}`);
}



function playerAttack() {
  var chosenWeapon = ask.keyInSelect(character.weapons, "What weapon would you like to use?");
  for (let i = 0; i < character.weapons.length; i++) {
    if (chosenWeapon === character.weapons.indexOf("knife")) {
      console.log(`You attacked ${newMonster.name} with your knife!`);
      knifeAttack();
    } else if (chosenWeapon === character.weapons.indexOf("Bow Staff!")){
      console.log(`You attacked ${newMonster.name} with your Bow Staff!`);
      bowStaffAttack();
    } else if (chosenWeapon === character.weapons.indexOf("Sword!!")) {
      console.log(`You attacked ${newMonster.name} with you Sword!`);
      swordAttack();
    } else if (chosenWeapon === character.weapons.indexOf("Spear!!")) {
      console.log(`You attacked ${newMonster.name} with your Spear!`);
      spearAttack();
    } else if (chosenWeapon === character.weapons.indexOf("MAGIC!!!")) {
      console.log(`You attacked ${newMonster.name} with MAGIC!!!!!`);
      magicAttack();
    }


}



  // if (chosenWeapon === 0) {
  //   console.log("You attacked with your knife.  -20hp");
  //   knifeAttack();
  // } else if (chosenWeapon === 1) {
  //   console.log("You attacked with your spear.  -40hp");
  //   spearAttack();
  // }
}

function fight(){
  console.log(`You have chosen to fight!  Here is your matchup.`);
  console.log(`${newMonster.name}: \nHP: ${newMonster.hp}\n\n\\\\\\\\\\VS\\\\\\\\\\
              \n${character.name}: \nHP: ${character.hp}`);
  // console.log("\\\\\\\\\\VS\\\\\\\\\\");
  // console.log(`${character.name}: \nHP: ${character.hp}`);
  playerAttack();
}

function bossFight(){
  console.log("You have reached the boss.");
}


function run() {
  console.log("You chose to run")
  const randDeath = (Math.random() * 100) > 50 ? gameOver(): console.log("You just escaped");
}

function runOrFight() {
  var decision = ask.keyInSelect(["Run", "Fight"], "You hear an enemy ahead.  What would you like to do?");
  if (decision === 0) {
    run();
  } else if (decision === 1) {
    fight();
  }
}

console.log("welcome..." + character.name)
const randomFight = function(){
  let willFight = Math.random() * 5 > 1 ? walk(): runOrFight();
  // console.log(willFight);
}
const printInventory = () => {
  console.log(character);
  console.log("Here are your characters stats.")
}
 function walkQuestion() {
   let input = ask.question('Enter "W" to walk: \nOr enter "Print" see inventory:\n');
   if (input.toLowerCase() === "print") {
     printInventory();
   }
   input.toUpperCase() === "W" ? randomFight():
     console.log("You are delaying the inevitable.");
     walkQuestion();
 }

let distanceWalked = 0;
const walk = () => {
  distanceWalked++;
  if (distanceWalked % 3 === 0) {
    console.log("You found an item!");
    if (!character.hasKey) {
      character.hasKey = true;
    } else if (!character.hasArmor) {
      character.hasArmor = true;
    } else if (!character.hasSpear) {
      character.weapons.push(weapons[randomAttribute()]);
    }
  } walkQuestion();
}

function gameOver() {
  console.log("Game Over...You were not fast enough");
  character.isAlive = false;
}

while (character.isAlive === true) {
  walk();
}
