/*event node*//*Write to the console when the file is opened:*/
/*
var fs = require('fs');

var readStream = fs.createReadStream('./demofile.txt');


readStream.on('open', function () {
  console.log('The file is open');
});
*/
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I eat a khobz!');
}

//Assign the event handler to an event:
eventEmitter.on('khobz', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('khobz');