// returns publicAPI which exposes getName function
// Use IIFE only when there is only one instance required for a module , 'singleton'
// 'Student' will be an instance
var Student = (function defineStudent(){    // Notice that this is an IIFE (Instantly executed function)
    var records = [
        { id: 14, name: "Kyle", grade: 86 },
        { id: 73, name: "Suzy", grade: 87 },
        { id: 112, name: "Frank", grade: 75 },
        { id: 6, name: "Sarah", grade: 91 }
    ];

    var publicAPI = {
        getName
    };

    return publicAPI;

    // ************************

    function getName(studentID) {   // this function definition gets hoisted and thus gets declared at the top, before return statement
        var student = records.find(
            student => student.id == studentID
        );
        return student.name;
    }
})();   // () at the end show that it's an IIFE

Student.getName(73);   // Suzy