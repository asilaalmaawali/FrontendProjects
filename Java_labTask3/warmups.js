
const employee	={name:"Sara",manager:null};
console.log(employee.manager?.name); // undefined


const settings = {};
const theme = settings.theme ?? "light"; // default light

console.log(theme);

const discount = 0;

const usingOR = discount || 10;
const usingNullish = discount ?? 10;

console.log(usingOR);      // 10
console.log(usingNullish); // 0

//2.2	—	Classes
//for inhertance
class Employee { constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    introduce() {return `Hi, I am ${this.name}. I am a ${this.role}.`;}
}

class Manager extends Employee {
    constructor(name, role, teamSize) {
        super(name, role);
        this.teamSize = teamSize;
    }

    introduce() {
        return `Hi, I am ${this.name}. I manage ${this.teamSize} people.`;
    }
}

const staffMember = new Employee("Sara", "Developer");
const teamManager = new Manager("Ahmed", "Manager", 10);

console.log(staffMember.introduce());
console.log(teamManager.introduce());