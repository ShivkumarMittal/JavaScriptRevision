// console.log(2<5)

// console.log("2">1);
// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);

// console.log(undefined==null);
// console.log(undefined>=0);
// console.log(undefined<0);

// console.log(undefined===null)


//Primitive datatype

// 7 types => String,Number,Boolean,null,undefined,Symbol,BigInt

// const id = Symbol(123)
// const anotherId =Symbol(123)

// console.log(id===anotherId);

// //Non-Primitive datatype(Reference Datatype)

// // Array , Objects , Functions

// const heros = ['karan','vikas']
// let obj = {
//     name:"shiv",
//     age:21
// }

// const my = function(){
//     console.log("hello world");
// }

// console.log(typeof my)

//.....................................................

//Stack(Primitive) , Heap(Non Primitive)

let collegeName = "BSA"

let anothername = collegeName
anothername = "AKTU"

console.log(anothername);
console.log(collegeName);

let userOne = {
    email:"shivkumar@gamil.com",
    upi:"user123"
}

let userTwo = userOne
userTwo.email = "karan@yahoo.com"

console.table([userOne,userTwo])



