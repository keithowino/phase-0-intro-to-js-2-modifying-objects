
const obj = {
  keyOne : "string", 
  keyTwo : [], 
  keyThree : true, 
  keyFour : 1, 
  keyFive : {}
}

console.log(obj.keyThree);

obj.keySix = new Date(); // Adding an object property

console.log(obj)

obj.keySix = "Modified"; // Modifying an objects property

console.log(obj)