class Costumer2 {
  private _firstName: string;
  private _lastName: string;
  constructor() {}
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(firstName: string) {
    this._firstName = firstName;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

let costumer = new Costumer2();
costumer.firstName = "abdel";
console.log(costumer.firstName);
costumer.firstName = "abdelouahab";
console.log(costumer.firstName);
