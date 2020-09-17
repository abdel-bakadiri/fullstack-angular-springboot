import { Shape } from "./shape";
export class Circle extends Shape {
  constructor(theX: number, theY: number, private _radius: number) {
    super(theX, theY);
  }
  getInfo(): string {
    return super.getInfo() + `, z : ${this._radius}`;
  }
}
