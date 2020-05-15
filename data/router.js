const express = require("express");

const Recipe = require("./model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipe.getRecipes()
    .then((recipes) => {
      res.json(recipes);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get recipes" });
    });
});
router.get("/:id/shoppinglist", (req, res) => {
  const { id } = req.params;
  Recipe.getShoppingList(id)
    .then((recipe_ingredients) => {
      res.json(recipe_ingredients);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get shopping list" });
    });
});

module.exports = router;
