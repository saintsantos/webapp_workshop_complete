# Web Application Workshop - Database Setup

Welcome to the UB Scientista/ACM Web Application Workshop Series! This week we will be getting familiar with databases, especially MySQL.

![MySQL Logo][mysql-logo]

## Things that you should have/download

These are the tools that we will be using for the workshop, and it will be impossible to complete unless you have all of these installed.

### MySQL
[MySQL][mysql] is the main database software that we will be using.

* **Mac Installation** - Follow [this link][mysql-mac], select *MacOS* and download the DMG file. Open the DMG file and follow the instructions. When MySQL first installs, it will give you a temporary password to login. Save this for later!

* **Linux Installation** - Open your terminal and follow the commands below.
    ```bash
    $ sudo apt-get update
    $ sudo apt-get install mysql-server
    ```

* **Windows Installation** - Follow [this link][mysql-windows], select *Microsoft Windows* and your Operating System, download the Installer and run it, following all instructions.


## Introduction to MySQL

To begin the workshop series, lets start by creating a database in MySQL.

### Creating the Database and Tables on Mac/Linux

First, begin by logging in to MySQL. Enter the temporary password you saved from before.
```bash
$ mysql -u root -p
```
Once logged in, we will change the password using this command: (use 'new-password' as the password!)
```bash
$ ALTER USER 'root'@'localhost' IDENTIFIED BY 'new-password';
```

Then we will create the database for the application, check that we did successfully create it, and then we will tell MySQL that we want to use the database.

```bash
$ CREATE DATABASE todo;
$ SHOW DATABASES;
$ USE todo;
```

Let's create the `tasks` table.

```sql
$ CREATE TABLE tasks (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    task text,
    created_by int unsigned not null,
    status text,
    PRIMARY KEY (id)
);
```

and finally let's create the users' table.

```sql
$ CREATE TABLE users (
    id INT unsigned NOT NULL AUTO_INCREMENT,
    username text,
    PRIMARY KEY (id)
);
```

### Creating the Database and Tables on Windows

For Windows, we will be using the Windows [MySQL Workbench][workbench]. Download and install it on your Windows Computer.

First, we will create the database Schema for the application.

```sql
Create new Schema (Name: todo)
```
![new-schema]


Then let's create the `tasks` table.

```sql
Create new table (Name: tasks)

Column      |       Type         |  Nullable  |  Extra
id            int(10) unsigned         NO        PK, Auto_Inc
task          text                     NO          
created_by    int(10)                  NO
status        text                     NO
```
![tasks-table]


Then let's create the `users` table.

```sql
Create new table (Name: users)

Column      |       Type          |  Nullable  |  Extra
id            int(10) unsigned        NO          PK, Auto_Inc
username      text                    NO
```
![users-table]

[mysql]: https://www.mysql.com/
[mysql-mac]: https://dev.mysql.com/downloads/mysql/
[mysql-windows]: http://dev.mysql.com/downloads/installer/
[node]: https://nodejs.org/en/
[node-download]: https://nodejs.org/en/download/
[workbench]: https://www.mysql.com/products/workbench/
[mysql-logo]: http://blog.wpoven.com/wp-content/uploads/2016/10/mysql-1.jpg
[new-schema]: https://cloud.githubusercontent.com/assets/22101002/24831702/ff3542da-1c6c-11e7-9c57-af154751f5e3.png
[tasks-table]: https://cloud.githubusercontent.com/assets/22101002/24831651/f048bc30-1c6b-11e7-8aba-1fc9c7285114.png
[users-table]: https://cloud.githubusercontent.com/assets/22101002/24831670/404a1972-1c6c-11e7-9383-3fcc613bcc49.png
