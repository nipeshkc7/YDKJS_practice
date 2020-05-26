// outer/global scope: RED(1)


// studentId and students closes over greetStudent

function lookupStudent(studentID) {
  // function scope: BLUE(2)

  var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" },
  ];

  return function greetStudent(greeting) {
    // function scope: GREEN(3)

    var student = students.find((student) => student.id == studentID);

    return `${greeting}, ${student.name}!`;
  };
}

var chosenStudents = [lookupStudent(6), lookupStudent(112)];
// Creates two separate instances of lookupStudent, closing over the variables studentId and students !!

// accessing the function's name:
chosenStudents[0].name;
// greetStudent

chosenStudents[0]("Hello");
// Hello, Sarah!

chosenStudents[1]("Howdy");
// Howdy, Frank!
