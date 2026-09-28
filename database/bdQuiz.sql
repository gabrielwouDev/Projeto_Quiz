CREATE DATABASE bdQuiz

USE bdQuiz

CREATE TABLE tbUsuario(
	idUsuario 	INT PRIMARY KEY AUTO_INCREMENT,
    nome		VARCHAR(50),
    email		VARCHAR(30),
    endereco	VARCHAR(40),
    genero		VARCHAR(10),
    estado		VARCHAR(2),
    resultado	VARCHAR(15)
);