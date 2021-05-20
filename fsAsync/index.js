/*const fs = require("fs");
fs.writeFile("dk.txt", "I want to start my career as Full Stack Developer :)" , 
 (err)=>{
  console.log("data inserted successfully");
});

fs.appendFile("dk.txt", ". as a Python or Web:)" , 
 (err)=>{
  console.log("data inserted successfully");
});

fs.readFile("dk.txt", "utf8", (err, data)=>{
console.log(data);
});*/

// File System Asynchronus
/* const fs = require("fs");
fs.mkdir("deepak", (err)=>{
    console.log('Folder Created..');
});

fs.writeFile("./deepak/bio.txt", "My Name is Jai Kumar",(err)=>{
  console.log('Files Created');
});

fs.appendFile("./deepak/bio.txt", "My Name is Jai Kumar and I am 25 years old", (err)=>{
  console.log('Data appended');
})

fs.readFile("./deepak/bio.txt","utf-8", (err,data)=>{
  console.log(data)
});

fs.rename("./deepak/bio.txt", "./deepak/MyBio.txt", (err)=>{
  console.log('File Rename Successfully');
});

fs.unlink("./deepak/MyBio.txt", (err)=>{
  console.log("Files DEleted....")
});

fs.rmdir("./deepak" , (err)=>{
  console.log('Folder Deleted....');
}); */


const fs = require("fs");
fs.writeFile("myDk.txt","Hello Asychronus" ,(err)=>{
  console.log('Data inserted');
});
