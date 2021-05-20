require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000
const app = express();
const ItemModel = require('./models/Item')
const itemRouter = require('./routes/ItemRoutes')
app.use(express.json())

app.use('/todo',itemRouter)

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}, ()=>{
    console.log("MongoDB Connection Successful....");
})
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`);
});