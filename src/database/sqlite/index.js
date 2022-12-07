const sqlite = require("sqlite")
const sqlite3 = require("sqlite3");
const path = require("path")

//async function para não ter problema na hora de gerar o banco de dados ou até mesmo procurar o banco de dados já gerado
async function sqliteConnection() {
    const database = await sqlite.open({
        //usar o path para resolver o problema de navegação de pastas, pois os sistemas operacionais variam 
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });

    return database
}

module.exports = sqliteConnection;
