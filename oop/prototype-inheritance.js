function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Manager.prototype = Employee.prototype; (contoh salah)

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};

const employee = new Employee("AgentA");
employee.sayHello("AgentB");

const manager = new Manager("AgentC");
employee.sayHello("AgentB");

console.info(employee);
console.info(manager);
