"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rectangle_1 = require("./rectangle");
var circle_1 = require("./circle");
var shapeArray = [];
var circle = new circle_1.Circle(10, 10, 120);
var rectangle = new rectangle_1.Rectangle(10, 10, 120, 150);
shapeArray.push(circle);
shapeArray.push(rectangle);
shapeArray.forEach(function (shape) {
    console.log(shape.getInfo());
    console.log(shape.calculArea());
    console.log();
});
