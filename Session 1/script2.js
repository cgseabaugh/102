
var prodName = prompt("Enter Product's Name:");
var prodQuant = prompt("Enter Product's Quantity:");
var prodPrice = prompt("Enter Product's Price:");


console.log(prodName + "|" + prodQuant + "|" + prodPrice);

var total = prodPrice * prodQuant;
var tax = total * .16;

var totalWithTax = total + tax;

console.log("Price including tax:" + totalWithTax);


