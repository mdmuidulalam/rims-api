-- F-01: Deploy Api and Database

-- Create Users Table
CREATE TABLE IF NOT EXISTS Users
(
    Id int NOT NULL AUTO_INCREMENT, 
    Name varchar(255) NOT NULL, 
    Email varchar(255) NOT NULL, 
    PasswordHash varchar(256) NOT NULL,
    UserId varchar(256) NOT NULL,
    createdAt datetime NOT NULL,
    updatedAt datetime NOT NULL,
    PRIMARY KEY (ID)
)