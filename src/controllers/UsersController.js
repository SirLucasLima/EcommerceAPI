/**
 * index - GET para listar vários registros
 * show - HET exibit registro especifico
 * create - POST para criar registro
 * update - PUT para atualizar o registro
 * delete - DELETE para remover registro
 */

class UsersController {
    create(request, response) {
        const { name, email, password }  = request.body;

        response.send({ name, email, password });
    }

}

module.exports = UsersController;