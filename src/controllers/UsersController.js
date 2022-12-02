/**
 * index - GET para listar vários registros
 * show - HET exibit registro especifico
 * create - POST para criar registro
 * update - PUT para atualizar o registro
 * delete - DELETE para remover registro
 */

const AppError = require('../utils/AppError')

class UsersController {
    create(request, response) {
        const { name, email, password }  = request.body;

        if(!name){
            throw new AppError("Name is required!");
        }

        response.send({ name, email, password });
    }

}

module.exports = UsersController;