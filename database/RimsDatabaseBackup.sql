-- MySQL dump 10.13  Distrib 8.0.16, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rimsbase
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `customers` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CustomerPhone` varchar(15) DEFAULT NULL,
  `CustomerName` varchar(128) NOT NULL,
  `CustomerIdentifier` varchar(32) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (1,'2019-02-16 03:03:10','2019-03-25 09:41:58','01725775533','Jahid Hasan Sajeeb','Jahid-Nikonjo'),(2,'2019-02-18 15:15:59','2019-03-25 09:42:29','01725775533','Md Muidul Alam Tuhin','Muidul-Mirpur');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `datagridcolumns`
--

DROP TABLE IF EXISTS `datagridcolumns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `datagridcolumns` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `GridType` int(11) NOT NULL,
  `Header` varchar(256) NOT NULL,
  `Accessor` varchar(256) DEFAULT NULL,
  `SortOrder` int(11) DEFAULT NULL,
  `FilterType` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `datagridcolumns`
--

LOCK TABLES `datagridcolumns` WRITE;
/*!40000 ALTER TABLE `datagridcolumns` DISABLE KEYS */;
INSERT INTO `datagridcolumns` VALUES (1,1,'Name','ProductName',1,NULL),(2,1,'Quantity On Hand','ProductQuantityOnHand',4,NULL),(3,1,'Price','ProductPrice',3,NULL),(4,2,'Phone','CustomerPhone',2,NULL),(5,2,'Name','CustomerName',1,NULL),(6,1,'Code','ProductCode',4,NULL),(7,3,'Reference','OrderReference',1,NULL),(8,3,'Order No.','OrderNumber',2,NULL),(9,4,'Reference','PurchaseReference',1,NULL),(10,5,'Name','VendorName',1,NULL),(11,4,'Purchase No.','PurchaseNumber',2,NULL),(12,1,'Description','ProductDescription',2,NULL),(13,6,'Type','AccountingType',1,NULL),(14,2,'Identifier','CustomerIdentifier',3,NULL);
/*!40000 ALTER TABLE `datagridcolumns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dataschemas`
--

DROP TABLE IF EXISTS `dataschemas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `dataschemas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `TableId` int(11) NOT NULL,
  `DataName` varchar(32) NOT NULL,
  `DataCode` varchar(32) NOT NULL,
  `DataType` int(11) NOT NULL,
  `DataFieldType` int(11) NOT NULL,
  `Required` bit(1) NOT NULL,
  `ValueScript` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dataschemas`
--

LOCK TABLES `dataschemas` WRITE;
/*!40000 ALTER TABLE `dataschemas` DISABLE KEYS */;
INSERT INTO `dataschemas` VALUES (1,2,'CustomerId','CustomerId',1,1,_binary '',NULL),(2,6,'OrderId','OrderId',1,1,_binary '',NULL),(3,6,'ProductId','ProductId',1,1,_binary '',NULL),(4,4,'VendorId','VendorId',1,1,_binary '',NULL),(5,8,'PurchaseId','PurchaseId',1,1,_binary '',NULL),(6,8,'ProductId','ProductId',1,1,_binary '',NULL),(7,7,'VendorId','VendorId',1,1,_binary '',NULL),(8,7,'ProductId','ProductId',1,1,_binary '',NULL),(9,3,'Price','ProductPrice',3,2,_binary '',NULL),(11,1,'Phone','CustomerPhone',2,2,_binary '\0',NULL),(13,2,'Reference','OrderReference',2,2,_binary '\0',NULL),(14,4,'Reference','PurchaseReference',2,2,_binary '\0',NULL),(15,3,'Quantity On Hand','ProductQuantityOnHand',3,2,_binary '',NULL),(16,3,'Code','ProductCode',2,2,_binary '',NULL),(20,3,'Name','ProductName',2,1,_binary '',NULL),(21,1,'Name','CustomerName',2,1,_binary '',NULL),(22,2,'Order No.','OrderNumber',1,1,_binary '',NULL),(23,5,'Name','VendorName',2,1,_binary '',NULL),(24,4,'Purchase No.','PurchaseNumber',1,1,_binary '',NULL),(25,3,'Description','ProductDescription',4,2,_binary '\0',NULL),(26,1,'Identifier','CustomerIdentifier',2,2,_binary '',NULL);
/*!40000 ALTER TABLE `dataschemas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entityareas`
--

DROP TABLE IF EXISTS `entityareas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `entityareas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `EntityTypes` int(11) NOT NULL,
  `AreaName` varchar(64) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entityareas`
--

LOCK TABLES `entityareas` WRITE;
/*!40000 ALTER TABLE `entityareas` DISABLE KEYS */;
INSERT INTO `entityareas` VALUES (1,1,'Basic Details'),(2,1,'Inventory Information'),(3,1,'Pricing Information'),(4,2,'Basic Information'),(5,2,'Contact Information'),(6,5,'Basic Information'),(7,3,'Basic Information'),(8,4,'Basic Information');
/*!40000 ALTER TABLE `entityareas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `entityfields`
--

DROP TABLE IF EXISTS `entityfields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `entityfields` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `EntityAreaId` int(11) NOT NULL,
  `EntityFieldType` int(11) NOT NULL,
  `Accessor` varchar(32) NOT NULL,
  `SortOrder` int(11) NOT NULL,
  `FieldName` varchar(64) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_EntityFields_EntityAreaId` (`EntityAreaId`),
  CONSTRAINT `FK_EntityFields_EntityAreaId` FOREIGN KEY (`EntityAreaId`) REFERENCES `entityareas` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `entityfields`
--

LOCK TABLES `entityfields` WRITE;
/*!40000 ALTER TABLE `entityfields` DISABLE KEYS */;
INSERT INTO `entityfields` VALUES (1,1,1,'ProductName',1,'Name'),(2,1,1,'ProductCode',2,'Code'),(3,1,3,'ProductDescription',3,'Description'),(4,2,2,'ProductQuantityOnHand',1,'Quantity'),(5,3,2,'ProductPrice',1,'Price'),(6,4,1,'CustomerName',1,'Name'),(7,4,1,'CustomerIdentifier',2,'Identifier'),(8,5,1,'CustomerPhone',1,'Phone'),(9,6,1,'VendorName',1,'Name'),(10,7,2,'OrderNumber',1,'Order No.'),(11,7,1,'OrderReference',2,'Reference'),(12,8,2,'PurchaseNumber',1,'Purchase No.'),(13,8,1,'PurchaseReference',2,'Reference');
/*!40000 ALTER TABLE `entityfields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `orders` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CustomerId` int(11) NOT NULL,
  `OrderReference` varchar(64) DEFAULT NULL,
  `OrderNumber` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_Orders_CustomerId` (`CustomerId`),
  CONSTRAINT `FK_Orders_CustomerId` FOREIGN KEY (`CustomerId`) REFERENCES `customers` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'2019-02-18 15:12:47','2019-03-25 16:54:06',1,'Edited Ref.',1),(2,'2019-02-18 15:16:16','2019-02-19 03:40:47',2,'Edited Ref.',2),(3,'2019-02-19 03:37:07','2019-02-19 03:37:07',2,'First Ref.',3),(4,'2019-02-19 03:39:19','2019-03-25 10:01:44',2,'Order Check',4),(5,'2019-02-19 03:40:44','2019-02-19 03:40:44',2,'Test Ref.',5);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordersproducts`
--

DROP TABLE IF EXISTS `ordersproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `ordersproducts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `OrderId` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_OrdersProducts_OrderId` (`OrderId`),
  KEY `FK_OrdersProducts_ProductId` (`ProductId`),
  CONSTRAINT `FK_OrdersProducts_OrderId` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`Id`),
  CONSTRAINT `FK_OrdersProducts_ProductId` FOREIGN KEY (`ProductId`) REFERENCES `products` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordersproducts`
--

LOCK TABLES `ordersproducts` WRITE;
/*!40000 ALTER TABLE `ordersproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordersproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `products` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ProductPrice` float NOT NULL,
  `ProductName` varchar(54) NOT NULL,
  `ProductQuantityOnHand` float NOT NULL,
  `ProductCode` varchar(64) NOT NULL,
  `ProductDescription` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'2019-02-02 11:00:42','2019-03-22 04:42:46',12.25,'Lenovo Laptop',1,'LL456','For Zaina'),(2,'2019-02-02 11:14:11','2019-02-02 11:14:11',12.25,'FirstProduct',0,'P159',NULL),(3,'2019-02-02 11:25:25','2019-03-18 15:58:27',12.25,'Wow Product',3,'P753','Check it Now Come on'),(4,'2019-02-02 11:27:00','2019-02-02 11:27:00',12.25,'FirstProduct',0,'P486',NULL),(5,'2019-02-02 11:27:33','2019-05-30 03:29:19',40000,'Lcd Tv 40cm',100,'LCD40','From China'),(6,'2019-02-03 12:14:56','2019-02-03 12:14:56',20.35,'New Product',0,'P756',NULL),(7,'2019-02-03 12:16:27','2019-02-03 12:16:27',20.35,'New Product',0,'P426',NULL),(8,'2019-02-03 13:27:49','2019-02-03 13:27:49',20.35,'New Product',0,'P756',NULL),(9,'2019-02-03 13:28:19','2019-02-03 13:28:19',20.35,'New Product',0,'P423',NULL),(10,'2019-02-03 13:28:39','2019-02-03 13:28:39',20.35,'New Product',0,'P423',NULL),(11,'2019-02-03 13:36:14','2019-02-03 13:36:14',10.15,'Other Product',0,'P156',NULL),(12,'2019-02-03 14:06:34','2019-03-16 04:53:58',20.3,'Other Product',0,'P487',NULL),(13,'2019-02-03 14:09:02','2019-02-03 14:30:20',10.15,'Edited Product',0,'P129',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchases`
--

DROP TABLE IF EXISTS `purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `purchases` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `VendorId` int(11) NOT NULL,
  `PurchaseReference` varchar(64) DEFAULT NULL,
  `PurchaseNumber` int(11) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_Purchases_VendorId` (`VendorId`),
  CONSTRAINT `FK_Purchases_VendorId` FOREIGN KEY (`VendorId`) REFERENCES `vendors` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchases`
--

LOCK TABLES `purchases` WRITE;
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
INSERT INTO `purchases` VALUES (1,'2019-02-19 03:18:19','2019-02-19 03:18:19',1,'Purchase Ref.',1),(2,'2019-02-19 03:27:40','2019-02-19 04:00:22',1,'Edited Ref.',2),(3,'2019-02-19 04:00:19','2019-03-25 10:16:40',1,'And Purchase Ref.',3);
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchasesproducts`
--

DROP TABLE IF EXISTS `purchasesproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `purchasesproducts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `PurchaseId` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_PurchasesProducts_PurchasesId` (`PurchaseId`),
  KEY `FK_PurchasesProducts_ProductId` (`ProductId`),
  CONSTRAINT `FK_PurchasesProducts_ProductId` FOREIGN KEY (`ProductId`) REFERENCES `products` (`Id`),
  CONSTRAINT `FK_PurchasesProducts_PurchasesId` FOREIGN KEY (`PurchaseId`) REFERENCES `purchases` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchasesproducts`
--

LOCK TABLES `purchasesproducts` WRITE;
/*!40000 ALTER TABLE `purchasesproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchasesproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `PasswordHash` varchar(256) NOT NULL,
  `UserId` varchar(256) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Md Muidul Alam Tuhin','2hin2345@gmail.com','$2b$12$FCMwVIPWhebEtRD1T3GOgOvjD6fkNlEAOkfpNA7On/bIAEq33QM0K','2hin2345.gmail.com','2019-02-02 11:34:22','2019-02-02 11:34:22');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendors`
--

DROP TABLE IF EXISTS `vendors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vendors` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `VendorName` varchar(128) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendors`
--

LOCK TABLES `vendors` WRITE;
/*!40000 ALTER TABLE `vendors` DISABLE KEYS */;
INSERT INTO `vendors` VALUES (1,'2019-02-18 15:12:47','2019-03-25 16:54:52','Varun Aaron');
/*!40000 ALTER TABLE `vendors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendorsproducts`
--

DROP TABLE IF EXISTS `vendorsproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `vendorsproducts` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `VendorId` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `FK_VendorsProducts_VendorId` (`VendorId`),
  KEY `FK_VendorsProducts_ProductId` (`ProductId`),
  CONSTRAINT `FK_VendorsProducts_ProductId` FOREIGN KEY (`ProductId`) REFERENCES `products` (`Id`),
  CONSTRAINT `FK_VendorsProducts_VendorId` FOREIGN KEY (`VendorId`) REFERENCES `vendors` (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendorsproducts`
--

LOCK TABLES `vendorsproducts` WRITE;
/*!40000 ALTER TABLE `vendorsproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendorsproducts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-26  8:56:33
