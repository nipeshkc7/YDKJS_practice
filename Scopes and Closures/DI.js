// Technically not from YDKJS
// But useful topic nonetheless


const User = require("./User");

// instead of require('usersRepository') we can pass it as a parameter
// into a closure, this makes the code more testable and decoupled
function UsersService(usersRepository) {
  async function getUsers() {
    return usersRepository.findAll();
  }

  async function addUser(userData) {
    const user = new User(userData);

    return usersRepository.addUser(user);
  }

  return {
    getUsers,
    addUser,
  };
}

module.exports = UsersService;
