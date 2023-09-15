-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.15-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- delidb 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `delidb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `delidb`;

-- 테이블 delidb.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `bno` bigint(20) NOT NULL AUTO_INCREMENT,
  `moddate` datetime(6) DEFAULT NULL,
  `regdate` datetime(6) DEFAULT NULL,
  `content` varchar(2000) NOT NULL,
  `title` varchar(500) NOT NULL,
  `writer` varchar(50) NOT NULL,
  PRIMARY KEY (`bno`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.board:~1 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`bno`, `moddate`, `regdate`, `content`, `title`, `writer`) VALUES
	(1, NULL, NULL, '테스트', '테스트', 'employee1');
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 delidb.board_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `board_image` (
  `uuid` varchar(255) NOT NULL,
  `file_name` varchar(255) DEFAULT NULL,
  `ord` int(11) NOT NULL,
  `board_bno` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`uuid`),
  KEY `FKo4dbcmbib7vwlk8eplv2cwbe2` (`board_bno`),
  CONSTRAINT `FKo4dbcmbib7vwlk8eplv2cwbe2` FOREIGN KEY (`board_bno`) REFERENCES `board` (`bno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.board_image:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `board_image` ENABLE KEYS */;

-- 테이블 delidb.employee 구조 내보내기
CREATE TABLE IF NOT EXISTS `employee` (
  `employee_id` varchar(255) NOT NULL,
  `moddate` datetime(6) DEFAULT NULL,
  `regdate` datetime(6) DEFAULT NULL,
  `del` bit(1) NOT NULL,
  `employee_email` varchar(255) DEFAULT NULL,
  `employee_entrance_date` date DEFAULT NULL,
  `employee_name` varchar(255) DEFAULT NULL,
  `employee_phone` varchar(255) DEFAULT NULL,
  `employee_pw` varchar(255) DEFAULT NULL,
  `social` bit(1) NOT NULL,
  PRIMARY KEY (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.employee:~100 rows (대략적) 내보내기
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` (`employee_id`, `moddate`, `regdate`, `del`, `employee_email`, `employee_entrance_date`, `employee_name`, `employee_phone`, `employee_pw`, `social`) VALUES
	('employee1', NULL, NULL, b'0', 'email1@aaa.bbb', NULL, NULL, NULL, '$2a$10$ON/QIXtxN/83wpKrcfXNWuWq4tYwZdpFRQqdi7NGGzKtlFOQM8w06', b'0'),
	('employee10', NULL, NULL, b'0', 'email10@aaa.bbb', NULL, NULL, NULL, '$2a$10$p6L/WtetxFuX4ZfkD6seOudgOI2MrMMFWMrPS06GoeO.bt3VRui4C', b'0'),
	('employee100', NULL, NULL, b'0', 'email100@aaa.bbb', NULL, NULL, NULL, '$2a$10$l7c3/d5WcDrpJZvAh0YoZuWfdBlpHY4lL1keh2dKuGN3jz2RUHgU2', b'0'),
	('employee11', NULL, NULL, b'0', 'email11@aaa.bbb', NULL, NULL, NULL, '$2a$10$e7uML56WJTQJgwnq1cCapenlnDFWdSIW/a89l6xX1EyZMd7ItUosG', b'0'),
	('employee12', NULL, NULL, b'0', 'email12@aaa.bbb', NULL, NULL, NULL, '$2a$10$1R6uR2cNHXUaIxxJIAmdGuf4tmtN2GvvNqs3w2aPk/3mRKLQsNVTK', b'0'),
	('employee13', NULL, NULL, b'0', 'email13@aaa.bbb', NULL, NULL, NULL, '$2a$10$3lVkK79FALWjEC4Gxkd4iud8XICxIWL1mH13EOnzezpP/3yVEqqjO', b'0'),
	('employee14', NULL, NULL, b'0', 'email14@aaa.bbb', NULL, NULL, NULL, '$2a$10$tkx0l8JDs75RKIb7TIvNQOT0e8b1kDr3Hzxul2ZFOvOkaNiyAp7Gi', b'0'),
	('employee15', NULL, NULL, b'0', 'email15@aaa.bbb', NULL, NULL, NULL, '$2a$10$WWNarogYhLJ6pivBDXIs.OFKZH816.En8ampJwtlsTtnhx.v/liEa', b'0'),
	('employee16', NULL, NULL, b'0', 'email16@aaa.bbb', NULL, NULL, NULL, '$2a$10$PK0ygWPGRvu6dJbejwUZ/./d1SRtoXr7/F.tod10H.9s6YMT9a2ua', b'0'),
	('employee17', NULL, NULL, b'0', 'email17@aaa.bbb', NULL, NULL, NULL, '$2a$10$b5DN1wO6ZN9SS/J3c24tQ.XM2YAdcIHV/yvPhlgaIaRKbqxcEz6yK', b'0'),
	('employee18', NULL, NULL, b'0', 'email18@aaa.bbb', NULL, NULL, NULL, '$2a$10$H2xCKbSGa/GBfe7CSw2SreaMWIEbqzMLRDhu7aet5iE918c8HK52C', b'0'),
	('employee19', NULL, NULL, b'0', 'email19@aaa.bbb', NULL, NULL, NULL, '$2a$10$ABuFqYaV54rPa8pLnnCh6OsHQUfkokX0/QgsrIpAzPKeAV/fUenvW', b'0'),
	('employee2', NULL, NULL, b'0', 'email2@aaa.bbb', NULL, NULL, NULL, '$2a$10$0u8mJcrapirSPWTcXNvcg.rIVQKYzZUy71.ThF35lAzQeO1eufl0S', b'0'),
	('employee20', NULL, NULL, b'0', 'email20@aaa.bbb', NULL, NULL, NULL, '$2a$10$YSdha8KAH6pXNUOWJmhOFOGO1OzdUYxiDf4J4tnQOkAUOsYG8xwYK', b'0'),
	('employee21', NULL, NULL, b'0', 'email21@aaa.bbb', NULL, NULL, NULL, '$2a$10$VKy/Vp/veRu5IKBZ43UAs.9axoKig2o9Mw7LLD2p4F4CoT4o8HQpG', b'0'),
	('employee22', NULL, NULL, b'0', 'email22@aaa.bbb', NULL, NULL, NULL, '$2a$10$lOI.WU2ZT6wRe9/Q3iqaPutBpAs4POTGdhhFLqPqcs7eJTGxH/Doe', b'0'),
	('employee23', NULL, NULL, b'0', 'email23@aaa.bbb', NULL, NULL, NULL, '$2a$10$.x9DJvyatE/mfVFAfm1vKem8hnuYnGEaYg/X1kUMbjo6OIKfoRLyC', b'0'),
	('employee24', NULL, NULL, b'0', 'email24@aaa.bbb', NULL, NULL, NULL, '$2a$10$R3LCkE0M5/irMbKJSD1EeOdpAMuQU84D8MABtRjY/3bIc6CZXEFGe', b'0'),
	('employee25', NULL, NULL, b'0', 'email25@aaa.bbb', NULL, NULL, NULL, '$2a$10$oiydyuY69NBqOL.W8geJfekTi2WALWj/L4/7JVczoSlPZ4ShQ8XEa', b'0'),
	('employee26', NULL, NULL, b'0', 'email26@aaa.bbb', NULL, NULL, NULL, '$2a$10$R4jbJ8/jq5lRa78wUJPqHOS/nHfGIkH7UuJtHf6/5EXWyCtOK5L8u', b'0'),
	('employee27', NULL, NULL, b'0', 'email27@aaa.bbb', NULL, NULL, NULL, '$2a$10$63dwAVrW9bSHNRnKYinlM.DEq3fMyWK0Ph2vt3uZdX3o0kpYvC7XO', b'0'),
	('employee28', NULL, NULL, b'0', 'email28@aaa.bbb', NULL, NULL, NULL, '$2a$10$f1MLa5hdc0aOvk/3ckzrrOB6UcD449ttxBi/S1GVNiO7aT5mBzZzO', b'0'),
	('employee29', NULL, NULL, b'0', 'email29@aaa.bbb', NULL, NULL, NULL, '$2a$10$f.vxeZj4uWTAwwgjBRs0P.jBgDmLgsetIGTD.B5X1HPKYfHcI4zIW', b'0'),
	('employee3', NULL, NULL, b'0', 'email3@aaa.bbb', NULL, NULL, NULL, '$2a$10$hyisAWNlyEdqYSw7ih7YIOsHYx9.3yX7od7Xjc1bv/76DZVgsPk6O', b'0'),
	('employee30', NULL, NULL, b'0', 'email30@aaa.bbb', NULL, NULL, NULL, '$2a$10$rQSFtKczI2cVF7TN.xAk3O58s3EdI3wJIL1Z3HCuVgNk5o2uoRlaC', b'0'),
	('employee31', NULL, NULL, b'0', 'email31@aaa.bbb', NULL, NULL, NULL, '$2a$10$azti8Fhj9J/qELFpN8046.OY7nASwYkd1PQitvWaDY5nr8p627COO', b'0'),
	('employee32', NULL, NULL, b'0', 'email32@aaa.bbb', NULL, NULL, NULL, '$2a$10$HnmLB0M4.3HwJ1rmh3qYRuptIup0HlYiFY1pnxbw7Vh/o7QkNvt5O', b'0'),
	('employee33', NULL, NULL, b'0', 'email33@aaa.bbb', NULL, NULL, NULL, '$2a$10$ElTD3yE4G7LDeKukKtaM4uTl6Z2oZJm/yZA5fvsiPQ3Ue2xPA0/hq', b'0'),
	('employee34', NULL, NULL, b'0', 'email34@aaa.bbb', NULL, NULL, NULL, '$2a$10$3O9E3LTbVDGmYYu6ylS6NOdKuB1bVcFqAHA7ItzbSLPo18DiF.7bO', b'0'),
	('employee35', NULL, NULL, b'0', 'email35@aaa.bbb', NULL, NULL, NULL, '$2a$10$9492Mtch.NwRo2d6.t7ULuFbF6D39UOlBITwJDG4HH1FR7mI1kcdG', b'0'),
	('employee36', NULL, NULL, b'0', 'email36@aaa.bbb', NULL, NULL, NULL, '$2a$10$I61o2bp5LwiZnZk2dDfXCOnDq1iEKJmRAbX6pkzmqcylPU/.MQteS', b'0'),
	('employee37', NULL, NULL, b'0', 'email37@aaa.bbb', NULL, NULL, NULL, '$2a$10$cgn9FEzdMezNzcPbhiB30.FReyKSILsj9xKHlVZa/GS5gDc1kdbBm', b'0'),
	('employee38', NULL, NULL, b'0', 'email38@aaa.bbb', NULL, NULL, NULL, '$2a$10$jlFlFlQQrDb/4T.EMMhmWeongMifGCU2/3tHctRr2NSAx44HP1AZK', b'0'),
	('employee39', NULL, NULL, b'0', 'email39@aaa.bbb', NULL, NULL, NULL, '$2a$10$LHmLTf9hsfJ1UiYhR9iM0ehKAnKg4jsiakJXyn9nwanbDV5s9hLMi', b'0'),
	('employee4', NULL, NULL, b'0', 'email4@aaa.bbb', NULL, NULL, NULL, '$2a$10$JOVZKY1J3cUUJyJDc538XutSVGhMj4kgRO/5xMyRYMMcZqexntcQK', b'0'),
	('employee40', NULL, NULL, b'0', 'email40@aaa.bbb', NULL, NULL, NULL, '$2a$10$tAwNfsbtmoCC32WmUessK.Soxy6Mu4pUhG2PV7cucj3Jqm8vatmHy', b'0'),
	('employee41', NULL, NULL, b'0', 'email41@aaa.bbb', NULL, NULL, NULL, '$2a$10$LHN5lY4TWhjJlLwZo7xNvuWUUdfNOBz3cxhuogn1tN4qIr.T4npRa', b'0'),
	('employee42', NULL, NULL, b'0', 'email42@aaa.bbb', NULL, NULL, NULL, '$2a$10$7ALqpPdCEEEMkkPcoNxGLezUS0/bRWcx7fp89TOgtbveYQgT..B5.', b'0'),
	('employee43', NULL, NULL, b'0', 'email43@aaa.bbb', NULL, NULL, NULL, '$2a$10$rOcxmJw6sDkaeC/c0nPRNuDmORrg94zmQK2ts13ny80R2fJQkM8KK', b'0'),
	('employee44', NULL, NULL, b'0', 'email44@aaa.bbb', NULL, NULL, NULL, '$2a$10$2dV9H9X6YgXqzGthj6LTGujJqccpduz7e2Qp3LLW.uq7/mGFBFrsC', b'0'),
	('employee45', NULL, NULL, b'0', 'email45@aaa.bbb', NULL, NULL, NULL, '$2a$10$BXvHHB8Jy2g1AxUEh8Nv8unwM8.MUPkdjRH5t3f4fRnpyldJaRBXe', b'0'),
	('employee46', NULL, NULL, b'0', 'email46@aaa.bbb', NULL, NULL, NULL, '$2a$10$Nj2SNUwThFCL3dUaYEREwOBGeR.xM5F4lvHqNXeuVXW5fb36j8dC2', b'0'),
	('employee47', NULL, NULL, b'0', 'email47@aaa.bbb', NULL, NULL, NULL, '$2a$10$85k5PznzSndyVBVECqwlxuOrrpI0/rIqJyIVdpD6G5uXrlvAz0Ixa', b'0'),
	('employee48', NULL, NULL, b'0', 'email48@aaa.bbb', NULL, NULL, NULL, '$2a$10$MlOhTzKI5xmpwdvgRGlxE.w7XEGIvbsUq.HEb/jRdlhnNAwGQ85tO', b'0'),
	('employee49', NULL, NULL, b'0', 'email49@aaa.bbb', NULL, NULL, NULL, '$2a$10$vtT5hqFgQH9hIQgcVfiFy.V5OJthYJli8iYkSd8lBP90zWNff3Fae', b'0'),
	('employee5', NULL, NULL, b'0', 'email5@aaa.bbb', NULL, NULL, NULL, '$2a$10$0RLqzPyfhy1xWjc8alsPje4Le42ap8VLlViTvbnd1wa/EXb0rX19a', b'0'),
	('employee50', NULL, NULL, b'0', 'email50@aaa.bbb', NULL, NULL, NULL, '$2a$10$LThqATbKqsyy71D6pM.5x.MqyZmDCvLB92dPzl89k8BHB.BoU/Opi', b'0'),
	('employee51', NULL, NULL, b'0', 'email51@aaa.bbb', NULL, NULL, NULL, '$2a$10$suS3wb8cSrrKiBKahwRc7earWLIvObopT1t4TB2D2XjBQ5KPxxaNO', b'0'),
	('employee52', NULL, NULL, b'0', 'email52@aaa.bbb', NULL, NULL, NULL, '$2a$10$RQxlKx4yhOV8CX8lrxM6DO.cFUp8wa4JcDZ6iZaA.ye96/gY./py.', b'0'),
	('employee53', NULL, NULL, b'0', 'email53@aaa.bbb', NULL, NULL, NULL, '$2a$10$OZJIaN/1JkwoaBr8YL3FduYT.iPkwuS6gbKerr0xNdjgq5DN5zo2a', b'0'),
	('employee54', NULL, NULL, b'0', 'email54@aaa.bbb', NULL, NULL, NULL, '$2a$10$L06uQYM2BjfQonfXlI53POAMTDTFC989B6Jey6tqGCBr37OiJ4jam', b'0'),
	('employee55', NULL, NULL, b'0', 'email55@aaa.bbb', NULL, NULL, NULL, '$2a$10$LmctEMekNvTclt2.o4leX.KgQAzvgHOpo5mO68kVY/5CMiP3tUceu', b'0'),
	('employee56', NULL, NULL, b'0', 'email56@aaa.bbb', NULL, NULL, NULL, '$2a$10$ctPis0VtnwFcseCZB9pFjuYEgxCp1plRV56uR/TLSR76mvyDN6JMC', b'0'),
	('employee57', NULL, NULL, b'0', 'email57@aaa.bbb', NULL, NULL, NULL, '$2a$10$UROYyvUECwH3dfXZeA515elahn1OktGxd3uiicz6utlwaTHRhsbYy', b'0'),
	('employee58', NULL, NULL, b'0', 'email58@aaa.bbb', NULL, NULL, NULL, '$2a$10$dy6HeKVJNB.2YBLGaJJQhO2Pxt/fCEdRonSa..iSCO8Lg.3Ex/Xse', b'0'),
	('employee59', NULL, NULL, b'0', 'email59@aaa.bbb', NULL, NULL, NULL, '$2a$10$XpbShMpk6MJPVUpj/KH8ZeoyjXkFiSXaRO7kyr6Bap2.rBrdUfFr.', b'0'),
	('employee6', NULL, NULL, b'0', 'email6@aaa.bbb', NULL, NULL, NULL, '$2a$10$Zu0n1rz5KtHxOjqLqa8/7e.iRosWKz8FdE6P2934YsAZ7NY9moHbi', b'0'),
	('employee60', NULL, NULL, b'0', 'email60@aaa.bbb', NULL, NULL, NULL, '$2a$10$SDYNN3t4h9.VqeUUoXgWYuhw3xgMpndx4kiwN82e/.x/VvC.BHwqG', b'0'),
	('employee61', NULL, NULL, b'0', 'email61@aaa.bbb', NULL, NULL, NULL, '$2a$10$RomdeYV46rSX5H7PwOXq4ejGShadzIFWMtv3FVNvk7CiT1hXum0V.', b'0'),
	('employee62', NULL, NULL, b'0', 'email62@aaa.bbb', NULL, NULL, NULL, '$2a$10$xnV8m54IQ7vYeecvg6qaC.LiciZHvng9tZeq0ZODzrXZ8Zg/CSljy', b'0'),
	('employee63', NULL, NULL, b'0', 'email63@aaa.bbb', NULL, NULL, NULL, '$2a$10$4UQSUViSEJja.8vP95Zt8.5EqGd3JOF1PBtEwRQ0oo1QQs8gqGdo.', b'0'),
	('employee64', NULL, NULL, b'0', 'email64@aaa.bbb', NULL, NULL, NULL, '$2a$10$8goZkDLhwk6t5YEzzAcxZe/eh1BRGrf4k6cbd1As6YXCizjbE.nGG', b'0'),
	('employee65', NULL, NULL, b'0', 'email65@aaa.bbb', NULL, NULL, NULL, '$2a$10$ea1Htal..hG1GqmN9ZbiK.A91oaLw4GgjPCVsaspieH.KOYJdKpEK', b'0'),
	('employee66', NULL, NULL, b'0', 'email66@aaa.bbb', NULL, NULL, NULL, '$2a$10$HD5NOWo4xTLCzOizPF4c6O2QpdAP1F0AwGvDIpr2py5/51kWRTCnC', b'0'),
	('employee67', NULL, NULL, b'0', 'email67@aaa.bbb', NULL, NULL, NULL, '$2a$10$FVxBx83dETg0IJGvSc2e6u0DMzqpyBR2FDs1ue8b1HdlLOJHx66iG', b'0'),
	('employee68', NULL, NULL, b'0', 'email68@aaa.bbb', NULL, NULL, NULL, '$2a$10$RVwtBsEsVulmKIa1KCAfjukQx9uLQa6S3AxWeqBjy.O6XL.bpVldy', b'0'),
	('employee69', NULL, NULL, b'0', 'email69@aaa.bbb', NULL, NULL, NULL, '$2a$10$cU8LfIY8kYwNh3h82gNebOtfbDkeMlyU6xjx6t90wTj59CbgFNfke', b'0'),
	('employee7', NULL, NULL, b'0', 'email7@aaa.bbb', NULL, NULL, NULL, '$2a$10$3.0DgC1GjXNFm1ZH27m7CuruON0sCGlYdkT5rHEhS3kMwjwyrfp6y', b'0'),
	('employee70', NULL, NULL, b'0', 'email70@aaa.bbb', NULL, NULL, NULL, '$2a$10$N2aswgyNMpUyy96k0/OjUejt8VyTns2Y0QGu9jzKHn/BoKZbhMfvS', b'0'),
	('employee71', NULL, NULL, b'0', 'email71@aaa.bbb', NULL, NULL, NULL, '$2a$10$ecQS7La6hHYwpiLPfanppOHO8DoKwirr9mK0ZD63ArsN0BvxkKCqK', b'0'),
	('employee72', NULL, NULL, b'0', 'email72@aaa.bbb', NULL, NULL, NULL, '$2a$10$nf0.49anCarV/4WCUf2ZrOXXVJ0S0VSP6v1Kp2FEP4iOw00QgRcI6', b'0'),
	('employee73', NULL, NULL, b'0', 'email73@aaa.bbb', NULL, NULL, NULL, '$2a$10$/sDZG/0TVEOlJXHPIcRjbuPLSLqRw6zMZnlSJ.5t0z5umJWaujf5K', b'0'),
	('employee74', NULL, NULL, b'0', 'email74@aaa.bbb', NULL, NULL, NULL, '$2a$10$42FJbvfWM9VXXfL3znnWYexaI7TP4re64.cfALWexlcgBWS3EzMxW', b'0'),
	('employee75', NULL, NULL, b'0', 'email75@aaa.bbb', NULL, NULL, NULL, '$2a$10$AxBwoKrcgQkDM3LsaH6lVORneAWsmCNG/gcL6gb8zpAaO4LBYw3fO', b'0'),
	('employee76', NULL, NULL, b'0', 'email76@aaa.bbb', NULL, NULL, NULL, '$2a$10$pEksv/RNgA4Aw6TdcgLvNOyI/Nf2ilduJKCytQkQn0edTpj55DfgK', b'0'),
	('employee77', NULL, NULL, b'0', 'email77@aaa.bbb', NULL, NULL, NULL, '$2a$10$8twFOXNZQ7PgkaOM6NRMOu.BuU6V/MzhQPy8UKr/6XAXjKZ4EKI7u', b'0'),
	('employee78', NULL, NULL, b'0', 'email78@aaa.bbb', NULL, NULL, NULL, '$2a$10$wWe8jI6WfUhdUOjdi1dtEOQqGlgqkDV37ztBf6s53JJPGc9g5Oc/K', b'0'),
	('employee79', NULL, NULL, b'0', 'email79@aaa.bbb', NULL, NULL, NULL, '$2a$10$xXcreki4mWjovxZMiGmf9uWH4eYOPVt8aLF5F92SzKuXdhjhNkUqW', b'0'),
	('employee8', NULL, NULL, b'0', 'email8@aaa.bbb', NULL, NULL, NULL, '$2a$10$Jgj/XloRthlFbBOQWNvgzu7JfPl4HX3Ljm94rUd9tDmsjU4tpyOUa', b'0'),
	('employee80', NULL, NULL, b'0', 'email80@aaa.bbb', NULL, NULL, NULL, '$2a$10$uD2aMDcPNKo2LUDFN1nB2ueMeD0p2kh37SAfaabmKoCnHAmaNowe2', b'0'),
	('employee81', NULL, NULL, b'0', 'email81@aaa.bbb', NULL, NULL, NULL, '$2a$10$Mdt038uPSNSbwLEf4RCgTesX6/HKzzT636RYqF1b7UvXS5UoDoVd.', b'0'),
	('employee82', NULL, NULL, b'0', 'email82@aaa.bbb', NULL, NULL, NULL, '$2a$10$GxkbBtS7FH5Dq7vrp4wi6.5G84rMsYb9pD6BT0J4347jv5guOYseS', b'0'),
	('employee83', NULL, NULL, b'0', 'email83@aaa.bbb', NULL, NULL, NULL, '$2a$10$jShcrZoXEj.XW2LVbQsvdOP5uhwLKSbPJzpVYwbgbpwgu7fS6XYCO', b'0'),
	('employee84', NULL, NULL, b'0', 'email84@aaa.bbb', NULL, NULL, NULL, '$2a$10$Z6p0ngV9Gi4LrwbwGgxW8e4/VHEie8yQgn9dOf9PpHCFterKkYyb2', b'0'),
	('employee85', NULL, NULL, b'0', 'email85@aaa.bbb', NULL, NULL, NULL, '$2a$10$PWp2GoDaMORopLKGdCuhQu2wC30oLSEoTIvziq1T4GUV2pSKM6gKu', b'0'),
	('employee86', NULL, NULL, b'0', 'email86@aaa.bbb', NULL, NULL, NULL, '$2a$10$msHi..A4FgEYhMVtdNGZcu7CNFPMSCfYPo06e/uZEnuDMG4w9w41m', b'0'),
	('employee87', NULL, NULL, b'0', 'email87@aaa.bbb', NULL, NULL, NULL, '$2a$10$awqD3Rlk88ztJVvKf0sGKeaHYLXHBJB5ULI9pse7nMgg3Isb7qD0u', b'0'),
	('employee88', NULL, NULL, b'0', 'email88@aaa.bbb', NULL, NULL, NULL, '$2a$10$vW8Qf9MiX681JaIQ6XNgWOsi/H/4DFE2U8o5dYKdL5uMcnawWIsKi', b'0'),
	('employee89', NULL, NULL, b'0', 'email89@aaa.bbb', NULL, NULL, NULL, '$2a$10$2TSBGb/u8MYAGJ1VVcMqW.t.ukAIvqGOlcS6RvgvI7ex8Zx6rKVlm', b'0'),
	('employee9', NULL, NULL, b'0', 'email9@aaa.bbb', NULL, NULL, NULL, '$2a$10$Zee/2k1zXvab9hZxyriABu4qBteLCYI..XIT19S7WwOtDK.hMKBQe', b'0'),
	('employee90', NULL, NULL, b'0', 'email90@aaa.bbb', NULL, NULL, NULL, '$2a$10$VpXSUpwg52CbY9klgQTKJO6OX32TjBzzUz8GPmMFJNe/8RZmWKIqK', b'0'),
	('employee91', NULL, NULL, b'0', 'email91@aaa.bbb', NULL, NULL, NULL, '$2a$10$NhHVaZaCKKa5Y8lRpgXCM.mFGdZB.8krDReWGi/n3r2338C4zbLca', b'0'),
	('employee92', NULL, NULL, b'0', 'email92@aaa.bbb', NULL, NULL, NULL, '$2a$10$dhjeXhhBZdCYjTNI0YTRB.TBe4XTVWsK4yEANqyL6i.Q3Qe1E/2QW', b'0'),
	('employee93', NULL, NULL, b'0', 'email93@aaa.bbb', NULL, NULL, NULL, '$2a$10$mTdPWSq3LMJJovQe3ep69O4a2oMqPa5znXqwc63GFyjeEnuaPTjVW', b'0'),
	('employee94', NULL, NULL, b'0', 'email94@aaa.bbb', NULL, NULL, NULL, '$2a$10$sRZ7uRauyWuhtnlYSkt9leT8cG3UXRTGnl0.QeB1AOEmSHJuEPo02', b'0'),
	('employee95', NULL, NULL, b'0', 'email95@aaa.bbb', NULL, NULL, NULL, '$2a$10$/aZGUNSmy3v3AFu37NrAauT6jZQktQyu.3nPqUr3ri7Ghr.iSFb1q', b'0'),
	('employee96', NULL, NULL, b'0', 'email96@aaa.bbb', NULL, NULL, NULL, '$2a$10$r0XH1sVzXEGTWJSFF0z4Teb4mNS.cLJqob4pZsgZcGNV4OtYUr/0i', b'0'),
	('employee97', NULL, NULL, b'0', 'email97@aaa.bbb', NULL, NULL, NULL, '$2a$10$.oyZcwM94dL5OFA1RyFcbe5n3lWQwSGuqniiW5CE6pfirrg.C6LWG', b'0'),
	('employee98', NULL, NULL, b'0', 'email98@aaa.bbb', NULL, NULL, NULL, '$2a$10$e2ayDj309cfjB24/HOUw0exE.z48pMqYL/.3FEw8QK3NQOi.Oh4ve', b'0'),
	('employee99', NULL, NULL, b'0', 'email99@aaa.bbb', NULL, NULL, NULL, '$2a$10$TNi18mlnRa2cFX1geLD8c.UJaq1uWDRw9B.4DHfU.DlGCH.YcQfYe', b'0');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;

-- 테이블 delidb.employee_role_set 구조 내보내기
CREATE TABLE IF NOT EXISTS `employee_role_set` (
  `employee_employee_id` varchar(255) NOT NULL,
  `role_set` int(11) DEFAULT NULL,
  KEY `FKcj8l65096hdxequx4qk30xpo0` (`employee_employee_id`),
  CONSTRAINT `FKcj8l65096hdxequx4qk30xpo0` FOREIGN KEY (`employee_employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.employee_role_set:~111 rows (대략적) 내보내기
/*!40000 ALTER TABLE `employee_role_set` DISABLE KEYS */;
INSERT INTO `employee_role_set` (`employee_employee_id`, `role_set`) VALUES
	('employee1', 0),
	('employee2', 0),
	('employee3', 0),
	('employee4', 0),
	('employee5', 0),
	('employee6', 0),
	('employee7', 0),
	('employee8', 0),
	('employee9', 0),
	('employee10', 0),
	('employee11', 0),
	('employee12', 0),
	('employee13', 0),
	('employee14', 0),
	('employee15', 0),
	('employee16', 0),
	('employee17', 0),
	('employee18', 0),
	('employee19', 0),
	('employee20', 0),
	('employee21', 0),
	('employee22', 0),
	('employee23', 0),
	('employee24', 0),
	('employee25', 0),
	('employee26', 0),
	('employee27', 0),
	('employee28', 0),
	('employee29', 0),
	('employee30', 0),
	('employee31', 0),
	('employee32', 0),
	('employee33', 0),
	('employee34', 0),
	('employee35', 0),
	('employee36', 0),
	('employee37', 0),
	('employee38', 0),
	('employee39', 0),
	('employee40', 0),
	('employee41', 0),
	('employee42', 0),
	('employee43', 0),
	('employee44', 0),
	('employee45', 0),
	('employee46', 0),
	('employee47', 0),
	('employee48', 0),
	('employee49', 0),
	('employee50', 0),
	('employee51', 0),
	('employee52', 0),
	('employee53', 0),
	('employee54', 0),
	('employee55', 0),
	('employee56', 0),
	('employee57', 0),
	('employee58', 0),
	('employee59', 0),
	('employee60', 0),
	('employee61', 0),
	('employee62', 0),
	('employee63', 0),
	('employee64', 0),
	('employee65', 0),
	('employee66', 0),
	('employee67', 0),
	('employee68', 0),
	('employee69', 0),
	('employee70', 0),
	('employee71', 0),
	('employee72', 0),
	('employee73', 0),
	('employee74', 0),
	('employee75', 0),
	('employee76', 0),
	('employee77', 0),
	('employee78', 0),
	('employee79', 0),
	('employee80', 0),
	('employee81', 0),
	('employee82', 0),
	('employee83', 0),
	('employee84', 0),
	('employee85', 0),
	('employee86', 0),
	('employee87', 0),
	('employee88', 0),
	('employee89', 0),
	('employee90', 0),
	('employee90', 1),
	('employee91', 0),
	('employee91', 1),
	('employee92', 0),
	('employee92', 1),
	('employee93', 0),
	('employee93', 1),
	('employee94', 0),
	('employee94', 1),
	('employee95', 0),
	('employee95', 1),
	('employee96', 0),
	('employee96', 1),
	('employee97', 0),
	('employee97', 1),
	('employee98', 0),
	('employee98', 1),
	('employee99', 0),
	('employee99', 1),
	('employee100', 0),
	('employee100', 1);
/*!40000 ALTER TABLE `employee_role_set` ENABLE KEYS */;

-- 테이블 delidb.materials 구조 내보내기
CREATE TABLE IF NOT EXISTS `materials` (
  `material_no` int(11) NOT NULL,
  `moddate` datetime(6) DEFAULT NULL,
  `regdate` datetime(6) DEFAULT NULL,
  `material_code` varchar(100) DEFAULT NULL,
  `material_explaination` varchar(1000) DEFAULT NULL,
  `material_name` varchar(50) DEFAULT NULL,
  `material_supply_price` bigint(20) DEFAULT NULL,
  `material_type` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`material_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.materials:~1 rows (대략적) 내보내기
/*!40000 ALTER TABLE `materials` DISABLE KEYS */;
INSERT INTO `materials` (`material_no`, `moddate`, `regdate`, `material_code`, `material_explaination`, `material_name`, `material_supply_price`, `material_type`) VALUES
	(0, NULL, NULL, NULL, 'Explaination Test', 'Name Test', NULL, 'Type Test');
/*!40000 ALTER TABLE `materials` ENABLE KEYS */;

-- 테이블 delidb.material_inventory 구조 내보내기
CREATE TABLE IF NOT EXISTS `material_inventory` (
  `material_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `material_incoming_quantity` int(11) DEFAULT NULL,
  `material_outgoing_quantity` int(11) DEFAULT NULL,
  `material_stock` int(11) DEFAULT NULL,
  `material_supply_price` bigint(20) DEFAULT NULL,
  `material_total_inventory_payments` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`material_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.material_inventory:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `material_inventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `material_inventory` ENABLE KEYS */;

-- 테이블 delidb.material_procurement_contract 구조 내보내기
CREATE TABLE IF NOT EXISTS `material_procurement_contract` (
  `material_procurement_contract_no` int(11) NOT NULL AUTO_INCREMENT,
  `moddate` datetime(6) DEFAULT NULL,
  `regdate` datetime(6) DEFAULT NULL,
  `material_code` varchar(255) DEFAULT NULL,
  `material_name` varchar(255) DEFAULT NULL,
  `material_procurement_contract_code` varchar(255) DEFAULT NULL,
  `material_procurement_contract_date` date DEFAULT NULL,
  `material_procurement_contract_state` varchar(255) DEFAULT NULL,
  `material_supply_price` bigint(20) DEFAULT NULL,
  `supplier_name` varchar(255) DEFAULT NULL,
  `supplier_status` varchar(255) DEFAULT NULL,
  `employee_employee_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`material_procurement_contract_no`),
  KEY `FK95k0ox6wf7xcfuyo54v8staqj` (`employee_employee_id`),
  CONSTRAINT `FK95k0ox6wf7xcfuyo54v8staqj` FOREIGN KEY (`employee_employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.material_procurement_contract:~100 rows (대략적) 내보내기
/*!40000 ALTER TABLE `material_procurement_contract` DISABLE KEYS */;
INSERT INTO `material_procurement_contract` (`material_procurement_contract_no`, `moddate`, `regdate`, `material_code`, `material_name`, `material_procurement_contract_code`, `material_procurement_contract_date`, `material_procurement_contract_state`, `material_supply_price`, `supplier_name`, `supplier_status`, `employee_employee_id`) VALUES
	(1, NULL, NULL, NULL, NULL, 'contract_code...1', '2023-09-15', 'ready...1', NULL, NULL, NULL, NULL),
	(2, NULL, NULL, NULL, NULL, 'contract_code...2', '2023-09-15', 'ready...2', NULL, NULL, NULL, NULL),
	(3, NULL, NULL, NULL, NULL, 'contract_code...3', '2023-09-15', 'ready...3', NULL, NULL, NULL, NULL),
	(4, NULL, NULL, NULL, NULL, 'contract_code...4', '2023-09-15', 'ready...4', NULL, NULL, NULL, NULL),
	(5, NULL, NULL, NULL, NULL, 'contract_code...5', '2023-09-15', 'ready...5', NULL, NULL, NULL, NULL),
	(6, NULL, NULL, NULL, NULL, 'contract_code...6', '2023-09-15', 'ready...6', NULL, NULL, NULL, NULL),
	(7, NULL, NULL, NULL, NULL, 'contract_code...7', '2023-09-15', 'ready...7', NULL, NULL, NULL, NULL),
	(8, NULL, NULL, NULL, NULL, 'contract_code...8', '2023-09-15', 'ready...8', NULL, NULL, NULL, NULL),
	(9, NULL, NULL, NULL, NULL, 'contract_code...9', '2023-09-15', 'ready...9', NULL, NULL, NULL, NULL),
	(10, NULL, NULL, NULL, NULL, 'contract_code...10', '2023-09-15', 'ready...10', NULL, NULL, NULL, NULL),
	(11, NULL, NULL, NULL, NULL, 'contract_code...11', '2023-09-15', 'ready...11', NULL, NULL, NULL, NULL),
	(12, NULL, NULL, NULL, NULL, 'contract_code...12', '2023-09-15', 'ready...12', NULL, NULL, NULL, NULL),
	(13, NULL, NULL, NULL, NULL, 'contract_code...13', '2023-09-15', 'ready...13', NULL, NULL, NULL, NULL),
	(14, NULL, NULL, NULL, NULL, 'contract_code...14', '2023-09-15', 'ready...14', NULL, NULL, NULL, NULL),
	(15, NULL, NULL, NULL, NULL, 'contract_code...15', '2023-09-15', 'ready...15', NULL, NULL, NULL, NULL),
	(16, NULL, NULL, NULL, NULL, 'contract_code...16', '2023-09-15', 'ready...16', NULL, NULL, NULL, NULL),
	(17, NULL, NULL, NULL, NULL, 'contract_code...17', '2023-09-15', 'ready...17', NULL, NULL, NULL, NULL),
	(18, NULL, NULL, NULL, NULL, 'contract_code...18', '2023-09-15', 'ready...18', NULL, NULL, NULL, NULL),
	(19, NULL, NULL, NULL, NULL, 'contract_code...19', '2023-09-15', 'ready...19', NULL, NULL, NULL, NULL),
	(20, NULL, NULL, NULL, NULL, 'contract_code...20', '2023-09-15', 'ready...20', NULL, NULL, NULL, NULL),
	(21, NULL, NULL, NULL, NULL, 'contract_code...21', '2023-09-15', 'ready...21', NULL, NULL, NULL, NULL),
	(22, NULL, NULL, NULL, NULL, 'contract_code...22', '2023-09-15', 'ready...22', NULL, NULL, NULL, NULL),
	(23, NULL, NULL, NULL, NULL, 'contract_code...23', '2023-09-15', 'ready...23', NULL, NULL, NULL, NULL),
	(24, NULL, NULL, NULL, NULL, 'contract_code...24', '2023-09-15', 'ready...24', NULL, NULL, NULL, NULL),
	(25, NULL, NULL, NULL, NULL, 'contract_code...25', '2023-09-15', 'ready...25', NULL, NULL, NULL, NULL),
	(26, NULL, NULL, NULL, NULL, 'contract_code...26', '2023-09-15', 'ready...26', NULL, NULL, NULL, NULL),
	(27, NULL, NULL, NULL, NULL, 'contract_code...27', '2023-09-15', 'ready...27', NULL, NULL, NULL, NULL),
	(28, NULL, NULL, NULL, NULL, 'contract_code...28', '2023-09-15', 'ready...28', NULL, NULL, NULL, NULL),
	(29, NULL, NULL, NULL, NULL, 'contract_code...29', '2023-09-15', 'ready...29', NULL, NULL, NULL, NULL),
	(30, NULL, NULL, NULL, NULL, 'contract_code...30', '2023-09-15', 'ready...30', NULL, NULL, NULL, NULL),
	(31, NULL, NULL, NULL, NULL, 'contract_code...31', '2023-09-15', 'ready...31', NULL, NULL, NULL, NULL),
	(32, NULL, NULL, NULL, NULL, 'contract_code...32', '2023-09-15', 'ready...32', NULL, NULL, NULL, NULL),
	(33, NULL, NULL, NULL, NULL, 'contract_code...33', '2023-09-15', 'ready...33', NULL, NULL, NULL, NULL),
	(34, NULL, NULL, NULL, NULL, 'contract_code...34', '2023-09-15', 'ready...34', NULL, NULL, NULL, NULL),
	(35, NULL, NULL, NULL, NULL, 'contract_code...35', '2023-09-15', 'ready...35', NULL, NULL, NULL, NULL),
	(36, NULL, NULL, NULL, NULL, 'contract_code...36', '2023-09-15', 'ready...36', NULL, NULL, NULL, NULL),
	(37, NULL, NULL, NULL, NULL, 'contract_code...37', '2023-09-15', 'ready...37', NULL, NULL, NULL, NULL),
	(38, NULL, NULL, NULL, NULL, 'contract_code...38', '2023-09-15', 'ready...38', NULL, NULL, NULL, NULL),
	(39, NULL, NULL, NULL, NULL, 'contract_code...39', '2023-09-15', 'ready...39', NULL, NULL, NULL, NULL),
	(40, NULL, NULL, NULL, NULL, 'contract_code...40', '2023-09-15', 'ready...40', NULL, NULL, NULL, NULL),
	(41, NULL, NULL, NULL, NULL, 'contract_code...41', '2023-09-15', 'ready...41', NULL, NULL, NULL, NULL),
	(42, NULL, NULL, NULL, NULL, 'contract_code...42', '2023-09-15', 'ready...42', NULL, NULL, NULL, NULL),
	(43, NULL, NULL, NULL, NULL, 'contract_code...43', '2023-09-15', 'ready...43', NULL, NULL, NULL, NULL),
	(44, NULL, NULL, NULL, NULL, 'contract_code...44', '2023-09-15', 'ready...44', NULL, NULL, NULL, NULL),
	(45, NULL, NULL, NULL, NULL, 'contract_code...45', '2023-09-15', 'ready...45', NULL, NULL, NULL, NULL),
	(46, NULL, NULL, NULL, NULL, 'contract_code...46', '2023-09-15', 'ready...46', NULL, NULL, NULL, NULL),
	(47, NULL, NULL, NULL, NULL, 'contract_code...47', '2023-09-15', 'ready...47', NULL, NULL, NULL, NULL),
	(48, NULL, NULL, NULL, NULL, 'contract_code...48', '2023-09-15', 'ready...48', NULL, NULL, NULL, NULL),
	(49, NULL, NULL, NULL, NULL, 'contract_code...49', '2023-09-15', 'ready...49', NULL, NULL, NULL, NULL),
	(50, NULL, NULL, NULL, NULL, 'contract_code...50', '2023-09-15', 'ready...50', NULL, NULL, NULL, NULL),
	(51, NULL, NULL, NULL, NULL, 'contract_code...51', '2023-09-15', 'ready...51', NULL, NULL, NULL, NULL),
	(52, NULL, NULL, NULL, NULL, 'contract_code...52', '2023-09-15', 'ready...52', NULL, NULL, NULL, NULL),
	(53, NULL, NULL, NULL, NULL, 'contract_code...53', '2023-09-15', 'ready...53', NULL, NULL, NULL, NULL),
	(54, NULL, NULL, NULL, NULL, 'contract_code...54', '2023-09-15', 'ready...54', NULL, NULL, NULL, NULL),
	(55, NULL, NULL, NULL, NULL, 'contract_code...55', '2023-09-15', 'ready...55', NULL, NULL, NULL, NULL),
	(56, NULL, NULL, NULL, NULL, 'contract_code...56', '2023-09-15', 'ready...56', NULL, NULL, NULL, NULL),
	(57, NULL, NULL, NULL, NULL, 'contract_code...57', '2023-09-15', 'ready...57', NULL, NULL, NULL, NULL),
	(58, NULL, NULL, NULL, NULL, 'contract_code...58', '2023-09-15', 'ready...58', NULL, NULL, NULL, NULL),
	(59, NULL, NULL, NULL, NULL, 'contract_code...59', '2023-09-15', 'ready...59', NULL, NULL, NULL, NULL),
	(60, NULL, NULL, NULL, NULL, 'contract_code...60', '2023-09-15', 'ready...60', NULL, NULL, NULL, NULL),
	(61, NULL, NULL, NULL, NULL, 'contract_code...61', '2023-09-15', 'ready...61', NULL, NULL, NULL, NULL),
	(62, NULL, NULL, NULL, NULL, 'contract_code...62', '2023-09-15', 'ready...62', NULL, NULL, NULL, NULL),
	(63, NULL, NULL, NULL, NULL, 'contract_code...63', '2023-09-15', 'ready...63', NULL, NULL, NULL, NULL),
	(64, NULL, NULL, NULL, NULL, 'contract_code...64', '2023-09-15', 'ready...64', NULL, NULL, NULL, NULL),
	(65, NULL, NULL, NULL, NULL, 'contract_code...65', '2023-09-15', 'ready...65', NULL, NULL, NULL, NULL),
	(66, NULL, NULL, NULL, NULL, 'contract_code...66', '2023-09-15', 'ready...66', NULL, NULL, NULL, NULL),
	(67, NULL, NULL, NULL, NULL, 'contract_code...67', '2023-09-15', 'ready...67', NULL, NULL, NULL, NULL),
	(68, NULL, NULL, NULL, NULL, 'contract_code...68', '2023-09-15', 'ready...68', NULL, NULL, NULL, NULL),
	(69, NULL, NULL, NULL, NULL, 'contract_code...69', '2023-09-15', 'ready...69', NULL, NULL, NULL, NULL),
	(70, NULL, NULL, NULL, NULL, 'contract_code...70', '2023-09-15', 'ready...70', NULL, NULL, NULL, NULL),
	(71, NULL, NULL, NULL, NULL, 'contract_code...71', '2023-09-15', 'ready...71', NULL, NULL, NULL, NULL),
	(72, NULL, NULL, NULL, NULL, 'contract_code...72', '2023-09-15', 'ready...72', NULL, NULL, NULL, NULL),
	(73, NULL, NULL, NULL, NULL, 'contract_code...73', '2023-09-15', 'ready...73', NULL, NULL, NULL, NULL),
	(74, NULL, NULL, NULL, NULL, 'contract_code...74', '2023-09-15', 'ready...74', NULL, NULL, NULL, NULL),
	(75, NULL, NULL, NULL, NULL, 'contract_code...75', '2023-09-15', 'ready...75', NULL, NULL, NULL, NULL),
	(76, NULL, NULL, NULL, NULL, 'contract_code...76', '2023-09-15', 'ready...76', NULL, NULL, NULL, NULL),
	(77, NULL, NULL, NULL, NULL, 'contract_code...77', '2023-09-15', 'ready...77', NULL, NULL, NULL, NULL),
	(78, NULL, NULL, NULL, NULL, 'contract_code...78', '2023-09-15', 'ready...78', NULL, NULL, NULL, NULL),
	(79, NULL, NULL, NULL, NULL, 'contract_code...79', '2023-09-15', 'ready...79', NULL, NULL, NULL, NULL),
	(80, NULL, NULL, NULL, NULL, 'contract_code...80', '2023-09-15', 'ready...80', NULL, NULL, NULL, NULL),
	(81, NULL, NULL, NULL, NULL, 'contract_code...81', '2023-09-15', 'ready...81', NULL, NULL, NULL, NULL),
	(82, NULL, NULL, NULL, NULL, 'contract_code...82', '2023-09-15', 'ready...82', NULL, NULL, NULL, NULL),
	(83, NULL, NULL, NULL, NULL, 'contract_code...83', '2023-09-15', 'ready...83', NULL, NULL, NULL, NULL),
	(84, NULL, NULL, NULL, NULL, 'contract_code...84', '2023-09-15', 'ready...84', NULL, NULL, NULL, NULL),
	(85, NULL, NULL, NULL, NULL, 'contract_code...85', '2023-09-15', 'ready...85', NULL, NULL, NULL, NULL),
	(86, NULL, NULL, NULL, NULL, 'contract_code...86', '2023-09-15', 'ready...86', NULL, NULL, NULL, NULL),
	(87, NULL, NULL, NULL, NULL, 'contract_code...87', '2023-09-15', 'ready...87', NULL, NULL, NULL, NULL),
	(88, NULL, NULL, NULL, NULL, 'contract_code...88', '2023-09-15', 'ready...88', NULL, NULL, NULL, NULL),
	(89, NULL, NULL, NULL, NULL, 'contract_code...89', '2023-09-15', 'ready...89', NULL, NULL, NULL, NULL),
	(90, NULL, NULL, NULL, NULL, 'contract_code...90', '2023-09-15', 'ready...90', NULL, NULL, NULL, NULL),
	(91, NULL, NULL, NULL, NULL, 'contract_code...91', '2023-09-15', 'ready...91', NULL, NULL, NULL, NULL),
	(92, NULL, NULL, NULL, NULL, 'contract_code...92', '2023-09-15', 'ready...92', NULL, NULL, NULL, NULL),
	(93, NULL, NULL, NULL, NULL, 'contract_code...93', '2023-09-15', 'ready...93', NULL, NULL, NULL, NULL),
	(94, NULL, NULL, NULL, NULL, 'contract_code...94', '2023-09-15', 'ready...94', NULL, NULL, NULL, NULL),
	(95, NULL, NULL, NULL, NULL, 'contract_code...95', '2023-09-15', 'ready...95', NULL, NULL, NULL, NULL),
	(96, NULL, NULL, NULL, NULL, 'contract_code...96', '2023-09-15', 'ready...96', NULL, NULL, NULL, NULL),
	(97, NULL, NULL, NULL, NULL, 'contract_code...97', '2023-09-15', 'ready...97', NULL, NULL, NULL, NULL),
	(98, NULL, NULL, NULL, NULL, 'contract_code...98', '2023-09-15', 'ready...98', NULL, NULL, NULL, NULL),
	(99, NULL, NULL, NULL, NULL, 'contract_code...99', '2023-09-15', 'ready...99', NULL, NULL, NULL, NULL),
	(100, NULL, NULL, NULL, NULL, 'contract_code...100', '2023-09-15', 'ready...100', NULL, NULL, NULL, NULL);
/*!40000 ALTER TABLE `material_procurement_contract` ENABLE KEYS */;

-- 테이블 delidb.material_procurement_planning 구조 내보내기
CREATE TABLE IF NOT EXISTS `material_procurement_planning` (
  `material_procurement_plan_no` int(11) NOT NULL AUTO_INCREMENT,
  `moddate` datetime(6) DEFAULT NULL,
  `regdate` datetime(6) DEFAULT NULL,
  `employee_no` int(11) NOT NULL,
  `material_code` varchar(255) DEFAULT NULL,
  `material_name` varchar(255) DEFAULT NULL,
  `material_no` int(11) NOT NULL,
  `material_procurement_state` varchar(255) DEFAULT NULL,
  `material_requirements_count` int(11) NOT NULL,
  `procurement_delivery_date` date DEFAULT NULL,
  `production_plan_no` int(11) NOT NULL,
  `employee_employee_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`material_procurement_plan_no`),
  KEY `FK7fs79v80x5v30tg87ftqyo79y` (`employee_employee_id`),
  CONSTRAINT `FK7fs79v80x5v30tg87ftqyo79y` FOREIGN KEY (`employee_employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.material_procurement_planning:~100 rows (대략적) 내보내기
/*!40000 ALTER TABLE `material_procurement_planning` DISABLE KEYS */;
INSERT INTO `material_procurement_planning` (`material_procurement_plan_no`, `moddate`, `regdate`, `employee_no`, `material_code`, `material_name`, `material_no`, `material_procurement_state`, `material_requirements_count`, `procurement_delivery_date`, `production_plan_no`, `employee_employee_id`) VALUES
	(1, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...1', 1, '2023-11-15', 0, NULL),
	(2, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...2', 2, '2023-11-15', 0, NULL),
	(3, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...3', 3, '2023-11-15', 0, NULL),
	(4, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...4', 4, '2023-11-15', 0, NULL),
	(5, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...5', 5, '2023-11-15', 0, NULL),
	(6, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...6', 6, '2023-11-15', 0, NULL),
	(7, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...7', 7, '2023-11-15', 0, NULL),
	(8, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...8', 8, '2023-11-15', 0, NULL),
	(9, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...9', 9, '2023-11-15', 0, NULL),
	(10, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...10', 10, '2023-11-15', 0, NULL),
	(11, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...11', 11, '2023-11-15', 0, NULL),
	(12, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...12', 12, '2023-11-15', 0, NULL),
	(13, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...13', 13, '2023-11-15', 0, NULL),
	(14, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...14', 14, '2023-11-15', 0, NULL),
	(15, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...15', 15, '2023-11-15', 0, NULL),
	(16, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...16', 16, '2023-11-15', 0, NULL),
	(17, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...17', 17, '2023-11-15', 0, NULL),
	(18, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...18', 18, '2023-11-15', 0, NULL),
	(19, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...19', 19, '2023-11-15', 0, NULL),
	(20, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...20', 20, '2023-11-15', 0, NULL),
	(21, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...21', 21, '2023-11-15', 0, NULL),
	(22, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...22', 22, '2023-11-15', 0, NULL),
	(23, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...23', 23, '2023-11-15', 0, NULL),
	(24, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...24', 24, '2023-11-15', 0, NULL),
	(25, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...25', 25, '2023-11-15', 0, NULL),
	(26, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...26', 26, '2023-11-15', 0, NULL),
	(27, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...27', 27, '2023-11-15', 0, NULL),
	(28, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...28', 28, '2023-11-15', 0, NULL),
	(29, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...29', 29, '2023-11-15', 0, NULL),
	(30, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...30', 30, '2023-11-15', 0, NULL),
	(31, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...31', 31, '2023-11-15', 0, NULL),
	(32, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...32', 32, '2023-11-15', 0, NULL),
	(33, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...33', 33, '2023-11-15', 0, NULL),
	(34, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...34', 34, '2023-11-15', 0, NULL),
	(35, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...35', 35, '2023-11-15', 0, NULL),
	(36, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...36', 36, '2023-11-15', 0, NULL),
	(37, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...37', 37, '2023-11-15', 0, NULL),
	(38, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...38', 38, '2023-11-15', 0, NULL),
	(39, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...39', 39, '2023-11-15', 0, NULL),
	(40, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...40', 40, '2023-11-15', 0, NULL),
	(41, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...41', 41, '2023-11-15', 0, NULL),
	(42, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...42', 42, '2023-11-15', 0, NULL),
	(43, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...43', 43, '2023-11-15', 0, NULL),
	(44, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...44', 44, '2023-11-15', 0, NULL),
	(45, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...45', 45, '2023-11-15', 0, NULL),
	(46, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...46', 46, '2023-11-15', 0, NULL),
	(47, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...47', 47, '2023-11-15', 0, NULL),
	(48, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...48', 48, '2023-11-15', 0, NULL),
	(49, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...49', 49, '2023-11-15', 0, NULL),
	(50, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...50', 50, '2023-11-15', 0, NULL),
	(51, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...51', 51, '2023-11-15', 0, NULL),
	(52, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...52', 52, '2023-11-15', 0, NULL),
	(53, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...53', 53, '2023-11-15', 0, NULL),
	(54, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...54', 54, '2023-11-15', 0, NULL),
	(55, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...55', 55, '2023-11-15', 0, NULL),
	(56, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...56', 56, '2023-11-15', 0, NULL),
	(57, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...57', 57, '2023-11-15', 0, NULL),
	(58, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...58', 58, '2023-11-15', 0, NULL),
	(59, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...59', 59, '2023-11-15', 0, NULL),
	(60, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...60', 60, '2023-11-15', 0, NULL),
	(61, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...61', 61, '2023-11-15', 0, NULL),
	(62, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...62', 62, '2023-11-15', 0, NULL),
	(63, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...63', 63, '2023-11-15', 0, NULL),
	(64, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...64', 64, '2023-11-15', 0, NULL),
	(65, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...65', 65, '2023-11-15', 0, NULL),
	(66, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...66', 66, '2023-11-15', 0, NULL),
	(67, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...67', 67, '2023-11-15', 0, NULL),
	(68, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...68', 68, '2023-11-15', 0, NULL),
	(69, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...69', 69, '2023-11-15', 0, NULL),
	(70, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...70', 70, '2023-11-15', 0, NULL),
	(71, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...71', 71, '2023-11-15', 0, NULL),
	(72, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...72', 72, '2023-11-15', 0, NULL),
	(73, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...73', 73, '2023-11-15', 0, NULL),
	(74, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...74', 74, '2023-11-15', 0, NULL),
	(75, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...75', 75, '2023-11-15', 0, NULL),
	(76, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...76', 76, '2023-11-15', 0, NULL),
	(77, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...77', 77, '2023-11-15', 0, NULL),
	(78, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...78', 78, '2023-11-15', 0, NULL),
	(79, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...79', 79, '2023-11-15', 0, NULL),
	(80, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...80', 80, '2023-11-15', 0, NULL),
	(81, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...81', 81, '2023-11-15', 0, NULL),
	(82, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...82', 82, '2023-11-15', 0, NULL),
	(83, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...83', 83, '2023-11-15', 0, NULL),
	(84, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...84', 84, '2023-11-15', 0, NULL),
	(85, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...85', 85, '2023-11-15', 0, NULL),
	(86, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...86', 86, '2023-11-15', 0, NULL),
	(87, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...87', 87, '2023-11-15', 0, NULL),
	(88, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...88', 88, '2023-11-15', 0, NULL),
	(89, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...89', 89, '2023-11-15', 0, NULL),
	(90, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...90', 90, '2023-11-15', 0, NULL),
	(91, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...91', 91, '2023-11-15', 0, NULL),
	(92, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...92', 92, '2023-11-15', 0, NULL),
	(93, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...93', 93, '2023-11-15', 0, NULL),
	(94, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...94', 94, '2023-11-15', 0, NULL),
	(95, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...95', 95, '2023-11-15', 0, NULL),
	(96, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...96', 96, '2023-11-15', 0, NULL),
	(97, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...97', 97, '2023-11-15', 0, NULL),
	(98, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...98', 98, '2023-11-15', 0, NULL),
	(99, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...99', 99, '2023-11-15', 0, NULL),
	(100, NULL, NULL, 0, NULL, NULL, 0, 'procurement_state...100', 100, '2023-11-15', 0, NULL);
/*!40000 ALTER TABLE `material_procurement_planning` ENABLE KEYS */;

-- 테이블 delidb.orders 구조 내보내기
CREATE TABLE IF NOT EXISTS `orders` (
  `order_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `employee_name` varchar(255) DEFAULT NULL,
  `material_name` varchar(255) DEFAULT NULL,
  `order_code` varchar(255) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `order_delivery_date` date DEFAULT NULL,
  `order_etc` varchar(255) DEFAULT NULL,
  `order_quantity` int(11) NOT NULL,
  `order_state` varchar(255) DEFAULT NULL,
  `employee_employee_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_no`),
  KEY `FKo16ob8t2nf4v1rghg5td5fcdh` (`employee_employee_id`),
  CONSTRAINT `FKo16ob8t2nf4v1rghg5td5fcdh` FOREIGN KEY (`employee_employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.orders:~10 rows (대략적) 내보내기
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`order_no`, `employee_name`, `material_name`, `order_code`, `order_date`, `order_delivery_date`, `order_etc`, `order_quantity`, `order_state`, `employee_employee_id`) VALUES
	(1, 'employee1', 'material1', 'tmpCode...1', '2023-09-15', '2023-10-15', 'etc1', 100, 'READY', 'employee1'),
	(2, 'employee1', 'material2', 'tmpCode...2', '2023-09-15', '2023-10-15', 'etc2', 200, 'READY', 'employee1'),
	(3, 'employee1', 'material3', 'tmpCode...3', '2023-09-15', '2023-10-15', 'etc3', 300, 'READY', 'employee1'),
	(4, 'employee1', 'material4', 'tmpCode...4', '2023-09-15', '2023-10-15', 'etc4', 400, 'READY', 'employee1'),
	(5, 'employee1', 'material5', 'tmpCode...5', '2023-09-15', '2023-10-15', 'etc5', 500, 'READY', 'employee1'),
	(6, 'employee1', 'material6', 'tmpCode...6', '2023-09-15', '2023-10-15', 'etc6', 600, 'READY', 'employee1'),
	(7, 'employee1', 'material7', 'tmpCode...7', '2023-09-15', '2023-10-15', 'etc7', 700, 'READY', 'employee1'),
	(8, 'employee1', 'material8', 'tmpCode...8', '2023-09-15', '2023-10-15', 'etc8', 800, 'READY', 'employee1'),
	(9, 'employee1', 'material9', 'tmpCode...9', '2023-09-15', '2023-10-15', 'etc9', 900, 'READY', 'employee1'),
	(10, 'employee1', 'material10', 'tmpCode...10', '2023-09-15', '2023-10-15', 'etc10', 1000, 'READY', 'employee1');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- 테이블 delidb.progress_inspection 구조 내보내기
CREATE TABLE IF NOT EXISTS `progress_inspection` (
  `progress_inspection_no` bigint(20) NOT NULL AUTO_INCREMENT,
  `progress_inspection_date` date DEFAULT NULL,
  `progress_inspection_etc` varchar(255) DEFAULT NULL,
  `progress_inspection_state` varchar(255) DEFAULT NULL,
  `progress_inspection_times` int(11) NOT NULL,
  `rate_of_progress` float NOT NULL,
  `employee_employee_id` varchar(255) DEFAULT NULL,
  `order_order_no` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`progress_inspection_no`),
  KEY `FK3i4rlr9jpp52r9lhgwsie67ic` (`employee_employee_id`),
  KEY `FK3jljq6kgyh6av9dofjebhrku9` (`order_order_no`),
  CONSTRAINT `FK3i4rlr9jpp52r9lhgwsie67ic` FOREIGN KEY (`employee_employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `FK3jljq6kgyh6av9dofjebhrku9` FOREIGN KEY (`order_order_no`) REFERENCES `orders` (`order_no`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.progress_inspection:~10 rows (대략적) 내보내기
/*!40000 ALTER TABLE `progress_inspection` DISABLE KEYS */;
INSERT INTO `progress_inspection` (`progress_inspection_no`, `progress_inspection_date`, `progress_inspection_etc`, `progress_inspection_state`, `progress_inspection_times`, `rate_of_progress`, `employee_employee_id`, `order_order_no`) VALUES
	(1, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee1', 1),
	(2, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee2', 1),
	(3, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee3', 1),
	(4, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee4', 1),
	(5, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee5', 1),
	(6, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee6', 1),
	(7, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee7', 1),
	(8, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee8', 1),
	(9, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee9', 1),
	(10, '2023-09-15', '비고 ', 'READY', 1, 10, 'employee10', 1);
/*!40000 ALTER TABLE `progress_inspection` ENABLE KEYS */;

-- 테이블 delidb.reply 구조 내보내기
CREATE TABLE IF NOT EXISTS `reply` (
  `rno` bigint(20) NOT NULL AUTO_INCREMENT,
  `moddate` datetime(6) DEFAULT NULL,
  `regdate` datetime(6) DEFAULT NULL,
  `reply_text` varchar(255) DEFAULT NULL,
  `replyer` varchar(255) DEFAULT NULL,
  `board_bno` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`rno`),
  KEY `idx_reply_board_bno` (`board_bno`),
  CONSTRAINT `FKr1bmblqir7dalmh47ngwo7mcs` FOREIGN KEY (`board_bno`) REFERENCES `board` (`bno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 delidb.reply:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `reply` DISABLE KEYS */;
/*!40000 ALTER TABLE `reply` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
