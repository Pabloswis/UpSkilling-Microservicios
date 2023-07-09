const server = require("./src/server");
const PORT = 8004;

server.listen(PORT, () =>
  console.log(`service database listening on port: ${PORT}`)
);
