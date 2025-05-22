// * ===============================================
// * Interview Question - Object Manipulation:
// * ================================================
// ! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

let student = {
  name: "Bob",
  age: 20,
  grades: {
    math: 90,
    science: 85,
    history: 88,
  },
};

const addSubjectGrade = (student, subject, marks) => {
  if (!student.grades) {
    student.grades = {};
  }

  return (student.grades[subject] = marks);
};

addSubjectGrade(student, "computer", 92);
console.log(student);