var hello = "Hello";
let world = "Hello World";
const helloWorld = "Hello World!";
console.log("Hello");
//Scope global
const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
};

anotherFunction();
