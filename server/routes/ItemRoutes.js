const express = require("express");
const router = express.Router()
const Item = require('../models/Item')


// Get Items
router.get("/", async (req, res)=>{

    try {
        const itemget = await Item.find({}).sort({date: -1});
        res.status(200).send(itemget);
    } catch (error) {
        res.json({msg: error.message})
    }
});

// Get specific Items
router.get("/:id", async (req, res)=>{

    try {
        const _id = req.params.id
        const itemget = await Item.findById(_id)
        res.status(200).send(itemget);
    } catch (error) {
        res.json({msg: error.message})
    }
});
// Create Items
router.post("/", async (req, res)=>{
    const items = new Item({
        name : req.body.name,
        price : req.body.price,
      
    });

    try {
        const itemsaved = await items.save();
        res.status(200).send(itemsaved);
    } catch (error) {
        res.json({msg: error.message})
    }
});

// Update Items
router.patch("/:id", async (req, res)=>{

    try {
        const updateItem = await Item.updateOne({_id:req.params.id}, {$set:{name:req.body.name}});

        res.status(200).send(updateItem);
    } catch (error) {
        res.json({msg: error.message})
    }
});
// Delete Items
router.delete("/:id", async (req, res)=>{

    try {
        const _id = req.params.id
        const deleteItem = await Item.findByIdAndDelete(_id);

        res.status(200).send(deleteItem);
    } catch (error) {
        res.json({msg: error.message})
    }
});
module.exports  = router