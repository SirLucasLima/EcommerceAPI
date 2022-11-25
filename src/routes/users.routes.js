const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes =  Router();

//--------------- instanciar class ---------------//
const usersController = new UsersController();

//--------------- usersRoutes ---------------//
usersRoutes.post("/", usersController.create);

module.exports = usersRoutes