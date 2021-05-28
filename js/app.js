'use strict';
var bodyMain = document.getElementById('bodymain');
var book = [];
var dog = {};
var allScroll = document.getElementById('scroll');
dog.items = [];

// This constructor should be a good starting point for 'scenes' within this story
// Next add for the constructor is for a background image
function SceneConstructor(sceneNumber, text, html, background) {
  this.sceneNumber = sceneNumber;
  this.text = text;
  this.html = html;
  this.background = background;
  book.push(this);
}

var boneEat = new Audio('sounds/bone_eat.mp3');
var softEat = new Audio('sounds/soft_food.mp3');
var angryBark = new Audio('sounds/Angry_bark.mp3');
var happyBark = new Audio('sounds/happy_bark.mp3');
var water = new Audio('sounds/water.mp3');
var running = new Audio('sounds/running.mp3');
var petDoor = new Audio('sounds/pet_door_open.mp3');
var cat = new Audio('sounds/cat.mp3');
var yelp = new Audio('sounds/yelp.mp3');
var bowlEat = new Audio('sounds/bowl_eat.mp3');
var churchBackground = new Audio('sounds/Church_street.mp3');
var beachBackground = new Audio('sounds/beach.mp3');
var bed = new Audio('sounds/bed.mp3');

function play(sound) {
  sound.play();
}

/* <button onclick="giveAction(bowlOBJ), renderPage(\'You are in the kitchen.\')">
    
<button onclick="renderPage(\'You go out to the park.\'), battle(dog,streetCat), play(cat)"> */

/*------------------------------------INTRODUCTION SCENE-----------------------------------------*/
new SceneConstructor(
  'Start',
  'LIFE OF A SHIBA INU: Live like a Shiba! Eating/drinking will refill your HEALTH. Resting/sleeping will refill your ENERGY. Certain events will drain your ENERGY and then your HEALTH. Click on the SHIBA button on LOWER RIGHT to START!',
  "<ul id = \"mainChoiceButtonStart\"><li><img onclick=\"renderPage('You are at home.')\" src='img/startIcon.png' class='paths'></img></li></ul>",
  'img/doghead.jpg'
);

/*------------------------------------SCENES START-----------------------------------------*/
////////////// There will be a lot of spacing in the constructor scenes for simplicity sake //////////////

/*----------------HOME----------------*/
new SceneConstructor(
  'You are at home.',
  'You are at home. Do what dogs do! Remember! Your energy will diminish slowly over time, keep eating to maintain energy!',

  '<ul id = "mainChoiceButton"><li> <button onclick="giveAction(bowlOBJ), renderPage(\'You are in the kitchen.\'), play(running)"> Demand food from human </button></li> \r <li><button onclick="giveAction(meatOBJ), renderPage(\'You are in the kitchen.\'), play(happyBark)"> Take meat off of table! </button></li> \r <li><button onclick="renderPage(\'You are exploring the park.\'), doHunger(5), play (petDoor)"> Go to the park </button></li> \r <li> <button onclick="renderPage(\'You are exploring the streets.\'), doHunger(5), play(petDoor)"> Go to the streets </button></li> </ul>',

  'img/home1.jpg'
);

new SceneConstructor(
  'You are in the kitchen.',
  'You take the food and store it somewhere safe.',

  '<ul id = "mainChoiceButton"><li> <button onclick="giveAction(woundOBJ), renderPage(\'You are in the kitchen..\'), play(running)"> Play with human </button></li> \r <li><button onclick="renderPage(\'You are exploring the park.\'), doHunger(5), play (petDoor)"> Go to the park </button></li> \r <li> <button onclick="renderPage(\'You are exploring the streets.\'), doHunger(5), play(petDoor)"> Go to the streets </button></li> </ul>',

  'img/kitchen.jpg'
);

new SceneConstructor(
  'You are in the kitchen..',
  'You play with the human until the human gets tired to throw the ball for you anymore.',

  '<ul id = "mainChoiceButton"><li> <button onclick=" renderPage(\'You are in the living room.\'), play(angryBark)"> Ask human to play more! </button></li> \r <li><button onclick="renderPage(\'You are exploring the park.\'), doHunger(5), play (petDoor)"> Go to the park </button></li> \r <li> <button onclick="renderPage(\'You are exploring the streets.\'), doHunger(5), play(petDoor)"> Go to the streets </button></li> </ul>',

  'img/kitchen.jpg'
);

