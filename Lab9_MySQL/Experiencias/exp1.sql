CREATE DATABASE publications;

USE publications;

CREATE TABLE classics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(128),
    title VARCHAR(128),
    type VARCHAR(16),
    year CHAR(4)
);

ALTER TABLE classics DROP COLUMN id;

INSERT INTO classics(author, title, type, year) VALUES
('Mark Twain','The Adventures of Tom Sawyer','Fiction','1876');
INSERT INTO classics(author, title, type, year) VALUES
('Jane Austen','Pride and Prejudice','Fiction','1811'); 
INSERT INTO classics(author, title, type, year) VALUES
('Charles Darwin','The Origin of Species','Non- Fiction','1856');
INSERT INTO classics(author, title, type, year) VALUES
('Charles Dickens','The Old Curiosity Shop','Fiction','1841');
INSERT INTO classics(author, title, type, year) VALUES
('William Shakespeare','Romeo and Juliet','Play','1594');

select * from classics;

ALTER TABLE classics RENAME pre1900;

ALTER TABLE pre1900 MODIFY year SMALLINT;

ALTER TABLE pre1900 ADD INDEX(author(20)); 
ALTER TABLE pre1900 ADD INDEX(title(20)); 
ALTER TABLE pre1900 ADD INDEX(type(4)); 
ALTER TABLE pre1900 ADD INDEX(year); 

DESCRIBE pre1900;