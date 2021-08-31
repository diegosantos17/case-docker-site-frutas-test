CREATE DATABASE IF NOT EXISTS db_site_frutas_test;
USE db_site_frutas_test;

CREATE TABLE products (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10,2),
    PRIMARY KEY(id)
);

INSERT INTO products VALUES(0, 'Banana', 1);
INSERT INTO products VALUES(0, 'Pera', 5);