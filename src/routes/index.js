const { Router } = require("express");

const usersRouter = require("./users.routes") 

//toda vez que alguém acessar /users será direcionado para o usersRoutes
const routes = Router();
routes.use("/users", usersRouter)


module.exports = routes;
