const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const PORT = 8000;
const app = express();

const desarrollo = false;
const targets = {
  characters: desarrollo ? "http://localhost:8001" : "http://characters:8001",
  films: desarrollo ? "http://localhost:8002" : "http://films:8002",
  planets: desarrollo ? "http://localhost:8003" : "http://planets:8003",
  database: desarrollo ? "http://localhost:8004" : "http://database:8004",
};

app.use(morgan("dev"));
app.use(
  "/characters",
  createProxyMiddleware({
    target: targets.characters,
    changeOrigin: true,
  })
);
app.use(
  "/films",
  createProxyMiddleware({
    target: targets.films,
    changeOrigin: true,
  })
);
app.use(
  "/planets",
  createProxyMiddleware({
    target: targets.planets,
    changeOrigin: true,
  })
);
app.use(
  "/database",
  createProxyMiddleware({
    target: targets.database,
    changeOrigin: true,
  })
);

app.listen(PORT, () =>
  console.log(`Seervise Gateway listening on port: ${PORT} `)
);
