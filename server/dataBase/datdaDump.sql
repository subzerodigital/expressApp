CREATE DATABASE  IF NOT EXISTS `jobdone` /*!40100 DEFAULT CHARACTER SET big5 */;
USE `jobdone`;
-- MySQL dump 10.13  Distrib 5.6.11, for osx10.6 (i386)
--
-- Host: 127.0.0.1    Database: jobdone
-- ------------------------------------------------------
-- Server version	5.1.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `employeeId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `middleName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `postCode` int(11) DEFAULT NULL,
  `state` varchar(10) DEFAULT NULL,
  `phone` int(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `desc` varchar(500) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `photo` blob,
  PRIMARY KEY (`employeeId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,'Yinan',NULL,'Yang','dirctor',NULL,NULL,NULL,NULL,401416525,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `state` varchar(10) DEFAULT NULL,
  `postCode` varchar(10) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `mobile` int(11) DEFAULT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `user_id_UNIQUE` (`userId`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=big5;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'123','432','1213@hotmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(2,'123','432','1213@hotmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'123'),(3,'1234','432','1213@hotmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'7898'),(4,'1234','432','1213@hotmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'7898');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-09-02 21:09:12
