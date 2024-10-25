class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;
  
    constructor(name: string, salary: number, position: string, department: string) {
      this.name = name;
      this.salary = salary;
      this.position = position;
      this.department = department;
    }
  
    public getEmployeeInfo(): string {
      return `Employee Name: ${this.name}, Position: ${this.position}`;
    }
  }
  
  const emp = new Employee("Alice", 50000, "Developer", "IT");
  console.log(emp.getEmployeeInfo());
  