###  COSC360 Assesment 3: Full-Stack MEVN Application

Name: Joshua Le Gresley

Email: joshlegresley@hotmail.com 

This complete full-stack application was the culmination of the Advanced Web Programming unit at UNE. Through the all the core skills for full stack development were explored including, refreshing knowledge of ES6+, the fundementals of the OSI model, DNS, HTTP, CORS, and webpack. Server-side we learnt how to build a node.js using the Express framework. Following the MVC architecture with integrated mogodb with Mongoose. On the client-side we explored the fundementals of both the React and Vue.js frameworks including Flux architecture. We developed the the skills to connect the client and server using the REST api and also Websockets and ServerSentEvents(SSE). Finally we also explore using web graphics such as d3.js and how to work with SVG's.

**Presentation video can be found at: [DropBearTable](https://youtu.be/tmchx_ktZH0)**

# How to run the app
- Install [Docker](https://www.docker.com/products/docker-desktop) and [Docker Compose](https://docs.docker.com/compose/install/) on your machine.
- In the terminal, run the command `docker-compose up -d` or `docker compose up -d` in the `dropbeartable_mervn` directory.

Before visiting the sites front-end the demo requires data installed into the database. Visit [http://localhost:8081](http://localhost:8081). 
- Create a new database called **test**
- Within this new database create two new collections, **restaurants** and **reservations**.
- Finally import data files for the respective collections, files are located in **/data** directory in the root of the project.

Now the site is ready and can be accessed at:
- Vue.js Client-side: visit [http://localhost:8080](http://localhost:8080).


# How to shut down the app

Important: the command will remove all unused volumes, including the named volume `dropbeartable_mongodb`, which contains all of your data. You should follow the steps to back up your data beforehand.

- To back up the data:
	- visit [http://localhost:8081](http://localhost:8081)
	- select your database and export the data
- Run the command `docker-compose down -v` to stop the running containers and remove the volumes.

# Functionalities 
- For the client-facing storefront CRUD opertations are prestented by using mock restaurant data.
- As required a user can make a reservation specifying, restaurant name, date
time, number of guests limited to 6, mobile number and any special requests.
- Updates can be made to number of guests, mobile number, special requests, time and date.
- A user is notified upon confirmation of the reservation
- Also users can see trending restaurants in the reservations page in the graph showing total reservation numbers
