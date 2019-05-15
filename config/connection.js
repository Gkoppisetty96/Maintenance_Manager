// This code is for deployment on JawsDB. I am not sure how this changes since we are required to use sequelize.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: ""
    })
};
connection.connect();
module.exports = connection;

// use the below code if the we are doing local host, or not using JawsDB
// This is the sequlize code
var Sequelize = require("sequelize");
var sequelize = new Sequelize("sequelize_chirpy", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports = sequelize;


