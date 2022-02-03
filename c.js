var a = ["a", "b", "c", "d", "e"];

function reverse(arr){
var i = 0;
while (i < arr.length/2){
    var temp = arr[i];
    arr[i] = arr[(arr.length-1) -i];
    arr[(arr.length-1) -i] = temp;
    i++;
}
return arr;
}
var b = reverse(a);
console.log(b);


//W2D1
 //The Math Library
var floor = Math.floor(1.8);
var ceiling = Math.ceil( Math.PI );
var random = Math.random();

console.log(floor);// output 1
console.log(ceiling);// output 4
console.log(random); //output a decimal between 0 and 1

//Dice Roller
function d6() {
    var roll = Math.random();
    roll *= 6;
    roll += ;1
    roll = Math.floor(roll);
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

//Consult the Oracle
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

var answer = lifeAnswers[Math.floor(Math.random() * lifesAnswers.length)];
return answer;

//W2D2
var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

//Divisible by 3
for(var i=0; i<pokémon.length; i++) {
    if((pokémon[i].id)%3 == 0) {
        console.log(pokémon[i].name);
    }
}

//More than one type
for(var i=0; i<pokémon.length; i++) {
    if(pokémon[i].types.length > 1) {
        console.log(pokémon[i].name);
    }
}

//Type is poision
for(var i=0; i<pokémon.length; i++) {
    if((pokémon[i].types.length == 1) && (pokémon[i].types[0] == "poison")) {
        console.log(pokémon[i].name);
    }
}
//second type is flying
for(var i=0; i<pokémon.length; i++) {
    if((pokémon[i].types.length == 2) && (pokémon[i].types[1] == "flying")) {
        console.log(pokémon[i].name);
    }
}
//reverse name of pokemon whose only type is "poision"
for(var i=0; i<pokémon.length; i++) {
    if((pokémon[i].types.length == 1) && (pokémon[i].types[0] == "poison")) {
        var reverseName = "";
        for(var j = pokemon[i].name.length - 1; j >= 0; j--){
            reverseName += pokemon[i].name[j];
        }
        console.log(reverseName);
    }
}







