"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(theX, theY, _width, _height) {
        var _this = _super.call(this, theX, theY) || this;
        _this._width = _width;
        _this._height = _height;
        return _this;
    }
    Rectangle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + (", width: " + this._width + ", height:" + this._height);
    };
    Rectangle.prototype.calculArea = function () {
        return this._width * this._height;
    };
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
