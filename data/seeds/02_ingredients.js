exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ing_name: "one cup of milk" },
        { id: 2, ing_name: "one cup of flower" },
        { id: 3, ing_name: "Egg" },
        { id: 4, ing_name: "1tbs of salt" },
        { id: 5, ing_name: "one cup of sugar" },
      ]);
    });
};
