/*const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res)=>{
const data = fs.readFileSync(`${__dirname}/userAPI/user.json`,"utf8");
const jsonData = JSON.parse(data);

    // console.log(req.url);
   if(req.url == "/"){
     res.end('This is Home Page');
   }else if(req.url == "/userapi"){
    res.writeHead(200, {"Content-type": "application/json"});
    res.end(jsonData[0].name);
   }
   else{
     res.writeHead(404, {"Content-type":"text/html"});
    res.end('<h1>404 Error! Page not found..</h1>');
   }
     
    res.end('Hey Deepak our server is running:)');
});

server.listen(9000, '127.0.0.1',()=>{
  console.log('Listening 9000 port running! Hurray all done');
});*/

