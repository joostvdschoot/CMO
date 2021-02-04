--
-- Database: `cmo_db`
--

CREATE DATABASE IF NOT EXISTS `cmo_db`;
USE `cmo_db`;


-- ENTITIES

--
-- Struttura della tabella `account`
--

CREATE TABLE IF NOT EXISTS `account` (
	`channel` varchar(130) ,
	`description` varchar(130)  NOT NULL,
	`maxcredit` int  NOT NULL,
	`name` varchar(130)  NOT NULL,
	`retailcorpthreshold` int  NOT NULL,
	`revolving` bool  NOT NULL,
	`segment` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `country`
--

CREATE TABLE IF NOT EXISTS `country` (
	`code` varchar(130)  NOT NULL,
	`name` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `creditline`
--

CREATE TABLE IF NOT EXISTS `creditline` (
	`applicationid` varchar(130) ,
	`creditlimit` int  NOT NULL,
	`enddate` date  NOT NULL,
	`groupcreditlimit` int ,
	`revolving` bool  NOT NULL,
	`startdate` date  NOT NULL,
	`status` varchar(130)  NOT NULL,
	`type` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `lessor`
--

CREATE TABLE IF NOT EXISTS `lessor` (
	`externalid` varchar(130) ,
	`genesis` varchar(130)  NOT NULL,
	`name` varchar(130)  NOT NULL,
	`number` varchar(130)  NOT NULL,
	`share` int  NOT NULL,
	`type` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `organization`
--

CREATE TABLE IF NOT EXISTS `organization` (
	`active` bool ,
	`externalid` varchar(130)  NOT NULL,
	`formalname` varchar(130) ,
	`liable` bool ,
	`searchname` varchar(130) ,
	`type` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `partner`
--

CREATE TABLE IF NOT EXISTS `partner` (
	`externalid` varchar(130) ,
	`name` varchar(130)  NOT NULL,
	`partnercode` varchar(130)  NOT NULL,
	`type` varchar(130) ,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `product`
--

CREATE TABLE IF NOT EXISTS `product` (
	`description` varchar(130) ,
	`productname` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`mail` varchar(130) ,
	`name` varchar(130) ,
	`password` varchar(130)  NOT NULL,
	`roles` varchar(130) ,
	`surname` varchar(130) ,
	`username` varchar(130)  NOT NULL,
	
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

ALTER TABLE `user` MODIFY COLUMN `password` varchar(128)  NOT NULL;

INSERT INTO `cmo_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `cmo_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);





-- relation 1:m lessor Account - Lessor
ALTER TABLE `account` ADD COLUMN `lessor` int(11)  REFERENCES lessor(_id);

-- relation 1:m product Account - Product
ALTER TABLE `account` ADD COLUMN `product` int(11)  NOT NULL REFERENCES product(_id);

-- relation 1:m account CreditLine - Account
ALTER TABLE `creditline` ADD COLUMN `account` int(11)  REFERENCES account(_id);

-- relation 1:m organization CreditLine - Organization
ALTER TABLE `creditline` ADD COLUMN `organization` int(11)  REFERENCES organization(_id);

-- relation 1:m country Lessor - Country
ALTER TABLE `lessor` ADD COLUMN `country` int(11)  REFERENCES country(_id);

-- relation 1:m operatingentity Lessor - Lessor
ALTER TABLE `lessor` ADD COLUMN `operatingentity` int(11)  REFERENCES lessor(_id);

-- relation 1:m country Organization - Country
ALTER TABLE `organization` ADD COLUMN `country` int(11)  REFERENCES country(_id);

-- relation 1:m lessor Organization - Lessor
ALTER TABLE `organization` ADD COLUMN `lessor` int(11)  REFERENCES lessor(_id);

-- relation 1:m liableparent Organization - Organization
ALTER TABLE `organization` ADD COLUMN `liableparent` int(11)  REFERENCES organization(_id);

-- relation 1:m parent Organization - Organization
ALTER TABLE `organization` ADD COLUMN `parent` int(11)  REFERENCES organization(_id);

-- relation 1:m partner Organization - Partner
ALTER TABLE `organization` ADD COLUMN `partner` int(11)  REFERENCES partner(_id);

-- relation 1:m ultimateparent Organization - Organization
ALTER TABLE `organization` ADD COLUMN `ultimateparent` int(11)  REFERENCES organization(_id);

-- relation 1:m account Partner - Account
ALTER TABLE `partner` ADD COLUMN `account` int(11)  REFERENCES account(_id);

-- relation 1:m country Partner - Country
ALTER TABLE `partner` ADD COLUMN `country` int(11)  REFERENCES country(_id);

-- relation 1:m lessor Partner - Lessor
ALTER TABLE `partner` ADD COLUMN `lessor` int(11)  REFERENCES lessor(_id);


