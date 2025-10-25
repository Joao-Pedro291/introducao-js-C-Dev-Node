/*DDL - Sigla para Data Definition Language
		Linguagem de definição de dados
        
Ou seja, é usada para estruturar Bancos de dados com suas tabelas.
*/

/*padrão de nomenclatura será: snake case*/

CREATE DATABASE db_biblioteca; -- comando que cria um banco de dados

USE db_biblioteca;

CREATE TABLE tb_livro(
	id_livro INT AUTO_INCREMENT PRIMARY KEY,
	titulo varchar(255) NOT NULL,
	autor varchar(255) NOT NULL,
	ano_publicação date NOT NULL
);

CREATE TABLE tb_cliente(
	id_cliente INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255) NOT NULL ,
    data_nascimento DATE NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    CPF INT(14) NOT NULL UNIQUE,
    telefone char(13) NULL,
    celular char(14) NOT NULL UNIQUE
);

-- DQL
SELECT * FROM tb_cliente;
SELECT * FROM tb_livro;

-- DML
INSERT INTO tb_cliente(nome, data_nascimento, endereco, telefone, celular, email, CPF)
VALUES("João", 2007-05-13, "Rua Jairo Almeida Machado", NULL, "(11) 96783-0545", "joaosao291@gmail.com", 48495693367);

INSERT INTO tb_livro(titulo, autor, ano_publicação)
VALUES("Harry Potter", "J. K. Rowling", 2000)