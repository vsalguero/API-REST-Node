const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; //TODO: Ruta absoluta

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = removeExtension(file); //TODO: users, storage, movies...
  if (name != "index") {
    console.log(name, file);
    router.use(`/${name}`, require(`./${file}`)); //TODO: http://localhost:3000/api/users
  }
});

module.exports = router;
