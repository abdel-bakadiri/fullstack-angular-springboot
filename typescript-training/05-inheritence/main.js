"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectancgle_1 = require("./rectancgle");
var circle_1 = require("./circle");
var circle = new circle_1.Circle(12, 10, 35);
var rectangle = new rectancgle_1.Rectangle(10, 10, 50, 50);
console.log(circle.getInfo());
console.log(rectangle.getInfo());
