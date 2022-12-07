const express = require("express");
const AppError = require("./utils/AppError");
const routes = require("./routes")
const migrationsRun = require("./database/sqlite/migrations")

const app = express();
app.use(express.json());

app.use(routes);

migrationsRun();

app.use(( error, request, response, next) => {
    //if a instancia do erro for do "AppError" (erro do cliente)
    if(error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    //if o erro não for do cliente
    return response.status(500).json({
            status: "error",
            message: "Internal server error."
    })

    console.error(error);

});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));





