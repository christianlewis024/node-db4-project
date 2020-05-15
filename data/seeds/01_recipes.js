exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          name: "special brownies",
          instructions: "put all brownie ingredients in a bowl and mix em up",
        },
        {
          id: 2,
          name: "special cake",
          instructions: "put all  cake ingredients in a bowl and mix em up",
        },
        {
          id: 3,
          name: "special cookies",
          instructions: "put all  cookie ingredients in a bowl and mix em up",
        },
      ]);
    });
};
