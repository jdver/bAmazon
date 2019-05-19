DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE IF NOT EXISTS bamazon;

USE bamazon;

CREATE TABLE products(
  sku INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (sku)
);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (001, "action figure", "toys", 15, 47);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (002, "iron", "house", 25, 250);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (003, "dish sponge", "kitchen", 3, 755);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (004, "decorative wall frame", "house", 45, 16);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (005, "post it notes", "office", 3, 898);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (006, "blu ray player", "electronics", 120, 400);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (007, "double a batteries", "electronics", 11, 278);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (008, "hand sanitizer", "personal", 4, 590);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (009, "car oil", "auto", 11, 216);

INSERT INTO products (sku, product_name, department_name, price, stock_quantity)
VALUES (010, "blanket", "house", 30, 88);

SELECT * FROM products
