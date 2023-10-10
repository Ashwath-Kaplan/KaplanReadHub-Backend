CREATE DATABASE Kaplan_readhub;

USE kaplan_readhub;

CREATE TABLE
    users (
        UserID INT PRIMARY KEY AUTO_INCREMENT,
        FirstName VARCHAR(255) NOT NULL,
        LastName VARCHAR(255) NOT NULL,
        Email VARCHAR(255) NOT NULL,
        `Password` VARCHAR(255) NOT NULL,
        IsLoggedIn BOOLEAN DEFAULT false NOT NULL
    );

CREATE TABLE
    books (
        BookID INT auto_increment PRIMARY KEY,
        Title VARCHAR(255) NOT NULL,
        Author VARCHAR(255) NOT NULL,
        Publisher VARCHAR(255) NOT NULL,
        `Description` VARCHAR(255) NOT NULL,
        Price VARCHAR(255) NOT NULL
    );

INSERT INTO
    users (FirstName, LastName, Email, `Password`)
VALUES
    (
        'Test',
        'User',
        'testuser@mail.com',
        'testuser'
    );

INSERT INTO
    books (Title, Author, Publisher, `Description`, Price)
VALUES
    (
        'The Girl on the Train',
        'Paula Hawkins',
        'Riverhead Books',
        'A psychological thriller centered around unreliable narrators.',
        '$10.99'
    );
