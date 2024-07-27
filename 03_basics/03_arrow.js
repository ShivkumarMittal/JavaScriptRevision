const user = {
    name:"shiv",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()

console.log(this); //here empty object because of separate engine
// but if we do it on inspect return window object due to which we do onclick , dom related

// ..................arrow function................

// function chai(){
//     let username = "shiv"
//     console.log(this);
//     console.log(this.username); // undefined in function not working in object works
// }

// chai()


// const chai = function(){
//     let username = "shiv"
//      console.log(this);
//      console.log(this.username)

// }

// chai()

// const chai = () => {
//     let username = "shiv"
//      console.log(this);  //in arrow function this return {} object but in above not 
//      console.log(this.username) //also undefined

// }

// chai()

// const addTwo = (num1,num2) => { return num1+num2}  //currly braces then return compulsory
// const addTwo2= (num1,num2) =>  num1+num2
// const addTwo3= (num1,num2) =>  (num1+num2)   // parenthesis return not required  //called implicit return 

//to return object
const addTwo= (num1,num2) => ({username:"shiv"})
console.log(addTwo(2,5))







