 CREATE DATABASE Publication;
 USE Publication;
CREATE TABLE Classics(
 Author VARCHAR(128),
 Title VARCHAR(128),
 Type VARCHAR(16),
 Fechas CHAR(4)
);

#Agregar una columna a la tabla 
ALTER TABLE Classics ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY;
#Para ver la tabal completa
SELECT *FROM Classics;
#Eliminar una columna
ALTER TABLE Classics
DROP COLUMN id;
#Insertar datos a la tablas 
INSERT INTO classics(Author, Title, Type, Fechas) VALUES
('Mark Twain', 'The Adventures of Tom Sawyer', 'Fiction', '1876'),
('Jane Austen', 'Pride and Prejudice', 'Fiction', '1811'),
('Charles Darwin', 'The Origin of Species', 'Non-Fiction', '1856'),
('Charles Dickens', 'The Old Curiosity Shop', 'Fiction', '1841'),
('William Shakespeare', 'Romeo and Juliet', 'Play', '1594');

#Mostrando el contenido de la tabla: 
SELECT * FROM Classics; 

ALTER TABLE Classics RENAME pre1900; 
ALTER TABLE pre1900 MODIFY Fechas SMALLINT;
ALTER TABLE pre1900 ADD pages SMALLINT UNSIGNED; 

ALTER TABLE pre1900 CHANGE Type category VARCHAR(16); 
ALTER TABLE pre1900 DROP  COLUMN pages; 

 CREATE TABLE disposable(trash INT); 
 DESCRIBE disposable; 
 DROP TABLE disposable; 
 SHOW tables; 
ALTER TABLE pre1900 ADD INDEX(Author(20)); 
ALTER TABLE pre1900 ADD INDEX(Title(20)); 
ALTER TABLE pre1900 ADD INDEX(category(4)); 
ALTER TABLE pre1900 ADD INDEX(Fechas); 
DESCRIBE pre1900; 


ALTER TABLE pre1900 ADD INDEX(Author(20)); 
CREATE INDEX Author ON pre1900 (Author(20)); 

CREATE TABLE classics ( 
 author VARCHAR(128),  
 title VARCHAR(128),  
 category VARCHAR(16),  
 year SMALLINT,  
 INDEX(author(20)),  
 INDEX(title(20)),  
 INDEX(category(4)),  
 INDEX(year)) ENGINE InnoDB; 
 
 DROP TABLE classics1; 
 
 INSERT INTO classics (author, title, year, isbn) VALUES ('Mark Twain', 'The Adventures of Tom Sawyer', 1876, '9781598184891');
INSERT INTO classics (author, title, year, isbn) VALUES ('Jane Austen', 'Sense and Sensibility', 1811, '9780582506206');
INSERT INTO classics (author, title, year, isbn) VALUES ('Gustave Flaubert', 'Madame Bovary', 1856, '9780517123201');
INSERT INTO classics (author, title, year, isbn) VALUES ('Charles Dickens', 'The Old Curiosity Shop', 1841, '9780099533474');
INSERT INTO classics (author, title, year, isbn) VALUES ('William Shakespeare', 'Romeo and Juliet', 1594, '9780192814968');

 
 ALTER TABLE classics ADD isbn CHAR(13); 
 UPDATE classics SET isbn='9781598184891' WHERE year='1876'; 
 UPDATE classics SET isbn='9780582506206' WHERE year='1811';
 UPDATE classics SET isbn='9780517123201' WHERE year='1856'; 
 UPDATE classics SET isbn='9780099533474' WHERE year='1841'; 
 UPDATE classics SET isbn='9780192814968' WHERE year='1594'; 
 ALTER TABLE classics ADD PRIMARY KEY(isbn); 
 DESCRIBE classics; 
 
 ALTER TABLE classics ADD FULLTEXT(author,title); 
  SELECT author,title FROM classics; 
  SELECT title,isbn FROM classics; 
  
  ALTER TABLE classics ADD FULLTEXT(author,title); 
