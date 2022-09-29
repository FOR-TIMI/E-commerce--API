# E-commerce-Api
Functional Express.js API created to allow users to perform CRUD operations on  product data 

## Description
This is a backend for an e-commerce API that allows a front end developers to perform CRUD operations to the database from the Front end

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Screenshots](#Screenshots)
- [Contributions](#Contributions)
- [Video Demo](https://drive.google.com/file/d/1LmyNC3uhSGus34N3wpV2DvLqNhVdBtw9/view)



## Installation
To set up and utilise this project. Take the following steps.

- Step 1: Clone this repository
- ![image](https://user-images.githubusercontent.com/104241247/192946104-56764a05-c228-41db-be7e-8d732b42c885.png)

- Step 2: Install dependencies by running the ``` npm install ``` command in the command line
- Step 3: Open your code editor by running the command ``` code . ```
- Step 4: Create your database.<br> Luckily, theres a schema.sql file that we can run to create the database automatically. 
You run this file by first logging in to you mysql server and running the ```source db/schema.sql ```
  command to create the database
- Step 5: Create .env file
- Step 6: Type in your database credentials. Ensure that they use the format
```
DB_NAME = ecommerce_db  // Our database name in this case 
DB_USER = YOUR mysql USERNAME 
DB_PW = YOUR mysql PASSWORD

```
- Step 7(Optional!): A seeds folder has been added to populate the database with some data.<br>
To run this seeds folder, we must run the ``` npm run seed ``` command. 

- Step 8: Start server. you can start ther server by simply running ```npm start ``` in the command line
- Step 9: Open Insomnia core/postman

- Step 10: You can create, read, update, and delete categories, tags, and products using these urls:
  - http://localhost:3006/api/categories
  - http://localhost:3006/api/categories/:id (required to delete, update, or just to read one category)
  - http://localhost:3006/api/tags
  - http://localhost:3006/api/tags/:id (required to delete, update, or just to read one tag)
  - http://localhost:3006/api/products
  - http://localhost:3006/api/products/:id (required to delete, update, or just to read one tag)

## Usage
This Api can be used by any front end developer that want's to integrate a backend for their e commerce site

## Screenshots
![image](https://user-images.githubusercontent.com/104241247/192951938-d1207490-51d8-4f95-930b-6fe0f54e949e.png)
![image](https://user-images.githubusercontent.com/104241247/192951973-6e7ee848-7e99-4260-a17b-dcbbd22745f8.png)
![image](https://user-images.githubusercontent.com/104241247/192952022-b5bb15ad-12f2-43eb-b117-3505390361ab.png)


## Contributions
Made with ❤️ by Timi

If you have any further questions please feel free to contact me at [femiladiranerife24@gmail.com](mailto:femiladiranerife24@gmail.com)
