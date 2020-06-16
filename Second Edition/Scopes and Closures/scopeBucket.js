// Lexical scope defines how variables are accessed during runtime and which variables are accessd in which scope

var students = [
  { id: 14, name: "kylle" }, // GLOBAL SCOPE
  { id: 73, name: "mac" },
  { id: 122, name: "donald" },
  { id: 6, name: "Suzy" },
];

function getStudentName(studentID) {
  // INNER: FUNCTION SCOPE
  for (let student of students) {
    // INNER: LOOP SCOPE
    if (student.id == studentID) {
      return student.name;
    }
  }
}

var nextStudent = getStudentName(73); //FUNCTION SCOPE

console.log(nextStudent);
// mac
