# Web Application Workshop - Database Setup

This week we will be getting familiar with databases, especially MySQL.

![MySQL Logo][mysql-logo]

## Things that you should have/download

These are the tools that we will be using for the workshop, and it will be impossible to complete unless you have all of these installed.

### MySQL
[MySQL][mysql] is the main database software that we will be using.

* **Mac Installation** - Follow [this link][mysql-mac], select *MacOS* and download the DMG file. Open the DMG file and follow the instructions. When MySQL first installs, it will give you a temporary password to login. Save this for later!

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
$ sudo apt-get update
$ sudo apt-get install nodejs
$ sudo apt-get install npm
```

## Introduction to MySQL

To begin the workshop series, lets start by creating a database in MySQL.

### Creating the Database and Tables on Mac/Linux

First, begin by logging in to MySQL. Enter the temporary password you saved from before.
```
$ mysql -u root -p (login)
```
Once logged in, we will change the password using this command: (use 'new-password' as the password!)
```
$ ALTER USER 'root'@'localhost' IDENTIFIED BY 'new-password';
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

For Windows, we will be using the Windows [MySQL Workbench][workbench]. Download and install it on your Windows Computer.

First, we will create the database Schema for the application.

```
Create new Schema (Name: todo)
```

Then let's create the `tasks` table.

```
Create new table (Name: tasks)

Column      |       Type         |  Nullable  |  Extra
id            int(10) unsigned         NO        PK, Auto_Inc
task          text                     NO          
created_by    int(10)                  NO
status        text                     NO
```

Then let's create the `users` table.

```
Create new table (Name: users)

Column      |       Type          |  Nullable  |  Extra
id            int(10) unsigned        NO          PK, Auto_Inc
username      text                    NO
```


[mysql]: https://www.mysql.com/
[mysql-mac]: https://dev.mysql.com/downloads/mysql/
[mysql-windows]: http://dev.mysql.com/downloads/installer/
[node]: https://nodejs.org/en/
[node-download]: https://nodejs.org/en/download/
[workbench]: https://www.mysql.com/products/workbench/
[mysql-logo]: https://upload.wikimedia.org/wikipedia/en/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png
