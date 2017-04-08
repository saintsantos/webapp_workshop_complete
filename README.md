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


## Introduction to MySQL & Databases

> A database is a separate application that stores a collection of data. Each database has one or more distinct APIs for creating, accessing, managing, searching and replicating the data it holds.
>
> MySQL Introduction - TutorialsPoint

If you've taken a class that discussed computer memory at all, the you know about two major types of memory:

* **Volatile Main Memory (RAM)** - Really fast, but not persistent and/or reliable enough.
* **Non-volatile Memory (Disks/Drives)** - Really, really slow, but persistent and pretty reliable.

So what happens if we want to host and manage a web application that gets 1 million hits a minute, and we have a complex data layout with multiple users, permissions, blogs, status updates, 'stories', and whatnot? If we store all of that data in Main Memory, there's a good chance that it could be lost due to its non-persistence, but if we store it all on Disks and Hard Drives, then each request will have a long lag as data is read into memory. Both of these solutions *SUCK*, so that's where carefully written database design and software come into play. Chances are, you won't write your own underlying database, you will just create one using an existing solution such as *MySQL* or *PostgreSQL*, but you WILL most likely have to become very familiar with using these solutions. They take the efficiency and speed of main memory and caching with the persistence and reliability of secondary storage to provide blazing fast queries, lookups, and insertions, to keep the loading time down for massive web applications.

*If you are looking to get a job at a company that uses web applications or RESTful services, then you will have to get good at this stuff.*

![Stories meme][stories]
Now you too can include Stories in your applications!

### SQL vs NoSQL

One of the arguments raging on in the developer world today is preference of either SQL or NoSQL databases. For this workshop series, we will stick to just SQL databases as they are a little more organized, but there are tons of great tutorials on NoSQL as well.

**SQL Databases**, such as *MySQL*, *PostgreSQL*, and *SQLite* are **relational databases**, meaning that they are designed and built using **tables** with specific columns. Each column holds one piece of data in a very rigid format; once a column is defined as a format, its very difficult to change it later on. Relational databases are also good at *relationships* - who would've guessed? A table may have a specific column that **joins** it to another table. For example:

**User Table**

| ID | Username | Password    | Email        |
|:--:|:--------:|-------------|--------------|
| 1  | danst    | bieberfan97 | ds@gmail.com |
| 2  | valk     | qwerty123   | vk@gmail.com |
| 3  | rachrob  | 01234567    | rr@gmail.com |

**Blog Post Table**

| ID |               Title              | Text        | Posted At      | User ID |
|:--:|:--------------------------------:|-------------|----------------|---------|
| 1  | Justin Bieber Fan Club           | (some blog) | April 8, 2017  | 1       |
| 2  | Buffalo Sports Lose Again        | (some blog) | April 9, 2017  | 3       |
| 3  | Wifi Pets Are the Next Big Thing | (some blog) | April 9, 2017  | 2       |
| 4  | Why Cardboard-Only Diet Works    | (some blog) | April 11, 2017 | 1       |

We have two tables above, the *User* table and the *Blog Post* table. Each table in a SQL database must have one column known as the **Primary Key**. Every row - or entry - in the table has a unique primary key to easily distinguish and find a specific entry. Using these unique keys, we can connect, or **join** different tables together, like we do above. Notice how each Blog Post entry has a field for the *User ID*. This means that we can associate a user to their posts and vis versa. This is super powerful and allows us to make some very cool relational tables. To visualize the relations, look at the picture below. Notice how a user can have any number of posts related to them, but each post can only have one user. In this case, the User is the **parent** and the blog post is the **child**.

![SQL Relationships][sql-image]


**NoSQL Databases** do not require the rigid structure that SQL/Relational databases have to have. This allows the databases to be more flexible with the data that they hold, but can cause some inconsistency issues that would have to be checked for, such as if one entry has a specific value but another does not. The most common type of NoSQL database configuration is **Key-Value Storing**, which is the case with *MongoDB*, one of the leaders of the NoSQL community. In *MongoDB*, everything is stored in a key-value dictionary - usually JSON, YAML, or XML - that interacting programs can request those keys and pull out the represented data. This allows for more deeply nested relationships, because a *child* entry is located inside of its *parent*, versus in SQL where they are in two different tables. Using the same model structure we have above, we can store that data in a NoSQL database like so:

```json
{
  "users": [
    {
      "username": "danst",
      "password": "bieberfan97",
      "email": "ds@gmail.com",
      "posts": [
        {
          "title": "Justin Bieber Fan Club",
          "text": "Let me tell you why Justin Bieber is the best...."
        },
        {
          "title": "Why Cardboard-Only Diet Works",
          "text": "Forget Gluten, forget Carbs, eating cardboard boxes is great...."
        }
      ]
    },
    {
      "username": "valk",
      "password": "qwerty123",
      "email": "vk@gmail.com",
      "posts": [
        {
          "title": "Wifi Pets Are the Next Big Thing",
          "text": "So I just downloaded my new dog from BuyADog.com, and it was awesome!"
        }
      ]
    },
    {
      "username": "rachrob",
      "password": "01234567",
      "email": "rr@gmail.com",
      "posts": [
        {
          "title": "Buffalo Sports Lose Again",
          "text": "Why is our city so bad at sports!?!?"
        }
      ]
    }
  ]
}
```

Each type of database setup comes with its own tradeoffs that you can look more into [here][sql-vs-nosql]. Learn both, pick one or the other depending on your future projects, and don't listen to people who say one is absolutely better than the other.

![SQL vs NoSQL][sql-nosql]

## Getting Down to Business with Our Application

With some knowledge under us as to what databases are, let's actually get down to the basis of creating our very own web application! We are going to build our own **TODO List** application, that will let users input their *to do* lists and view them later on. In future weeks we will be building the actual application, but for now lets just see how we would create the database.

We are going to use *MySQL*, the most popular OpenSource database software in the community. If you are looking for other options in the future, *SQLite* is really small and works for development/local testing, and *PostgreSQL* is the most scalable/fastest database software with the most available customization, but also has a higher learning curve.

### Always Design BEFORE You Code/Build

Before you build your database and start filling it, design it our completely first, because it will save the hassle of trying to bandaid changes and migrations over it in the future.

* A **migration** is a change to the database tables in a SQL database.

For this application, we will have a **User Table** to hold the names of people who are using our application and a **Task Table** to hold the different tasks and who they belong to. A visual representation is below.

![Database Layout][database-layout]

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
Create new Schema, name it 'todo'
```
![new-schema]


Then let's create the `tasks` table.

```sql
Create new table, name it 'tasks'

Column      |       Type         |  Nullable  |  Extra
id            int(10) unsigned         NO        PK, Auto_Inc
task          text                     NO          
created_by    int(10)                  NO
status        text                     NO
```
![tasks-table]


Then let's create the `users` table.

```sql
Create new table, name it 'users'

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
[sql-nosql]: https://docs.microsoft.com/fr-fr/azure/documentdb/media/documentdb-nosql-vs-sql/nosql-vs-sql-overview.png
[sql-image]:https://github.com/dstarner15/mdimages/raw/master/SQL.png
[sql-vs-nosql]: http://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool
[database-layout]: https://github.com/dstarner15/mdimages/raw/master/database.png
[stories]: https://cdn.meme.am/cache/instances/folder21/75812021.jpg
