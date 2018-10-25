--Creating default table configeration
CREATE DATABASE IF NOT EXISTS tabapp;
USE tabuser;

CREATE TABLE IF NOT EXISTS user (
  ID INT (11) NOT NULL AUTO_INCREMENT,
  FirstName varchar(255) default NULL,
  LastName varchar(255) default NULL,
  TaskOneName varchar(50) default NULL,
  TaskOneDesc varchar(50) default NULL,
  TaskOneDate varchar(50) default NULL,
  TaskTwoName varchar(50) default NULL,
  TaskTwoDesc varchar(50) default NULL,
  TaskTwoDate varchar(50) default NULL,
  TaskThreeName varchar(50) default NULL,
  TaskThreeDesc varchar(50) default NULL,
  TaskThreeDate varchar(50) default NULL,
  TaskFourName varchar(50) default NULL,
  TaskFourDesc varchar(50) default NULL,
  TaskFourDate varchar(50) default NULL,
  TaskFiveName varchar(50) default NULL,
  TaskFiveDesc varchar(50) default NULL,
  TaskFiveDate varchar(50) default NULL,
)

INSERT INTO 'user' ('FirstName', 'LastName', 'TaskOneName', 'TaskOneDesc',
  'TaskOneDate', 'TaskTwoName', 'TaskTwoDesc', 'TaskTwoDate', 'TaskThreeName',
  'TaskThreeDesc', 'TaskThreeDate', 'TaskFourName', 'TaskFourDesc', 'TaskFourDate',
  'TaskFiveName', 'TaskFiveDesc', 'TaskFiveDate') VALUES
  ('1', 'Jessica', 'Cruz', 'P.O. Box 321', 'Dance', 'All night long', 'Monday night',
  'Read', 'All the books', 'Tuesday night', 'Play soccer', 'At the appt complex',
  'Saturday morn', 'Attend Party', 'Holloween one', 'Satuday night',
   'Do Software Engineering', 'Assignment 13', 'Friday night')
