 
var events = require('events');
var url = require('url'); 
var http = require('http');
 
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I eat a khobz!');
}

//Assign the event handler to an event:
eventEmitter.on('khobz', myEventHandler);



http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

            var q = url.parse(req.url, true);
    
            var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
            if(qdata.year==2017){
                        //Fire the 'scream' event:
               var x= eventEmitter.emit('khobz'); 
                res.write( x+'  khobz ja');
                res.end();
            }else{

                
            }


   
}).listen(8080);


