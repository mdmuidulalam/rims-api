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
);

-- F-03: Make Database Design and Build Clear Entity Connection

-- Create Customers Table
CREATE TABLE IF NOT EXISTS Customers
(
    Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (ID)
);

-- Create Orders Table
CREATE TABLE IF NOT EXISTS Orders
(
    Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (ID)
);

-- Create Products Table
CREATE TABLE IF NOT EXISTS Products
(
    Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (ID)
);

-- Create Purchases Table
CREATE TABLE IF NOT EXISTS Purchases
(
    Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (ID)
);

-- Create Vendors Table
CREATE TABLE IF NOT EXISTS Vendors
(
    Id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (ID)
);

-- Add Procdedure AddFieldIfNotExists
DELIMITER $$

DROP PROCEDURE IF EXISTS AddFieldIfNotExists 
$$

DROP FUNCTION IF EXISTS IsFieldExisting 
$$

CREATE FUNCTION IsFieldExisting (table_name_IN VARCHAR(100), field_name_IN VARCHAR(100)) 
RETURNS INT
RETURN (
    SELECT COUNT(COLUMN_NAME) 
    FROM INFORMATION_SCHEMA.columns 
    WHERE TABLE_SCHEMA = DATABASE() 
    AND TABLE_NAME = table_name_IN 
    AND COLUMN_NAME = field_name_IN
)
$$

CREATE PROCEDURE AddFieldIfNotExists (
    IN table_name_IN VARCHAR(100)
    , IN field_name_IN VARCHAR(100)
    , IN field_definition_IN VARCHAR(100)
)
BEGIN

    SET @isFieldThere = IsFieldExisting(table_name_IN, field_name_IN);
    IF (@isFieldThere = 0) THEN

        SET @ddl = CONCAT('ALTER TABLE ', table_name_IN);
        SET @ddl = CONCAT(@ddl, ' ', 'ADD COLUMN') ;
        SET @ddl = CONCAT(@ddl, ' ', field_name_IN);
        SET @ddl = CONCAT(@ddl, ' ', field_definition_IN);

        PREPARE stmt FROM @ddl;
        EXECUTE stmt;
        DEALLOCATE PREPARE stmt;

    END IF;

END;
$$

-- Add CustomerId in Orders Table
CALL AddFieldIfNotExists ('Orders', 'CustomerId', 'int NOT NULL, ADD CONSTRAINT FK_Orders_CustomerId FOREIGN KEY (CustomerId) REFERENCES Customers(Id)');

-- Create OrdersProducts Table
CREATE TABLE IF NOT EXISTS OrdersProducts
(
    Id int NOT NULL AUTO_INCREMENT,
    OrderId int NOT NULL,
    CONSTRAINT FK_OrdersProducts_OrderId FOREIGN KEY (OrderId) REFERENCES Orders(Id),
    ProductId int NOT NULL,
    CONSTRAINT FK_OrdersProducts_ProductId FOREIGN KEY (ProductId) REFERENCES Products(Id),
    PRIMARY KEY (ID)
);

-- Add VendorId in Purchases Table
CALL AddFieldIfNotExists ('Purchases', 'VendorId', 'int NOT NULL, ADD CONSTRAINT FK_Purchases_VendorId FOREIGN KEY (VendorId) REFERENCES Vendors(Id)');

-- Create VendorsProducts Table
CREATE TABLE IF NOT EXISTS VendorsProducts
(
    Id int NOT NULL AUTO_INCREMENT,
    VendorId int NOT NULL,
    CONSTRAINT FK_VendorsProducts_VendorId FOREIGN KEY (VendorId) REFERENCES Vendors(Id),
    ProductId int NOT NULL,
    CONSTRAINT FK_VendorsProducts_ProductId FOREIGN KEY (ProductId) REFERENCES Products(Id),
    PRIMARY KEY (ID)
);

-- Create PurchasesProducts Table
CREATE TABLE IF NOT EXISTS PurchasesProducts
(
    Id int NOT NULL AUTO_INCREMENT,
    PurchaseId int NOT NULL,
    CONSTRAINT FK_PurchasesProducts_PurchasesId FOREIGN KEY (PurchaseId) REFERENCES Purchases(Id),
    ProductId int NOT NULL,
    CONSTRAINT FK_PurchasesProducts_ProductId FOREIGN KEY (ProductId) REFERENCES Products(Id),
    PRIMARY KEY (ID)
);

-- F-05: Enable Dynamic Schema Database

-- Create DataSchemas Table
CREATE TABLE IF NOT EXISTS DataSchemas
(
    Id int NOT NULL AUTO_INCREMENT,
    TableId int NOT NULL,
    DataName varchar(32) NOT NULL,
    DataCode varchar(32) NOT NULL,
    DataType int NOT NULL,
    DataFieldType int NOT NULL,
    Required bit NOT NULL,
    ValueScript varchar(32) NOT NULL,
    PRIMARY KEY (ID)
);

