//http
let http = require('http')

// Server created

let server = http.createServer((req,res)=>{
     res.write("Server Createdd")
          res.write("  hiii")
     res.end()

})

// Listen the server

server.listen(4040,()=>console.log("Server running in PORT 4040"))