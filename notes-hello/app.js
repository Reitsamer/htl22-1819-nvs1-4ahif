const fs = require('fs');
const os = require('os');

//console.log('Hello!');

const userInfo = os.userInfo();

console.log(userInfo.username);

fs.appendFileSync('greetings.txt', 'Hello!');
