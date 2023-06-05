# React-Weather-App_WPR381-Project
This was n project we received in our Web Programming subject. We had to create a weather app that uses a backend API handler using node js and express, and a frontend which displayed current weather details via zipcode which had to be created with React.

The node_modules for both the client and server side is not included. Therefore before you try to run the app make sure you first install all the necessary dependencies.
You can see the required dependencies in the package.json files.

To start the project follow the following steps
The first thing to start is the server:
1) Start a new terminal
2) Run { cd server }
3) Now you are in the server directory, now run { npm run dev }
4) Now the server should be up and running
5) In the terminal it will display { Server running at http://localhost:5000 }. This is the url for the server.

*** Note: If the port number is in use then change the port number in server>index.js ***

Next to start the react front end:
1) Start a new terminal (do not close the server terminal)
2) Run { cd client }
3) Now you are in the client directory.
4) Run { npm run start }
5) This will take a few moments, but dont click away, the react app is starting to initialize and will open a browser window which is the react app. The url will be { http://localhost:3000 }

*** Note: The app only uses ZA zipcodes. Refresh the page to re-enter a new zipcode after displaying the weather card for a specific area. 