new SceneConstructor(
  'You are in the living room.',
  'Human seems to be tired... The human lays on the sofa with their rectangular device in their paws.',

  '<ul id = "mainChoiceButton"> <li><button onclick="renderPage(\'You are exploring the park.\'), doHunger(5), play (petDoor)"> Go to the park </button></li> \r <li> <button onclick="renderPage(\'You are exploring the streets.\'), doHunger(5), play(petDoor)"> Go to the streets </button></li> </ul>',

  'img/living_room.jpg'
);

/*----------------PARK----------------*/

new SceneConstructor(
  'You are exploring the park.',
  'You sniff around looking for food.',

  //   '<ul id = "mainChoiceButton"><li> <button onclick="giveAction(bowlOBJ), renderPage(\'You are in the kitchen.\')"> Demand food from human </button></li> \r <li><button onclick="giveAction(meatOBJ), renderPage(\'You are in the kitchen.\')"> Take meat off of table! </button></li> \r <li><button onclick="renderPage(\'You go out to the park.\')"> Go to the park! </button></li> \r <li> <button onclick="giveAction(sleepOBJ), renderPage(\'You explore South..\')"> GET POTION </button></li> </ul>',

  'img/park1.jpg'
);

/*----------------BEACH----------------*/

new SceneConstructor(
  'You are exploring the beach.',
  'You sniff around looking for food.',

  //   '<ul id = "mainChoiceButton"><li> <button onclick="giveAction(bowlOBJ), renderPage(\'You are in the kitchen.\')"> Demand food from human </button></li> \r <li><button onclick="giveAction(meatOBJ), renderPage(\'You are in the kitchen.\')"> Take meat off of table! </button></li> \r <li><button onclick="renderPage(\'You go out to the park.\')"> Go to the park! </button></li> \r <li> <button onclick="giveAction(sleepOBJ), renderPage(\'You explore South..\')"> GET POTION </button></li> </ul>',

  'img/doghead.jpg'
);

/*----------------STREETS----------------*/

new SceneConstructor(
  'You are exploring the streets.',
  'You sniff around looking for food.',

  //   '<ul id = "mainChoiceButton"><li> <button onclick="giveAction(bowlOBJ), renderPage(\'You are in the kitchen.\'), battle(dog,streetCat)"> Demand food from human </button></li> \r <li><button onclick="giveAction(meatOBJ), renderPage(\'You are in the kitchen.\')"> Take meat off of table! </button></li> \r <li><button onclick="renderPage(\'You go out to the park.\')"> Go to the park! </button></li> \r <li> <button onclick="giveAction(sleepOBJ), renderPage(\'You explore South..\')"> GET POTION </button></li> </ul>',

  'img/streets1.jpg'
);

/*----------------FAINT----------------*/

new SceneConstructor(
  'Fainted',
  'You sleep the whole day after your human brought you back home.',

  '<ul id = "mainChoiceButton"><li> <button onclick=" renderPage(\'You are at home.\')"> Wake up </button></li></ul>',

  'img/fainted.jpg'
);

function faintedDog() {
  play(yelp);
  alert('You have fainted. Your human carried you back home.');
  // show player name on display
  var displayName = document.getElementById('charName-id');
  displayName.innerHTML = dog.name;
  while (dog.items.length > 0) {
    loseAction(dog.items[0]);
  }
  dog.hitPoints = 100;
  dog.energyHP = 0;
  dog.items = [];
  dog.scenesVisited = [];
  dog.attackPower = 10;
  HB.setValue(100);
  AB.setValue(0);
  renderPage('Fainted');
  while (allScroll.firstChild) {
    allScroll.removeChild(allScroll.firstChild);
  }
  while (dog.items.length > 0) {
    loseAction(dog.items[0]);
  }
}

/*------------------------------------ITEM CONSTRUCTORS-----------------------------------------*/
function ItemOBJ(name, id) {
  this.name = name;
  this.id = id;
}

