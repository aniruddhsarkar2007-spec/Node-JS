
let fs = require('fs')

// fs.writeFile("Firstfile.txt","THIS IS NEW FILE CREATED BY FS MODULE",(er)=>{
//     if(er){
//         console.log("File not created")
//     }
//     else{
//         console.log("File created...")
//     }
// })

// fs.writeFile("Firstfile.txt","Hello from Node Js",(e)=>{
//      if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log("Success...")
//     }
// })

// fs.readFile("Firstfile.txt","utf-8",(e,data)=>{
//     if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log(data)
//     }
// })

// // appendfile

// fs.appendFile("Firstfile.txt","Another text added",(e)=>{
//           if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log("Success")
//     }
// })


// fs.writeFile("Newfile.txt","new file is created",(e)=>{
//         if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log("File is created")
//     }
// })

// fs.readFile("Newfile.txt","utf-8",(e,data)=>{
//         if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log(data)
//     }
// })

// fs.appendFile("Newfile.txt"," Adding another text ",(e)=>{
//         if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log("Success")
//     }
// })

// fs.mkdir("new folder",(e)=>{
//         if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log("Created")
//     }
// })

// fs.writeFile("new folder/hii.txt","Hello guys",(e)=>{
//         if(e){
//         console.log("Error",e)
//     }
//     else{
//         console.log("Created")
//     }
// })

// fs.unlink("new folder/hii.txt",(e)=>{
    //     if(e){
    //     console.log("Error",e)
    // }
    // else{
    //     console.log("deleted")
    // }
// })


fs.writeFile("Practice.txt","Hii i am practicing",(e)=>{
     if(e){
        console.log("Error",e)
    }
    else{
        console.log("File is created")
    }
})

fs.readFile("Practice.txt","utf-8",(e,data)=>{
     if(e){
        console.log("Error",e)
    }
    else{
        console.log(data)
    }
})

fs.appendFile("Practice.txt"," the new text is added",(e,data)=>{
     if(e){
        console.log("Error",e)
    }
    else{
        console.log("Success")
    }
})