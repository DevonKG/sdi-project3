//alert("JavaScript works!");

//Devon Gildark
//Project 3
// 1306

//json Item
var jsonItems = '[{"Type": "Health Potion",	"Value": 200,	"Total":10},{"Type": "Magic Potion","Value": 50,"Total": 10}]';

var jsonHeroes = '[{"Name": "Oddler","Life": 300,"MaxLife" : 300, "Magic": 150,"MaxMagic": 150,"Strength": 250,"Defense": 200},{"Name": "Mazy","Life": 200,"LifeMax" : 200,"Magic": 300,"MaxMagic": 300,"Strength": 120,"Defense": 175}]';


var jsonEnemies = '[{"Name": "Bat","Life": 75,"Magic": 0,"Strength": 35,"Defense": 150},{"Name": "Blue Ooze","Life": 125,"Magic": 0, "Strength": 30,"Defense": 200}, {"Name": "Green Ogre","Life": 350,"Magic": 0,"Strength": 300,"Defense": 100}]';
//End json

//Global Var
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

//FUNCTIONS

//Use Heath Potions
function UseHealthPotion(target) {
	if(HealthPotion.Total>0)
	{
		target.Life += HealthPotion.Value;
		if(target.Life > target.MaxLife) 
		console.log(target.Name + " used a " + HealthPotion.Type + ".");
		{
		target.Life = target.MaxLife;
}
		HealthPotion.Total--;
		console.log("There are " + HealthPotion.Total + " Health Potions remaining.");		
	}
	return HealthPotion.Total;
}

//Use Magic Potions
function UseMagicPotion(target) {
	if(MagicPotion.Total>0)
	{
		target.Life += MagicPotion.Value;
		if(target.Magic > target.MaxMagic) 
		console.log(target.Name + " used a " + MagicPotion.Type + ".");
		{
		target.Life = target.MaxMagic;
}
		MagicPotion.Total--;
		console.log("There are " + MagicPotion.Total + " Magic Potions remaining.");		
	}
	return MagicPotion.Total;
}

function UseManaPotion(target) {
	if(ManaPotion.Total>0)
	{
		target.Magic += ManaPotion.Value;
		if(target.Magic > target.MaxMagic)
		target.Magic = target.MaxMagic;
		ManaPotion.Total--;
	}
	return ManaPotion.Total;	
}

//Cast Heal Spell - Specify Target Hero and amount to Heal
function CastHealSpell(target,healValue) {
	var spellCost = 50;
	target.Life += healValue;
	Mazy.Magic=-spellCost;
	return healValue;
}

//Cast Fireball Spell - Specify Caster, Target Enemy and damage amount
function CastFireBallSpell(caster,target,dmgAmount) {
	var spellCost = 35;
	target.Life-=dmgAmount;
	caster.Magic-=spellCost
}

//Attack a target - Specify Target and Damage Amount. Weighs against targets Strength and Defense stats. Formula including Random range indicates damage based on damage amount specified. RETURNS A NUMBER
function Attack(target, low, high, dmgAmount) {
	var lowerLimit = low;
	var upperLimit = high;
	//following command is the formula for calculating damage.
	//total damage is calculated by:
	//absolute value of strength of target subtract defense of target (eliminates negative value)
	//multiplied by a random value indicated by lowerLimit and upperLimit values, plus one to eliminate zero.
	//Divide by 100 to get a percentage value, add dmgAmount as a bonus damage amount. 
	//parseInt() to return ONLY the integer value
	var totalDamage =parseInt(((Math.abs(target.Strength - target.Defense)) * ((Math.floor(Math.random() * upperLimit - lowerLimit + 1) + lowerLimit)/100)+dmgAmount));
	
	target.Life -= totalDamage;
	return totalDamage;
}
creatureToFight = parseInt((Math.random()*3)+1);//Random Creature: