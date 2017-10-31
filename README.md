A single API for control and manage of the food orders at Allius company. 
This API has the next capabilities:

Register, delete, update and consulting:
  *Users (users)
  *Offices (office)
  *Menu-list (menuList)
  *Orders (order)

The purpose of the mealOrders_API is to manage the orders that the personal of the Allius Unosquare company has need registering a new menu list for all the users and then realize their own orders. It's more efficiently and it has a more performance that setting up an image of food by the social networks. 

All schemas are stored in a local database of MongoDB, for use that, only run the API and the app automatically creates the schema for you in MongoDB.

How can i use this API?

1.- Clone this repo on a local path of your preference (git clone url)
2.- Open the folder with your favorite code editor
3.- Install all dependencies of the modules that the API has use (npm install)
4.- Run mongo (sudo mongod)
5.- Run the app server (node index.js)
6.- Register a new office on mongo (if you prefer, you can use Postman for do this)
7.- Register a new user referencing in the office field of mongo the office ID that you has been registered on step 6.
6.- Prepare the APi for use. Go ahead on index.js file and modify the url cors on line 20 ( origin: 'url' and change it for your front-end side url)
9.- Now try to use the API with your own code of your front-end side