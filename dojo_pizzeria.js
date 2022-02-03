function pizzaOven (crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.topping = toppings;
    return pizza;
}

var firstPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(firstPizza);

var secondPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(secondPizza);

var thridPizza = pizzaOven("thin crust", "traditional", ["pepperjack", "mozzarella", "swiss"], ["basil", "oregano"]);
console.log(thridPizza);

var forthPizza = pizzaOven("thincrust", "garlic parmesan",["mozzarella", "swiss", "sharp cheddar"], ["onion", "mushroom", "olive", "jalapeno", "bbq chicken", "pepperoni", "sausage"]);
console.log(forthPizza);

function randomPizza(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crust = crustType;
    pizza.sauce = sauceType;
    pizza.cheese = cheeses;
    pizza.topping = toppings;
    return Math.random(pizza);
}
var pizzaRandom = randomPizza("thincrust", "garlic parmesan",["mozzarella", "swiss", "sharp cheddar"], ["onion", "mushroom", "olive", "jalapeno", "bbq chicken", "pepperoni", "sausage"]);
console.log(pizzaRandom);

//Math.random() function implemented for selection of random ingredients
function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());