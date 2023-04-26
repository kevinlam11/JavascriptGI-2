// Given the information below for Tom and Jerry.
// Tom - 	height:  9in   	mass: 8 g
// Jerry - 	height: 10in 	mass: 45 g
// Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below:
// Store Tom & Jerry’s mass and height as variables.
var tomH = 9;
var tomM = 8;
var jerryH = 10;
var jerryM = 45;
// Calculating the BMI
const tomBMI = tomM / (tomH / 12) ** 2;
const jerryBMI = jerryM / (jerryH / 12) ** 2;
//  Boolean variable containing information about whether Tom has a higher BMI than Jerry.
const tomHasHigherBMI = tomBMI > jerryBMI;
console.log(`Is Tom's BMI higher than Jerry's? ${tomHasHigherBMI}`);
