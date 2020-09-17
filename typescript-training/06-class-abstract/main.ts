import { Rectangle } from "./rectangle";
import { Circle } from "./circle";
import { Shape } from "./shape";
const shapeArray: Shape[] = [];
const circle = new Circle(10, 10, 120);
const rectangle = new Rectangle(10, 10, 120, 150);

shapeArray.push(circle);
shapeArray.push(rectangle);

shapeArray.forEach((shape) => {
  console.log(shape.getInfo());
  console.log(shape.calculArea());
  console.log();
});
