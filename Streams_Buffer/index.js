// 2nd way , Reading from a Stream. Create a readable stream.
// Handle streams events :data , end and error.


/* const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req, res)=>{
    fs.readFile('input.txt', (err, data)=>{
       if(err){
           return console.error(err);

       }
       res.end(data.toString());
     });

// 2nd way by streams and Buffer
const rstream = fs.createReadStream('input.txt');

rstream.on('data', (chunkdata)=>{
    res.write(chunkdata);
})

rstream.on('end', ()=>{
    res.end();
})

rstream.on('error', (err)=>{
    console.log(err);
    res.end('file not found');
})

 
});

server.listen(9000, "127.0.0.1",()=>{
    console.log('Listening to port 9000');
}); */




// By stream.pipe() method

/*const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res)=>{
   const stream = fs.createReadStream('input.txt');
   stream.pipe(res);


});

server.listen(9000, "127.0.0.1",()=>{
    console.log("Listening to the port 9000");
}); */

