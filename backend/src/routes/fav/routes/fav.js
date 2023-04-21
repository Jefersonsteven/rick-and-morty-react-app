const Fav = require("../services/fav");
const newFav = new Fav();
const express = require("express");
const fav = express.Router();

fav.post("/", async (req, res) => {
  try {
    const favorite = await newFav.addFavorite(req, res);
    res.status(201).json({
      message: 'Add',
      data: favorite
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

fav.get("/", async (req, res) => {
  try {
    const favorites = await newFav.findFavorites();
    res.json(favorites);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

fav.delete("/:id", async (req, res) => {
  try {
    const id = await newFav.deleteFavorites(req, res);
    res.json({
      message: "deleted",
      id: id,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

module.exports = fav;
