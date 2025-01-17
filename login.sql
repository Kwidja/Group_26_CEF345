CREATE DATABASE login;
USE login;

CREATE TABLE form (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
    );
 INSERT INTO form (Username, Email,Password,Date)
 VALUES
 ('Becca' ' beca56@gmail.com' ' FGDJKUH' '14/06/24'),
 ('Brenda' 'brenda45@gmail.com' 'rfhik3' '17/11/24'),
 ('Jane' 'jane10@gmail.com' 'vxwyfy' '15/08/24'),
 ('John' 'john12@gmail.com' 'shwjkhuy' '12/05/23'),
 ('Lena' 'lena14@gmail.com ''Tech23' '12/05/23');