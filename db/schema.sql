DROP DATABASE IF EXISTS "databaseNameHere_db";
CREATE DATABASE "databaseNameHere_db";

USE "databaseNameHere_db";

CREATE TABLE "tableNameHere"(
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    "columnNameHere" VARCHAR(50) NOT NULL,
    -- the below is for when we have to deplay on heroku
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);