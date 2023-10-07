const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;

// -------------------create file (make file)--------------------

// fs.writeFileSync( filePath, "this is a first path");

// ---------------------read file -------------------------

// fs.readFile(filePath,'utf-8',(err,item)=>{
// console.log(item)
// })

// --------------------------------update file-----------------

// fs.appendFile(filePath, "  file name is apple.txt", (err)=>{
// if (!err) 
//     console.log("file is updated");
// })

// ------------------------------rename file ----------------------
// fs.rename(filePath, `${dirPath}/banana.txt`, (err)=>{
// if(!err)console.log("file name is updated");
// })


// ------------------------------delete file --------------
fs.unlinkSync(`${dirPath}/banana.txt`);





















