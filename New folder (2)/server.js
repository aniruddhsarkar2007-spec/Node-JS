// const http=require("http")
// http.createServer((req,res)=>{
// res.write("<h1>hello this is my 1000 server port</h1>")
// res.end()

// }).listen(1000)

const http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("Home page")
    }
    else if(req.url==="/about"){
        res.write("About Page")
    }
    else if(req.url==="/contact"){
        res.write("contact Page")
    }
    else if(req.url==="/service"){
        res.write("service Page")
    }
   res.end();
}).listen(1000);