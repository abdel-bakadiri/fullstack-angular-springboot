import { Shape } from "./shape";
export class Circle extends Shape {
  constructor(theX: number, theY: number, private _radius: number) {
    super(theX, theY);
  }
  getInfo(): string {
    return super.getInfo() + ` y: ${this._radius}`;
  }
  calculArea(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }
}
