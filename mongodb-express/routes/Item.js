//import mongoose from 'mongoose'

// var storeCollection = new mongoose.Schema({
//     name: {type: String, required: true},
//     location: {type: String, required: true}
// })
import express from "express";

const itemRouter = express.Router();

itemRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("items");
  const itemById = await db.find({store_id: req.params.store_id}).toArray();
  res.json(itemById);
});

itemRouter.get("/:item_id", async (req, res) => {
  const db = await req.app.get("db")("items");
  const itemId = req.params.item_id;
  const storeId = req.params.store_id
  const item = await db.findOne({ _id: itemId, store_id: storeId });
  res.json(item);
});


itemRouter.post("/", async (req, res) => {
    const db = await req.app.get("db")("items");
    const createdItem = req.body;

    try{
      await db.insertOne(createdItem);
      res.sendStatus(201);
  }catch(e){
      console.log(e)
  }
  });

  export default itemRouter;