var waterOBJ = new ItemOBJ('water', 'img-item-water');
var woundOBJ = new ItemOBJ('wound', 'img-item-wound');
var bowlOBJ = new ItemOBJ('bowl', 'img-item-bowl');
var sausageOBJ = new ItemOBJ('sausage', 'img-item-sausage');
var meatOBJ = new ItemOBJ('meat', 'img-item-meat');
var sleepOBJ = new ItemOBJ('sleep', 'img-item-sleep');

function giveAction(OBJ) {
  var itemOBJid = OBJ.id;
  dog.items.push(OBJ);
  document.getElementById(itemOBJid).setAttribute('style', 'opacity:1');
}

function loseAction(loseOBJ) {
  for (var i = 0; i < dog.items.length; i++) {
    if (dog.items[i].name === loseOBJ.name) {
      dog.items.splice(i, 1);
    }
  }
  document.getElementById(loseOBJ.id).setAttribute('style', 'opacity:0.3');
}

function resetDog() {
  dog.name = prompt(
    "Welcome to the game 'Life of a Shiba Inu'. What is your name?"
  );
  // show player name on display
  var displayName = document.getElementById('charName-id');
  displayName.innerHTML = dog.name;
  while (dog.items.length > 0) {
    loseAction(dog.items[0]);
  }
  dog.hitPoints = 100;
  dog.energyHP = 0;
  dog.items = [];
  dog.scenesVisited = [];
  dog.attackPower = 10;
  HB.setValue(100);
  AB.setValue(0);
  renderPage('Start');
  while (allScroll.firstChild) {
    allScroll.removeChild(allScroll.firstChild);
  }
  while (dog.items.length > 0) {
    loseAction(dog.items[0]);
  }
}

// THIS MAKES THE OBJECTS RENDER.
function renderPage(sceneToRender) {
  if (dog.hitPoints <= 0) {
    faintedDog();
  } else {
    savedog();
    while (bodyMain.firstChild) {
      bodyMain.removeChild(bodyMain.firstChild);
    }
    for (var i = 0; i < book.length; i++) {
      if (book[i].sceneNumber === sceneToRender) {
        var pageText = document.createElement('p');
        pageText.id = 'activeText';
        pageText.textContent = book[i].text;
        bodyMain.appendChild(pageText);
        var pageHtml = document.createElement('div');
        pageHtml.id = 'divId';
        pageHtml.innerHTML = book[i].html;
        bodyMain.appendChild(pageHtml);
        dog.scenesVisited.push(book[i].sceneNumber);
        dog.currentScene = book[i].sceneNumber;
        var backgroundImage = document.createElement('img');
        backgroundImage.src = `${book[i].background}`;
        backgroundImage.id = 'backgroundimage';
        bodyMain.appendChild(backgroundImage);
        var pageScroll = document.getElementById('scroll');
        var sceneText1 = document.createElement('li');
        sceneText1.innerHTML = book[i].sceneNumber;
        pageScroll.appendChild(sceneText1);
      }
    }
  }
}

/*------------------------------------HUD CONSTRUCTORS-----------------------------------------*/

class HealthBar {
  constructor(element, initialValue = dog.hitPoints) {
    this.valueEl = element.querySelector('.health-bar-value');
    this.fillEl = element.querySelector('.health-bar-fill');
    this.setValue(initialValue);

    // console.log('check valueEl: ', this.valueEl);
    // console.log('check fillEl: ', this.fillEl);
  }

  setValue(newValue) {
    if (newValue < 0) {
      //check and/or convert to 0 if value is less than 0.
      newValue = 0;
    }
    if (newValue > 100) {
      //check and/or convert to 100 if value is greater than 100.
      newValue = 100;
    }

    this.value = newValue;
    this.update();
  }

  update() {
    let percentage = this.value + '%';
    this.fillEl.style.width = percentage;
    this.valueEl.textContent = percentage;
  }
}

// HB stands for Health Bar.
const HB = new HealthBar(document.querySelector('.health-bar'), dog.hitPoints); // turns the new instance into a constant with an initial value of 100.
HB.setValue(dog.hitPoints); // will create a new health bar instance and pass dog.hitPoints i.e. objects current hitpoint value.

