const http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("New Home Page")
    }
    else if(req.url==="/newabout"){
        res.write("New about Page")
    }
    else if(req.url==="/newcontact"){
        res.write("New contact Page")
    }
    res.end()
}).listen(3000)