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

CREATE TABLE tbRespostas(
	idRespostas		INT PRIMARY KEY AUTO_INCREMENT,
	resposta1		VARCHAR(100),
    resposta2		VARCHAR(100),
    resposta3		VARCHAR(100),
    resposta4		VARCHAR(100),
    resposta5		VARCHAR(100),
    idUsuario		INT,
    FOREIGN KEY (idUsuario) REFERENCES tbUsuario (idUsuario)
)

SELECT Usuario.idUsuario , Respostas.resposta1, Respostas.resposta2, Respostas.resposta3, Respostas.resposta4, Respostas.resposta5 FROM tbRespostas AS Respostas
	INNER JOIN tbUsuario AS Usuario
		ON respostas.idUsuario = Usuario.idUsuario;


SELECT*FROM tbRespostas;
SELECT*FROM tbUsuario;


