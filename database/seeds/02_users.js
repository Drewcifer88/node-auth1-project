
exports.seed = function (knex) {

  const users = [
    {
      username: "John",
      password: "123password",
      role: 1,
    },
    {
      username: "admin",
      password: "admin123.",
      role: 1,
    },
    {
      username: "David",
      password: "123david",
      role: 2,
    },
    {
      username: "Drew",
      password: "teacher123",
    },
    {
      username: "Cathy",
      password: "123321qwe",
    },
  ];

  return knex("users").insert(users);
};