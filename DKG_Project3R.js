//alert("JavaScript works!");

//Devon Gildark
//Project 3
// 1306

//json Item
var jsonItems = '[{"Type": "Health Potion",	"Value": 200,	"Total":10},{"Type": "Magic Potion","Value": 50,"Total": 10}]';

var jsonHeroes = '[{"Name": "Oddler","Life": 225,"MaxLife" : 225, "Magic": 150,"MaxMagic": 150,"Strength": 250,"Defense": 200},{"Name": "Mazy","Life": 200,"LifeMax" : 200,"Magic": 300,"MaxMagic": 300,"Strength": 120,"Defense": 175}]';


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

var OddlerLifeThreshold = Oddler.Life *0.5;
var MazyLifeThreshold = Mazy.Life * 0.5;
var mazyManaThreshold = Mazy.Magic * 0.1;

var healAmount = (parseInt(Math.random()*50)+25);

var OddlerWins = true;

//FUNCTIONS
var StoryString = "Oddler has chosen to battle Lith, and bought his supplies. \n Mazy, a healer has joined Oddlers party. \n Oddler sets out on his journey. \n "
function ReportStory(StoryString)
{
    return StoryString;
}


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

//Attack a target, returns a number
function Attack(target, low, high, dmgAmount) {
	var lowerLimit = low;
	var upperLimit = high;
	//following command is the formula for calculating damage.

	var totalDamage =parseInt(((Math.abs(target.Strength - target.Defense)) * ((Math.floor(Math.random() * upperLimit - lowerLimit + 1) + lowerLimit)/100)+dmgAmount));
	
	target.Life -= totalDamage;
	return totalDamage;
}
creatureToFight = parseInt((Math.random()*3)+1);//Random Creature:

var EnemyCreature = [];
function BuildEnemyArray()
{
	EnemyCreature.push(Bat);
	EnemyCreature.push(Ooze);
	EnemyCreature.push(Ogre);
	return EnemyCreature;
}

function WillMazyHeal()
{
    return (parseInt(Math.random()*2)%2==0);
 }
 
 function ReportOutcome()
 {
	if(OddlerWins)
 	{
		console.log("You Win!!");
	} else {
		console.log("You Lose.");
	}
}
 
function SelectTarget()
{
	if (parseInt(Math.random()*2)%2==0)
	{
		return Oddler;
	}
	else
	{
		return Mazy;
	}
}
 
function BattlePhase()
{
	for(var i=0; i<3; i++)

	{
		console.log("Oddler has encountered a " + EnemyCreature[0].Name + "!");
		
		while(EnemyCreature[0].Life>0 && Oddler.Life>0) //while creature is alive
		{		
			console.log("Oddler attacks for " + Attack(EnemyCreature[0],25,45,20) + " damage.");
			
			if(EnemyCreature[0].Life>0)
			{

				console.log(EnemyCreature[0].Name + " has " + EnemyCreature[0].Life + " life remaining.");
				var CurrentTarget = SelectTarget();
				console.log(EnemyCreature[0].Name + " attacks " + CurrentTarget.Name + " for " + Attack(CurrentTarget,10,20,30) + " damage.");
				console.log(CurrentTarget.Name + " has " + CurrentTarget.Life + " life remaining.");
				if (Oddler.Life <=0)
				{
					OddlerWins = false;
					return;
				}
				
				if(Oddler.Life <=OddlerLifeThreshold)
				{
					if(WillMazyHeal())
					{
						console.log("Oddler's health is low!\nMazy heals Oddler for " + CastHealSpell(Oddler, healAmount)+ " life.");
						console.log("Oddler has " + Oddler.Life + " life remaining.");
					}
					else {
							console.log("Mazy was distracted and forgot to heal Oddler.");
					}
				}
			}
		}
		console.log(EnemyCreature[0].Name + " has been defeated!");
		EnemyCreature.shift();
			console.log("\n\n");
	}
}
        console.log(ReportStory(StoryString));
        BuildEnemyArray();
	BattlePhase();
	console.log("\n\n");
	ReportOutcome();