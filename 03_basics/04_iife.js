// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB connected`);
})();  //; is necessary no table to detect where context is end give error on next if not put

(()=>{
    //simple iife
    console.log("hii shiv ")

})();

((name)=>{
    console.log(`hii ${name}`)

})("shiv")

