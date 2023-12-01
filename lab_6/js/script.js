class Person {
  constructor() {
    this._firstName = "";
    this._lastName = "";
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value;
  }

  getFullName() {
    return `${this._lastName} ${this._firstName}`;
  }
}

const person = new Person();
person.firstName = "John";
person.lastName = "Doe";

document.getElementById("task1Result").innerText = person.getFullName();

const country = {
  _name: "",
  _capital: "",
  _population: 0,

  get name() {
    return this._name;
  },

  get capital() {
    return this._capital;
  },

  get population() {
    return this._population;
  },

  set name(value) {
    // Неперезаписувана властивість name
    if (!this._name) {
      this._name = value;
    }
  },

  displayInfo() {
    console.log(
      `Name: ${this._name}, Capital: ${this._capital}, Population: ${this._population}`
    );
  },
};

country.name = "Ukraine";
country._capital = "Kyiv";
country._population = 42000000;

country.displayInfo();
document.getElementById("task2Result").innerText = "Check console for output";

class MyString {
  reverse(str) {
    return str.split("").reverse().join("");
  }

  ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  ucWords(str) {
    return str
      .split(" ")
      .map((word) => this.ucFirst(word))
      .join(" ");
  }
}

const myString = new MyString();
document.getElementById("task3Result").innerText = `
  reverse('abcde'): ${myString.reverse("abcde")}
  ucFirst('abcde'): ${myString.ucFirst("abcde")}
  ucWords('abcde abcde abcde'): ${myString.ucWords("abcde abcde abcde")}
`;

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  getCourse() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

const student = new Student("Іван", "Іванов", 2019);
document.getElementById("task4Result").innerText = `
  Name: ${student.name}
  Surname: ${student.surname}
  Full Name: ${student.getFullName()}
  Year: ${student.year}
  Course: ${student.getCourse()}
`;

function MyObject() {
  if (MyObject.initialized) {
    this.property1 = "Wrong value1";
    this.property2 = "Wrong value2";
    return;
  }

  this.property1 = "value1";
  this.property2 = "value2";

  MyObject.initialized = true;
}

let obj = new MyObject();
let obj2 = new obj.constructor();

document.getElementById("task5Result").innerText = JSON.stringify(obj) + "\n";
document.getElementById("task5Result").innerText += JSON.stringify(obj2);
