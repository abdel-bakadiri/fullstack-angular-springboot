var Costumer2 = /** @class */ (function () {
    function Costumer2() {
    }
    Object.defineProperty(Costumer2.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Costumer2.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Costumer2;
}());
var costumer = new Costumer2();
costumer.firstName = "abdel";
console.log(costumer.firstName);
costumer.firstName = "abdelouahab";
console.log(costumer.firstName);
