
import express from "express";

const storeRouter = express.Router();

storeRouter.get("/", async (req, res) => {
  const db = await req.app.get("db")("stores");
  const stores = await db.find().toArray();
  res.json(stores);
});

storeRouter.get("/:store_id", async (req, res) => {
  const db = await req.app.get("db")("items");
  const storeById = await db.find({store_id: req.params.store_id}).toArray();
  res.json(storeById);
});

export default storeRouter;