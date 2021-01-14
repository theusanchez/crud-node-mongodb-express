const express = require("express");

const routes = express.Router();
const ClientController = require("./app/controller/ClientController");

routes.get("/", function(req, res) {
  return res.send("Minha primeira rota!");
});

routes.get("/client", ClientController.index);
routes.get("/client/:id", ClientController.indexById);
routes.post("/client", ClientController.store);
routes.delete("/client/:id", ClientController.delete);
routes.patch("/client/:id", ClientController.update);


module.exports = routes;