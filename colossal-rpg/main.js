var ask = require('readline-sync');

var character = {
  name: ask.question('What is your name? '),
  hp: 100,
  monstersDefeated: 0,
  hasSword: true,
  hasKey: false,
  hasArmor: false,
  hasSpear: false,
  weapons: ["Knife"]
}

const names = ["name1", "name2", "name3", "name4", "name5"];
const types = ["type1", "type2", "type3", "type4", "type5"];
const weapons = ["weapon1", "weapon2", "weapon3", "weapon4", "weapon5"];
const abilities = ["ability1", "ability2", "ability3", "ability4", "ability5"];
function randomAttribute() {
  return Math.floor(Math.random() * 6);
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



function enemyAttack() {
  let randomWeapon = enemyWeapons[randomAttribute()]
  console.log("The enemy attacked you with ..." + randomWeapon);
  playerAttack();
}

function knifeAttack() {
  newMonster.hp = newMonster.hp - 25;
  if (newMonster.hp <= 0) {
    console.log(newMonster);
    console.log("You have defeated the monster!");
    newMonster = new MonsterCreator(randomHp(), newName(), null, newWeapon, newAbility);
    character.monstersDefeated++;
    if (character.monstersDefeated >= 3) {
      bossFight();
    }
    walk();
  } else {
    console.log(newMonster);
    enemyAttack();
  }
}

function spearAttack() {
  newMonster.hp = newMonster.hp - 50;
  if (newMonster.hp <= 0) {
    console.log(newMonster);
    console.log("You have defeated the monster!");
    character.monstersDefeated++;
    monstersDefeated > 3 ? "You have defeated three monsters. Prepare for your final battle":
    walk();
    if (character.monstersDefeated >= 3) {
      bossFight();
    }
  } else {
    console.log(newMonster);
    enemyAttack();
  }
}

function playerAttack() {
  var chosenWeapon = ask.keyInSelect(character.weapons, "What weapon would you like to use?");
  if (chosenWeapon === 0) {
    knifeAttack();
    console.log("You attacked with your knife.  -25hp");
  } else if (chosenWeapon === 1) {
    spearAttack();
    console.log("You attacked with your spear.  -40hp");
  }
}

function fight(){
  console.log("You have chosen to fight!  Here is your matchup.");
  console.log(newMonster);
  console.log("\\\\\\\\\\VS\\\\\\\\\\");
  console.log(character);
  playerAttack();
}

function bossFight(){
  console.log("You have reached the boss.");
}

function run() {
  console.log("You chose to run")

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
let distanceWalked = 0;
function walk() {
  distanceWalked++
  if (distanceWalked % 3 === 0) {
    console.log("You found an item!");
    if (!character.hasKey) {
      character.hasKey = true;
    } else if (!character.hasArmor) {
      character.hasArmor = true;
    } else if (!character.hasSpear) {
      character.weapons.push("Spear");
    }
  }
  ask.question('Enter "W" to walk: ');
  randomFight();
}

walk();
console.log(distanceWalked)



function MonsterCreator(hp, name, type, weapon, ability){
  this.hp = hp;
  this.name = name;
  this.type = type;
  this.weapon = weapon;
  this.ability = ability
}
