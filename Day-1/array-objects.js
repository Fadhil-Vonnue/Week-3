const employees = [
  { name: "emp1", dept: "Plumber", salary: 15000, yearsExp: 2 },
  { name: "emp2", dept: "Engineering", salary: 75000, yearsExp: 2 },
  { name: "emp3", dept: "Engineering", salary: 95000, yearsExp: 2 },
  { name: "emp4", dept: "Plumber", salary: 45000, yearsExp: 2 },
  { name: "emp5", dept: "Engineering", salary: 65000, yearsExp: 2 },
  { name: "emp6", dept: "Plumber", salary: 75000, yearsExp: 2 },
  { name: "emp7", dept: "Engineering", salary: 85000, yearsExp: 2 },
  { name: "emp8", dept: "Architect", salary: 85000, yearsExp: 2 },
  { name: "emp9", dept: "Engineering", salary: 95000, yearsExp: 7 },
  { name: "emp10", dept: "Engineering", salary: 55000, yearsExp: 2 },
  { name: "emp11", dept: "Engineering", salary: 75000, yearsExp: 3 },
  { name: "emp12", dept: "Architect", salary: 75000, yearsExp: 2 },
  { name: "emp13", dept: "Engineering", salary: 105000, yearsExp: 4 },
  { name: "emp14", dept: "Engineering", salary: 75000, yearsExp: 2 },
  { name: "emp15", dept: "Architect", salary: 175000, yearsExp: 9 },
  { name: "emp16", dept: "Architect", salary: 75000, yearsExp: 2 },
  { name: "emp17", dept: "Engineering", salary: 63000, yearsExp: 5 },
  { name: "emp18", dept: "Plumber", salary: 45000, yearsExp: 1 },
  { name: "emp19", dept: "Architect", salary: 15000, yearsExp: 2 },
  { name: "emp20", dept: "Plumber", salary: 85000, yearsExp: 7 },
];
const emp = employees
  .filter((employee) => {
    return employee.dept == "Engineering" && employee.salary > 70000;
  })
  .map((object) => {
    return {
      name: object.name,
      salary: object.salary,
    };
  })
  .sort((a, b) => b.salary - a.salary);
console.log(emp);

const input = {
  name: "Mansi",
  age: 25,
  department: {
    name: "Customer Experience",
    section: "Technical",
    branch: {
      name: "Bangalore",
      timezone: "IST",
    },
  },
  company: {
    name: "SAP",
    customers: ["Ford", "Nestle"],
  },
  skills: ["javascript", "node.js", "html"],
};

const new1 = ({
  name,
  age,
  department: {
    name: department_name,
    section: department_section,
    branch: { name: dept_branch_name, timezone: dept_branch_timezone },
  },
  company: { name: company_name, customers: company_customers },
  skills,
} = input);
console.log(company_name);

const obj1 = { name: "emp1", dept: "Plumber", salary: 15000, yearsExp: 2 };
const obj2 = { bar: "baz", y: 13 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);
console.log(Object.entries(mergedObj))
console.log(Object.keys(mergedObj))
console.log(Object.values(mergedObj))


const clone = structuredClone(mergedObj);
console.log(mergedObj);
console.log(clone);
clone.name="clone_name"
console.log(clone);