class EnergyBar {
  constructor(element, initialValue = dog.energyHP) {
    this.valueEl = element.querySelector('.energy-Bar-value');
    this.fillEl = element.querySelector('.energy-Bar-fill');
    this.setValue(initialValue);
  }

  setValue(newValue) {
    if (newValue < 0) {
      //check and/or convert to 0 if value is less than 0.
      newValue = 0;
    }
    if (newValue > 100) {
      //check and/or convert to 100 if value is greater than 100.
      newValue = 100;
    }

    this.value = newValue;
    this.update();
  }

  update() {
    let percentage = this.value + '%';
    this.fillEl.style.width = percentage;
    this.valueEl.textContent = percentage;
  }
}
const AB = new EnergyBar(document.querySelector('.energy-Bar'), dog.energyHP); // turns the new instance into a constant with an initial value of 0.
AB.setValue(dog.energyHP); // will create a new health bar instance and pass dog.hp i.e. objects current hitpoint value.

/*------------------------------------DAMAGE CONTROLS-----------------------------------------*/

// function cat() {}

function doHunger(damage) {
  // does energy exist? if so apply damage to energy before health
  if (dog.energyHP > 0) {
    play(happyBark);
    return loseEnergy(damage);
  }
  HB.setValue(dog.hitPoints - damage);
  dog.hitPoints = dog.hitPoints - damage;
  // if number is greather than 0 reset to 0
  if (dog.hitPoints < 0) {
    play(yelp);
    dog.hitPoints = 0;
  }
  var damageScroll = document.getElementById('scroll');
  var sceneDamage1 = document.createElement('li');
  //   sceneDamage1.innerHTML = 'You take ' + damage + ' damage from being hungry';
  damageScroll.appendChild(sceneDamage1);
}

function doDamage(damage) {
  // does energy exist? if so apply damage to energy before health
  if (dog.energyHP > 0) {
    return loseEnergy(damage);
  }
  HB.setValue(dog.hitPoints - damage);
  dog.hitPoints = dog.hitPoints - damage;
  // if number is greather than 0 reset to 0
  if (dog.hitPoints < 0) {
    play(yelp);
    dog.hitPoints = 0;
  }
  var damageScroll = document.getElementById('scroll');
  var sceneDamage1 = document.createElement('li');
  sceneDamage1.innerHTML = 'Enemy does ' + damage + ' damage';
  damageScroll.appendChild(sceneDamage1);
}

function loseEnergy(damage) {
  // remaining damage will apply to health once energy is subtracted
  if (damage > dog.energyHP) {
    var damageRemainder = damage - dog.energyHP;
    HB.setValue(dog.hitPoints - damageRemainder);
    dog.hitPoints = dog.hitPoints - damageRemainder;
  }
  AB.setValue(dog.energyHP - damage);
  dog.energyHP = dog.energyHP - damage;
  // if number is less than 0 reset to 0
  if (dog.energyHP < 0) {
    dog.energyHP = 0;
  }
}

function healDamage(damage) {
  HB.setValue(dog.hitPoints + damage);
  dog.hitPoints = dog.hitPoints + damage;
  // if number is greater than 100 reset to 100
  if (dog.hitPoints > 100) {
    dog.hitPoints = 100;
  }
}

function gainEnergy(damage) {
  AB.setValue(dog.energyHP + damage);
  dog.energyHP = dog.energyHP + damage;
  // if number is greater than 100 reset to 100
  if (dog.energyHP > 100) {
    dog.energyHP = 100;
  }
}

/*------------------------------------ITEM EVEN LISTENER AND CLICK FUNCTIONS-----------------------------------------*/

var bowlSlot = document.getElementById('img-item-bowl');
var waterSlot = document.getElementById('img-item-water');
var woundSlot = document.getElementById('img-item-wound');
var meatSlot = document.getElementById('img-item-meat');
var sausageSlot = document.getElementById('img-item-sausage');
var sleepSlot = document.getElementById('img-item-sleep');
bowlSlot.addEventListener('click', handleBowlClick);
waterSlot.addEventListener('click', handleWaterClick);
woundSlot.addEventListener('click', handleWoundClick);
meatSlot.addEventListener('click', handleMeatClick);
sausageSlot.addEventListener('click', handleSausageClick);
sleepSlot.addEventListener('click', handleSleepClick);

