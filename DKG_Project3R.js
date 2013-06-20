//alert("JavaScript works!");

//Devon Gildark
//Project 3
// 1306

//json Item
var jsonItems = '[{"Type": "Health Potion",	"Value": 200,	"Total":10},{"Type": "Magic Potion","Value": 50,"Total": 10}]';

var jsonHeroes = '[{"Name": "Oddler","Life": 300,"MaxLife" : 300, "Magic": 150,"Strength": 250,"Defense": 200},{"Name": "Mazy","Life": 200,"LifeMax" : 200,"Magic": 300,"Strength": 120,"Defense": 175}]';


var jsonEnemies = '[{"Name": "Bat","Life": 75,"Magic": 0,"Strength": 35,"Defense": 150},{"Name": "Ooze","Life": 125,"Magic": 0, "Strength": 30,"Defense": 200}, {"Name": "Ogre","Life": 350,"Magic": 0,"Strength": 300,"Defense": 100}]';
//End json

var objItems = JSON.parse(jsonItems);
var objHeroes = JSON.parse(jsonHeroes);
var objEnemies = JSON.parse(jsonEnemies);

var Oddler = objHeroes[0];
var Mazy = objHeroes[1];

var HealthPotion = objItems[0];
var ManaPotion = objItems[1];

var Bat = objEnemies[0];
var Ooze = objEnemies[1];
var Ogre = objEnemies[2];

var OddlerLifeThreshold = Oddler.Life *0.9;
var MazyLifeThreshold = Mazy.Life * 0.5;
var mazyManaThreshold = Mazy.Magic * 0.1;

var healAmount = (parseInt(Math.random()*50)+25);