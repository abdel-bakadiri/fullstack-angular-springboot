class User {
  // sortcut contructor using parametrs proprities
  constructor(private _firstName, private _lastName) {}
  public get firstName() {
    return this._firstName;
  }
  public set firstName(value) {
    this._firstName = value;
  }
  public get lastName() {
    return this._lastName;
  }
  public set lastName(value) {
    this._lastName = value;
  }
}

let user = new User("Abdel", "BAKADIRI");
console.log(user.firstName);
console.log(user.lastName);
