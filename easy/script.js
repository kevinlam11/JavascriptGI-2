// Create an array of students holding their last name, first name, and age with 3 students. To validate, please log a greeting with the first name, last name and age of the 2nd student. The output should look like "Hello, my name is John Doe and I'm 19 years old."
const students = [
  { lastName: "Lam", firstName: "Kevin", age: 26 },
  { lastName: "Jones", firstName: "Bob", age: 50 },
  { lastName: "Carter", firstName: "Alexis", age: 21 },
];
// select student 2
const secondStudent = students[1];

console.log(
  `Hello, my name is ${secondStudent.firstName} ${secondStudent.lastName} and I'm ${secondStudent.age} years old.`
);
