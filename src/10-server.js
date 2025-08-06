const http=require('http');

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    res.end('Primer mensaje desde el server');
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('El servidor esta corriendo en http://127.0.0.1:3000')
})