const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const server = express();

//Body-parser
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost/tindev", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("conectado ao banco MONGODB");
  })
  .catch(err => {
    console.log("error ao conectar no banco " + err);
  });

server.use(routes); // passando arquivos de rotas

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("server startado, na porta: " + PORT);
});