SELECT author,title FROM classics;
SELECT title,isbn FROM classics; 
SELECT COUNT(*) FROM classics; 

SELECT author FROM classics; 
SELECT DISTINCT author FROM classics;
DELETE FROM classics WHERE title='Little Dorrit'; 

SELECT author,title FROM classics WHERE author="Mark Twain"; 
SELECT author,title FROM classics WHERE isbn="9781598184891"; 

SELECT author,title FROM classics WHERE author LIKE "Charles%";
SELECT author,title FROM classics WHERE title LIKE "%Species"; 
SELECT author,title FROM classics WHERE title LIKE "%and%"; 
SELECT author,title FROM classics LIMIT 3; 
SELECT author,title FROM classics LIMIT 1,2; 
SELECT author,title FROM classics LIMIT 3,1; 
SELECT author,title FROM classics  WHERE MATCH(author,title) AGAINST('and'); 
SELECT author,title FROM classics  WHERE MATCH(author,title) AGAINST('curiosity shop'); 
SELECT author,title FROM classics  WHERE MATCH(author,title) AGAINST('tom sawyer'); 

SELECT author,title FROM classics  WHERE MATCH(author,title)  AGAINST('+charles -species' IN BOOLEAN MODE); 
SELECT author,title FROM classics  WHERE MATCH(author,title)  AGAINST('"origin of"' IN BOOLEAN MODE); 

UPDATE classics SET author='Mark Twain (Samuel Langhorne Clemens)'  WHERE author='Mark Twain'; 
UPDATE classics SET category='Classic Fiction'  WHERE category='Fiction'; 

SELECT author,title FROM classics ORDER BY author; 
SELECT author,title FROM classics ORDER BY title DESC; 
SELECT author,title,year FROM classics ORDER BY author,year DESC; 

SELECT category,COUNT(author) FROM classics GROUP BY category; 


 CREATE TABLE customers (  
 name VARCHAR(128), 
 isbn VARCHAR(13), 
 PRIMARY KEY (isbn)) ENGINE InnoDB; 
 
 INSERT INTO customers(name,isbn)  VALUES('Joe Bloggs','9780099533474'); 
 INSERT INTO customers(name,isbn)  VALUES('Mary Smith','9780582506206'); 
 INSERT INTO customers(name,isbn)  VALUES('Jack Wilson','9780517123201'); 
 SELECT * FROM customers; 
 
 SELECT name,author,title FROM customers,classics  WHERE customers.isbn=classics.isbn; 
 
SELECT name,author,title FROM customers NATURAL JOIN classics; 

SELECT author,title FROM classics WHERE  author LIKE "Charles%" AND author LIKE "%Darwin"; 
SELECT author,title FROM classics WHERE  author LIKE "%Mark Twain%" OR author LIKE "%Samuel Langhorne Clemens%"; 
SELECT author,title FROM classics WHERE  author LIKE "Charles%" AND author NOT LIKE "%Darwin"; 

CREATE TABLE accounts (  
number INT, 
balance FLOAT,
 PRIMARY KEY(number)  ) ENGINE InnoDB; DESCRIBE accounts; 
 INSERT INTO accounts(number, balance) VALUES(12345, 1025.50); 
 INSERT INTO accounts(number, balance) VALUES(67890, 140.00); 
 SELECT * FROM accounts; 
 
BEGIN; 
UPDATE accounts SET balance=balance+25.11 WHERE number=12345; 
COMMIT; 
SELECT * FROM accounts;

BEGIN; 
UPDATE accounts SET balance=balance-250 WHERE number=12345; 
UPDATE accounts SET balance=balance+250 WHERE number=67890;
 SELECT * FROM accounts; 
 
ROLLBACK; SELECT * FROM accounts; 

EXPLAIN SELECT * FROM accounts WHERE number='12345'; 