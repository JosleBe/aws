CREATE DATABASE PAISES;
USE PAISES;

CREATE TABLE PAIS(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255)
);

CREATE TABLE ESTADO (
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR (255),
Id_pais INT, 
FOREIGN KEY (Id_pais) REFERENCES PAIS (id)
);

CREATE TABLE MUNICIPIO(
id INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR (255),
id_estado INT, 
FOREIGN KEY (id_estado) REFERENCES ESTADO (id)
);


INSERT INTO PAIS (id, nombre) VALUES 
(1, 'México'), 
(2, 'Estados Unidos'), 
(3, 'Canadá');


INSERT INTO ESTADO (id, nombre, id_pais) VALUES 

(1, 'Jalisco', 1), 
(2, 'Nuevo León', 1), 
(3, 'Yucatán', 1),

(4, 'California', 2), 
(5, 'Texas', 2), 
(6, 'Florida', 2),


(7, 'Ontario', 3), 
(8, 'Quebec', 3), 
(9, 'Alberta', 3);


INSERT INTO MUNICIPIO (id, nombre, id_estado) VALUES 

(1, 'Guadalajara', 1), 
(2, 'Zapopan', 1), 
(3, 'Tlaquepaque', 1),


(4, 'Monterrey', 2), 
(5, 'San Nicolás', 2), 
(6, 'Apodaca', 2),


(7, 'Mérida', 3), 
(8, 'Progreso', 3), 
(9, 'Valladolid', 3),


(10, 'Los Ángeles', 4), 
(11, 'San Diego', 4), 
(12, 'San Francisco', 4),


(13, 'Houston', 5), 
(14, 'Dallas', 5), 
(15, 'Austin', 5),


(16, 'Miami', 6), 
(17, 'Orlando', 6), 
(18, 'Tampa', 6),


(19, 'Toronto', 7), 
(20, 'Ottawa', 7), 
(21, 'Mississauga', 7),


(22, 'Quebec City', 8), 
(23, 'Montreal', 8), 
(24, 'Sherbrooke', 8),


(25, 'Calgary', 9), 
(26, 'Edmonton', 9), 
(27, 'Red Deer', 9);
