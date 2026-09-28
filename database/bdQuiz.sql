CREATE DATABASE bdQuiz

USE bdQuiz

CREATE TABLE tbUsuario(
	idUsuario 	INT PRIMARY KEY AUTO_INCREMENT,
    nome		VARCHAR(50),
    email		VARCHAR(30),
    endereco	VARCHAR(40),
    genero		VARCHAR(10),
    estado		VARCHAR(2),
    resposta1  VARCHAR(100),
    resposta2  VARCHAR(100),
    resposta3  VARCHAR(100),
    resposta4  VARCHAR(100),
    resposta5  VARCHAR(100),
    resultado	VARCHAR(15)
);


SELECT*FROM tbUsuario;


