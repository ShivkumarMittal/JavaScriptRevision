const heroes = ["karan", "Pavan", "Raman"];
const superHero = ["Vikas", "Sachin"];

// superHero.push(heroes)
// console.log(superHero);

// superHero.concat(heroes);
// console.log(superHero.concat(heroes));

//spread operator
const newHero = [...superHero,...heroes];
console.log(newHero);

const anotherArr = [1,2,3,[4,[5,6],5,6],5,[4,5]];
let real = anotherArr.flat(2);
console.log(real);


//to check is array or not
console.log(Array.isArray("shiv"));

//at webScraping data ned to convert to array kuch bhi de sakti hai object , string 
console.log(Array.from('shiv'));
//


// it return null array say keys se array or value se array
console.log(Array.from({name:"shiv"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

