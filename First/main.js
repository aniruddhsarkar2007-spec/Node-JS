// const sum = require("./first")
// console.log("Main File")
// sum()

// -----------------------------------------------------------------------------


// const fun = require("./first")
// console.log("Main File")
// fun.sum()
// fun.sub()

// -----------------------------------------------------------------------------

// const fun = require("./first")
// console.log("Main File")

// fun.f1()
// fun.f2() 

// -----------------------------------------------------------------------------

let{sum,sub} = require("./first")
let multi = require("./module/multi")
let newFile = require("../New")
console.log("Main File")

sum()
sub() 
multi()
newFile()
