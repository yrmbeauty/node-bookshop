const app = require("./app");
const CONFIG = require("./config/default.json");

const PORT = CONFIG.PORT || 4000;

const server = (PORT) =>
  app.listen(PORT, (err) => {
    if (err) {
      return console.log("server falls", err);
    } else {
      return console.log(`server is running on ${PORT}`);
    }
  });

server(PORT);
