# Web Application Workshop - Database Setup

This week we will be getting familiar with databases, especially MySQL.

## Things that you should have/download

These are the tools that we will be using for the workshop, and it will be impossible to complete unless you have all of these installed.

### MySQL
[MySQL][mysql] is the main database software that we will be using.

* **Mac Installation** - Follow [this link][mysql-mac], select *MacOS* and download the DMG file. Open the DMG file and follow the instructions.

* **Linux Installation** - Open your terminal and follow the commands below.
    ```
    $ sudo apt-get update
    $ sudo apt-get install mysql-server
    ```

* **Windows Installation** - Follow [this link][mysql-windows], select *Microsoft Windows* and your Operating System, download the Installer and run it, following all instructions.

### NodeJS
[NodeJS][node] is the main framework that we will be using for the web application. It is a very powerful framework written entirely in Javascript that allows developers to create both basic and complex applications.

To install NodeJS on your computer if a Mac or Windows, visit [their download site][node-download] then download and install the correct installer. If you are on a Linux computer, open your terminal and run the command below.

```
sudo apt-get update
$ sudo apt-get install nodejs
sudo apt-get install npm
```

## Introduction to MySQL

To begin the workshop series, lets start by creating a database in MySQL.

### Creating the Database and Tables on Mac/Linux

First, begin by logging in to MySQL.
```
$ mysql -u root -p (login)
```

Then we will create the database for the application, check that we did successfully create it, and then we will tell MySQL that we want to use the database.

```
$ CREATE DATABASE todo;
$ SHOW DATABASES; (check if created)
$ USE todo; (switch to todo database)
```

Let's create the `tasks` table.

```
$ CREATE TABLE tasks (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    task text,
    created_by int unsigned not null,
    status text,
    PRIMARY KEY (id)
);
```

and finally let's create the users' table.

```
$ CREATE TABLE users (
id INT unsigned NOT NULL AUTO_INCREMENT,
username text,
PRIMARY KEY (id)
);
```

### Creating the Database and Tables on Windows

*Valencia, fill in here.*

[mysql]: https://www.mysql.com/
[mysql-mac]: https://dev.mysql.com/downloads/mysql/
[mysql-windows]: http://dev.mysql.com/downloads/installer/
[node]: https://nodejs.org/en/
[node-download]: https://nodejs.org/en/download/
