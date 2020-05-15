const db = require("./db-config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("ingredients as i", "i.ingredient", "i.id")
    .join("recipe_ingredients as ri", "ri.recipe_id", "ri.ingredient_count")
    .select("i.ingredient", "ri.ingredient_count")
    .where("ri.recipe_id, recipe_id");
}

module.exports = {
  getRecipes,
  getShoppingList,
};
