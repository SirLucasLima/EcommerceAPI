//importar router de dentro do express
const { Router } = require("express");
const UsersController = require("../controllers/UsersController");
const usersRoutes =  Router();

/*--------------- middleware ---------------/
function myMiddleware(request, response, next){
    console.log('Você chamou o middleware');


    //caso o user seja isAdmin = false
    if (!request.body.isAdmin){
        return response.json({ message: "user unauthorized" })
    }

    //para chamar a próxima função "controller.create"
    next()
}
*/

//--------------- instanciar class ---------------//
const usersController = new UsersController();

//--------------- usersRoutes ---------------//
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes