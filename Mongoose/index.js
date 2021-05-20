const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/practice", {useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log("MongoDB connection successful...."))
.catch((err) =>console.log(err));

// Creating Schema
const mySchema = new mongoose.Schema({
    name:{type:String},
    age:{type:String},
    position:{type:String},
    isActive:{type:Boolean},
    date:{type:Date, default:Date.now}
});

// Declaring Model
const MyPractice  = new mongoose.model("MyPractice", mySchema);
 
// Inserting document
/*const dataShow = async () =>{
    try{
        const myAnuj = new MyPractice({
        name:"Dhiraj Kumar ",
        age:27,
        position:"Software Developer",
        isActive:true
      });
       
       const result = await myAnuj.save();
       console.log(result);
    }catch(err){
        console.log(err);
    }
}
dataShow();*/


// Reading Documents from database
/*const readDocument = async () =>{
    try{
          const result = await MyPractice.find({position:"Full Stack Developer"})
          .select({name:1})

          console.log(result);
    }catch(err){
        console.log(err);
    }
}
readDocument();*/

/*const readDocument = async () =>{
    try{
          const result = await MyPractice.find({age:26})
          .select({name:1})
          .sort("name: 1")
          console.log(result);
    }catch(err){
        console.log(err);
    }
}
readDocument();*/


// Update Documents

/*const updateDocument = async (_id) =>{
    try{
        const update = await MyPractice.findByIdAndUpdate({_id}, 
            {$set:{position:"Software Developer"}},{
                useUnifiedTopology:false
            } );

        console.log(update);
        
    }catch(err){
        console.log(err);
    }
}
updateDocument("5fa16ccbc129951f20653004");*/



// Delete Documents

/*const deleteDocument = async (_id) =>{
    try{
      const deleteData = await MyPractice.findByIdAndDelete({_id});
      console.log(deleteData);
    }catch(err){
        console.log(err);
    }
}

deleteDocument("5fa3979d2ff3fb1838a2c4dd");*/