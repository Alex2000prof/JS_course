type Person = {
    name: string;
    age: number;
  };
  
  type Job = {
    position: string;
    department: string;
  };
  
  type Employee = Person & Job;
  
  function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
      return `${employee.name} works as a Manager in the ${employee.department} department.`;
    } else if (employee.position === "Developer") {
      return `${employee.name} works as a Developer in the ${employee.department} department.`;
    }
    return `${employee.name} works as a ${employee.position} in the ${employee.department} department.`;
  }
  
  const employee1: Employee = {
    name: "Bob",
    age: 40,
    position: "Manager",
    department: "Sales"
  };
  
  console.log(describeEmployee(employee1));
  