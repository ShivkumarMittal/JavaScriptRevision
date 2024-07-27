function add(num1,num2)
{
    console.log(num1+num2)
    

}

const result = add(2,2)
console.log(result)


//rest operator

function calculateCartPrice(val1,...num5){
    return num5

}

console.log(calculateCartPrice(2,5,8,25));


const user = {
    user:"shiv",
    price:222
}

//pass object to function

function handleObject(any)
{
    console.log(`Username is ${any.user} 
        and price is ${any.price}`)

}

handleObject(user);

const arr = [2,5,5]

function returnarr(getArray){
    return getArray[1]
}

console.log(returnarr(arr))