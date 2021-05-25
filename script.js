function helloWorld(){
    console.log("Hello World from inside function.")
    goodbyeEarth()
}

function goodbyeEarth(){
    console.log("Goodbye earth in a function.")
}
function name(){
    console.log("Name")
    helloWorld()
    console.log("After hello world function")
    goodbyeEarth()
}

console.log("Hello World")
name()
console.log("Good bye earth")