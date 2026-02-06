// let stuff = require('./stuff');

// console.log(stuff.counter(['shaun', 'crystal', 'ryu']));
// console.log(stuff.adder(5, 6));
// console.log(stuff.adder(stuff.pi, 5));

// const events = require('events');
// const util = require('util');

// let Person = function(name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// let shaun = new Person('shaun');
// let crystal = new Person('crystal');
// let ryu = new Person('ryu');

// const people = [shaun, crystal, ryu];

// people.forEach(function(person){
//     person.on('speak', function(msg){
//         console.log(person.name + ' said: ' + msg);
//     });
// });

// shaun.emit('speak', 'hey dudes');

// crystal.emit('speak', 'I am crystal');

// ryu.emit('speak', 'I am ryu');

// const fs = require('fs/promises');


// async function createFile() {
//     try {
//         await fs.mkdir('test');
//         const data = await fs.readFile('readMe.txt', 'utf8');
//         await fs.writeFile('./test/writeMe.txt', data);
//     } catch (err) {
//         console.error(err);
//     }
// }

// createFile();

// create server and request

const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});