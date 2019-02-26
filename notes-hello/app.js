const fs = require('fs');
const os = require('os');

//console.log('Hello!');

const userInfo = os.userInfo();

var user = userInfo.username;
// console.log(userInfo.username);

// Console.WriteLine($"Hello {user}");

fs.appendFileSync('greetings.txt', `Hello ${user}!`);
