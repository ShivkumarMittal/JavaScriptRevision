// two ways => literals , constructor
// literals => singleton nahi banta 
// constructor => singleton banta hai object matlab apne tarike ka ek hi object hai

//literals

const mySym = Symbol("key1");
const user = {
    name:"shiv",
    "full name":"Shivkumar",
    [mySym]:"keydata",
    age:21,
    location:"Mathura",
    isLoggedIn:false,
    lastLoginDays : ["Mon","Wed"]
}



// console.log(user.name);
// console.log(user.fullname);
//  console.log(user["full name"]);
//  console.log(user[mySym])
//  user.name = "pavan"
// console.log(user);
// Object.freeze(user);
//  user.name = "vikas"
//  console.log(user);


// user.greeting = function(){
//     console.log("hello js user");
// }

// user.greeting2 = function(){
//     console.log(`hello js user ${this.name}`);
// }

// console.log(user.greeting2())

// const tinderUser = new Object()
// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false
// // console.log(tinderUser)

// const regularUser = {
//     email:"some@gamil.com",
//     fullName:{
//         firstName:{
//             CallBy:"Mr",
//             name:"Shiv"
//         }
//     }
// }

// // console.log(regularUser.fullName.firstName.CallBy);
// const obj1 = {
//     1:'a',
//     2:'b'
// }

// const obj2 = {
//     3:'c',
//     4:'d'
// }

// const obj3 = Object.assign({},obj1,obj2);
// // console.log(obj3)


// const obj4 = {...obj1,...obj2}
// console.log(obj4);


const user1 = [
    {
        id:1,
        name:"shiv"
    },
    {
        id:1,
        name:"shiv"
    },
    {
        id:1,
        name:"shiv"
    },
    {
        id:1,
        name:"shiv"
    }
]

// // console.log(user1[1].name)

// console.log(Object.keys(user))
// console.log(Object.values(user))


// console.log(user.hasOwnProperty('name'))


//Destructuring

const course = {
    name:"JS",
    price:"free",
    teacher:"Hitesh"
}

const {name:merename} = course

console.log(merename)

//api talk
// api => object hai jiska nam nahi hai
// {
//     "name":"Java",
//     "price":"222"
// }

// [
//     {},{},{}
// ]