# Web Application Workshop - Database Setup

This week we will be getting familiar with databases, especially MySQL.

## Things that you should have/download

These are the tools that we will be using for the workshop, and it will be impossible to complete unless you have all of these installed.

### MySQL
[MySQL][mysql] is the main database software that we will be using.

* **Mac Installation** -

* **Linux Installation**

* **Windows Installation**


## Setting up your MySQL (Workbench)

### Step 0:
Everyone should have downloaded:
* [MySQL][mysql] (and MySQL Workbench if on a Windows machine)
* [Node.js][node]
* Postman (Application or Chrome extension)
* Text Editor (Atom, Notepad++, Sublime)

### Step 1:
* Open up MySQL (Workbench)
* For Mac:
    ```
	$ mysql -u root -p (login)
	$ CREATE DATABASE todo;
	$ SHOW DATABASES; (check if created)
	$ USE todo; (switch to todo database)
	$ CREATE TABLE tasks (
		id INT unsigned NOT NULL AUTO_INCREMENT,
		Task text,
		created_by int unsigned not null,
		Status text,
		PRIMARY KEY (id)
	 );

	$ CREATE TABLE users (
		id INT unsigned NOT NULL AUTO_INCREMENT,
		Username text,
		PRIMARY KEY (id)
	 );
    ```


* For Windows (Done in workbench)
    Create new Schema (Name: todo)
    * Create new table (Name: tasks)
        ```
	Column      |       Type         |  Nullable  |  Extra
	id            int(10) unsigned         NO        PK, Auto_Inc
	task          text                     NO          
	created_by    int(10)                  NO
	status        text                     NO

        Create new table (Name: users)
        Column      |       Type          |  Nullable  |  Extra
        id            int(10) unsigned        NO          PK, Auto_Inc
        username      text                    NO
	```

[mysql]: https://www.mysql.com/
