const express = require("express");

const app = express();
const routes = require("./Routes/index");

app.use(routes);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`server is listening on localhost:${port}`);
});
