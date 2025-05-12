
const Animal = require('./ooptest');

const ani = new Animal();
console.log("2x : ", ani.x);
console.log("2y : ", ani.y);
ani.move(5, 5);
console.log("2x : ", ani.x);
console.log("2y : ", ani.y);