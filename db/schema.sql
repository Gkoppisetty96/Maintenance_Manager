DROP DATABASE IF EXISTS task_db;
CREATE DATABASE task_db;

USE task_db;

CREATE TABLE tasks(
	id INT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY(id),
    name VARCHAR(30) NOT NULL,
    zone VARCHAR(20) NOT NULL,
    unit_number VARCHAR(40),
    problem VARCHAR(25) NOT NULL,
	note TEXT(250) NOT NULL,
	completed BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    severity INT
);