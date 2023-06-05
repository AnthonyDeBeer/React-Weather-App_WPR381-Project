// Declare variables.
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./router");
const PORT = 5000;

// Set body-parser to return data as a json.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set router that contains API detail
app.use("/forcasts", router);

// Imports icons from public folder on the client directory.
app.use(express.static("public"));

// Display message on server port that shows that the server is up and running.
app.get("/", (req, res) => {
  res.send("Server is running. Use http://localhost:3000 to display the client side.");
});

// Start the server.
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
