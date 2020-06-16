// GLOBAL: pink

var getUser =(function theMegaFunction(){
    // RED
    var users = ["Arpan", "Jason", "Bourne"]; // Red Marble
    return function getUser(userName /*Blue marble*/){
        //BLUE
        for(user/*Green marble*/ of users){
            //Green
            if(user === userName){
                //Yellow
                let userName = `found:${user}`; //Yellow marble and shadows userName
                return userName;
            }
        }

    }

})();

console.log(getUser("Bourne"));