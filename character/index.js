const server = require("./src/server");

const PORT = 8001;

server.listen(PORT, () => console.log(`server escuchando en puerto ${PORT}`));
