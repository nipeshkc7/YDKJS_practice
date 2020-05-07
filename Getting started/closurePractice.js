function range(start, end) {
    // 'start' closes over funct
    start = Number(start) || 0;
    if (end === undefined) {
        return function getEnd(end) {    //this function keeps a copy of 'start'
            return getRange(start,end);
        }
    }
    end = Number(end) || 0;
    return getRange(start,end);
}

function getRange(start,end){   //enclosed this piece in function
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

range(3, 3);    // [3]
range(3, 8);    // [3,4,5,6,7,8]
range(3, 0);    // []

var start3 = range(3);
var start4 = range(4);
start3(3);     // [3]
start3(8);     // [3,4,5,6,7,8]
start3(0);     // []

start4(6);     // [4,5,6]