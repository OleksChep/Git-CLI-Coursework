Define an array containing the 3 people defined below.
Return an array of the people's names (hint: use map).
Filter the people to return an array with the person younger than 28 years old (hint: use filter).


let person1 = {
  name: "Alice",
  age: 25,
};

let person2 = {
  name: "Bob",
  age: 30,
};

let person3 = {
  name: "John",
  age: 20,
};

/*
DO NOT EDIT ANYTHING ABOVE THIS LINE
WRITE YOUR CODE BELOW
*/

let people = // Complete here

let peoplesNames = // Complete here

let peopleYoungerThan28YearsOld = // Complete here

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/


console.log("Array defined with 3 people -> ", people[0] === person1 && people[1] === person2 && people[2] === person3 ? "Passed :)" : "Not yet :(");

console.log("Array containing the person names -> ", peoplesNames[0] === "Alice" && peoplesNames[1] === "Bob" && peoplesNames[2] === "John" ? "Passed :)" : "Not yet :(");

console.log("Array containing the people younger than 28 years old -> ", peopleYoungerThan28YearsOld[0] === person1 && peopleYoungerThan28YearsOld[1] === person3 ? "Passed :)" : "Not yet :(");