
var prodName = prompt("Enter Product's Name:");
var prodQuant = prompt("Enter Product's Quantity:");
var prodPrice = prompt("Enter Product's Price:");


console.log(prodName + "|" + prodQuant + "|" + prodPrice);

var tax = prodPrice * .16;
var total = prodPrice + tax

console.log("Price including tax:" + total);