function handleBowlClick() {
  for (var i = 0; i < dog.items.length; i++) {
    if (dog.items[i].name === bowlOBJ.name) {
      play(bowlEat);
      gainEnergy(20);
      alert(
        'Your human gives you a bowl of food. You eat it and gain 50 energy.'
      );
      loseAction(bowlOBJ);
    }
  }
}

function handleWaterClick() {
  for (var i = 0; i < dog.items.length; i++) {
    if (dog.items[i].name === waterOBJ.name) {
      play(water);
      gainEnergy(15);
      alert('You drink some water. You gain 30 energy.');
      loseAction(waterOBJ);
    }
  }
}

function handleMeatClick() {
  for (var i = 0; i < dog.items.length; i++) {
    if (dog.items[i].name === meatOBJ.name) {
      play(boneEat);
      gainEnergy(30);
      alert('You eat the meat along with the bones. You gain 70 energy!');
      loseAction(meatOBJ);
    }
  }
}

function handleSausageClick() {
  for (var i = 0; i < dog.items.length; i++) {
    if (dog.items[i].name === sausageOBJ.name) {
      play(softEat);
      gainEnergy(10);
      alert('You eat the dog treat. You gain 20 energy.');
      loseAction(sausageOBJ);
    }
  }
}

function handleWoundClick() {
  for (var i = 0; i < dog.items.length; i++) {
    if (dog.items[i].name === woundOBJ.name) {
      play(running);
      healDamage(20);
      alert(
        'A human bends over and gives you head and back scratches. You gain 20 health.'
      );
      loseAction(woundOBJ);
    }
  }
}

function handleSleepClick() {
  for (var i = 0; i < dog.items.length; i++) {
    if (dog.items[i].name === sleepOBJ.name) {
      play(bed);
      healDamage(100);
      alert('You crawl up in your bed to sleep. You gain 100 health.');
      loseAction(sleepOBJ);
    }
  }
}

/*------------------------------------ENEMY BATTLE FUNCTIONS-----------------------------------------*/

function battle(dog, enemy) {
  play(yelp);
  var enemyBattleHp = enemy.hitPoints;
  while (enemyBattleHp > 0 && dog.hitPoints > 0) {
    doDamage(enemy.attackPower);
    enemyBattleHp = enemyBattleHp - dog.attackPower;
    var dogDamageScroll = document.getElementById('scroll');
    var sceneDamage2 = document.createElement('li');
    sceneDamage2.innerHTML = 'You deal ' + dog.attackPower + ' damage';
    dogDamageScroll.appendChild(sceneDamage2);
  }
  if (enemyBattleHp <= 0) {
    sceneDamage2.innerHTML = 'You defeated the enemy!';
  } else {
    sceneDamage2.innerHTML =
      'Enemy has defeated you! The enemy had ' + enemyBattleHp + ' hp left.';
  }
}

var streetCat = {
  hitPoints: 40,
  attackPower: 20,
};

var streetDog = {
  hitPoints: 120,
  attackPower: 10,
};

var cityPidgeons = {
  hitPoints: 30,
  attackPower: 15,
};

var beachSeagulls = {
  hitPoints: 40,
  attackPower: 20,
};

var parkCoyote = {
  hitPoints: 150,
  attackPower: 10,
};

var ryanMurderOfCrows = {
  hitPoints: 45,
  attackPower: 70,
};

var ryanLeopard = {
  hitPoints: 100,
  attackPower: 30,
};

/*------------------------------------LOCAL STORAGE-----------------------------------------*/

function savedog() {
  localStorage.dog = JSON.stringify(dog);
}

function loaddog() {
  dog = JSON.parse(localStorage.dog);
}

function manualSavedog() {
  localStorage.dog = JSON.stringify(dog);
}

function manualLoaddog() {
  dog = JSON.parse(localStorage.dog);
}

if (localStorage.dog) {
  loaddog();
  renderPage(dog.currentScene);
  alert('Welcome Back. Click Start New Game for a fresh start.');
  HB.setValue(dog.hitPoints);
  AB.setValue(dog.energyHP);
} else {
  resetDog();
}
