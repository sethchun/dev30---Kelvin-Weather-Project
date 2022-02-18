// This is the temperature in Kelvin
const kelvin = 293;

// This converts Kelvin temp to Celsius
let celsius = kelvin - 273;

// This converts Celsius to Fahrenheit, and rounds the result down to the nearest whole number
let fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Extra Practice:

// This converts Celsius to Newton, and rounds the result down to the nearest whole number
let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton`);
