const http = require('http');
http.createServer((req,resp)=>{
    resp.write("hello raju ");
    resp.end();
}).listen(49);