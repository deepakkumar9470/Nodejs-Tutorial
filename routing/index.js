/*const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
    // console.log(req.url);
   if(req.url == "/"){
     res.end('This is Home Page');
   }else if(req.url == "/about"){
    res.end('This is About Page');
   }else{
     res.writeHead(404, {"Content-type":"text/html"});
    res.end('<h1>404 Error! Page not found..</h1>');
   }
     
    res.end('Hey Deepak our server is running:)');
});

server.listen(5000, '127.0.0.1',()=>{
  console.log('Listening 9000 port running! Hurray all done');
});*/