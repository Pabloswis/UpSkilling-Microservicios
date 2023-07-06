const server = require("./src/server");
const PORT = 8004;

// const { Character, Film, Planet } = require("./src/database");
// Character.insert({
//   _id: "204",
//   name: 234,
//   birth_year: "1993",
// }).then((res) => console.log(res));

// Planet.list().then((res) => console.log(res));
// Planet.get(1).then((res) => console.log(res));
// Planet.insert({
//   _id: "200",
//   name: "Marte",
//   diameter: "209",
// }).then((res) => console.log(res));

// Film.list().then((res) => console.log(res));
// Film.get(1).then((res) => console.log(res));
// Film.insert({
//   _id: "200",
//   title: "pelicula de soy henry",
//   director: "Pablo",
// }).then((res) => console.log(res));

server.listen(PORT, () =>
  console.log(`service database listening on port: ${PORT}`)
);
