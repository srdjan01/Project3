CREATE DATABASE project3_db;
USE project3_db;
CREATE TABLE users(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  userFirstName VARCHAR(100),
  userLastName VARCHAR(100),
  userEmail VARCHAR(100),
  userPassword VARCHAR(100),
  userPhoneNumber INTEGER(11),
  userZipcode INTEGER(11),
  PRIMARY KEY (id)
);
CREATE TABLE trainers(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  trainerFirstName VARCHAR(100),
  trainerLastName VARCHAR(100),
  trainerEmail VARCHAR(100),
  trainerPassword VARCHAR(100),
  trainerPhoneNumber INTEGER(11),
  trainerZipcode INTEGER (11),
  PRIMARY KEY (id)
);

  