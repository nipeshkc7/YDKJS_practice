var studentName = "Kyle";

{
    //TDZ demonstration
    // let studentName is hoisted to the top, however it does not get initialized 
    // thus it throws an error that it cannot be accessed before initialization 'TDZ'
    console.log(studentName);

    let studentName = "Suzy";

    console.log(studentName);
    // Suzy
}